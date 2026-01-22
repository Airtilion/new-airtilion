// scripts/generate-en-locales.mjs
import fs from 'fs/promises'
import path from 'path'
import url from 'url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

// ścieżki odnoszące się do root projektu (languages w root)
const SRC_DIR = path.join(__dirname, '..', 'languages', 'en', 'cities')
const DEST_DIR = path.join(__dirname, '..', 'public', 'locales', 'en', 'cities')

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function listJsFiles(dir) {
  try {
    const all = await fs.readdir(dir)
    return all.filter(f => f.endsWith('.js') || f.endsWith('.mjs') || f.endsWith('.cjs'))
  } catch (e) {
    console.error('Cannot read source dir', dir, e.message)
    return []
  }
}

async function run() {
  await ensureDir(DEST_DIR)
  const files = await listJsFiles(SRC_DIR)
  if (!files.length) {
    console.warn('No EN city files found in', SRC_DIR)
  }

  for (const file of files) {
    const fullPath = path.join(SRC_DIR, file)
    try {
      const mod = await import(url.pathToFileURL(fullPath).href)

      // spodziewamy się named export o nazwie slug lub default zawierający obiekt
      const slugFromFile = path.basename(file).replace(/\.(js|mjs|cjs)$/, '')
      let exported = mod[slugFromFile] ?? mod.default ?? mod

      // jeśli moduł eksportuje obiekt z wieloma nazwami, spróbuj znaleźć odpowiedni
      if (exported && typeof exported === 'object' && !('header' in exported) && Object.keys(exported).length === 1) {
        exported = exported[Object.keys(exported)[0]]
      }

      if (!exported || typeof exported !== 'object') {
        console.warn('Unexpected export structure for', file)
        continue
      }

      // minimalny payload: dict + data.header + data.cta + footer (jeśli są)
      const payload = {
        dict: exported.dict || exported.dictionary || {},
        data: {
          header: exported.header || null,
          cta: exported.cta || null
        },
        footer: exported.footer || {}
      }

      const outPath = path.join(DEST_DIR, `${slugFromFile}.json`)
      await fs.writeFile(outPath, JSON.stringify(payload, null, 2), 'utf8')
      console.log('Wygenerowano:', outPath)
    } catch (err) {
      console.warn('Nie udało się zaimportować', fullPath, err.message)
    }
  }
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
