import { promises as fs } from 'fs';
import path from 'path';

export async function getDictionary(lang, page) {
  const validLanguages = ['en', 'pl']; // Lista dozwolonych języków
  const safeLang = validLanguages.includes(lang) ? lang : 'pl'; // Domyślny język: pl
  try {
    const filePath = path.join(process.cwd(), 'languages', safeLang, `${page}.json`);
    // console.log(`Loading dictionary: ${filePath}`); // Log dla debugowania
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    if (!data || typeof data !== 'object') {
      console.error(`Invalid dictionary format for lang: ${safeLang}, page: ${page}`);
      return {};
    }

    // console.log(`Dictionary loaded for lang: ${safeLang}, page: ${page}`, data); // Log dla debugowania
    return data;
  } catch (error) {
    console.error(`Error loading dictionary for lang: ${safeLang}, page: ${page}`, error);
    return {}; // Zwróć pusty obiekt w przypadku błędu
  }
}