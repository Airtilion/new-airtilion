// app/portfolio/[id]/page.jsx
import { getDictionary } from '@utils/getDictionary'
import Header from '@components/Header'
import PortfolioIntroduction from '@components/singlePortfolio/PortfolioIntroduction/PortfolioIntroduction'
import Footer from '@components/Footer'
import PortfolioBrief from '@components/singlePortfolio/PortfolioBrief'
import PortfolioTechs from '@components/singlePortfolio/PortfolioTechs'

export async function generateStaticParams() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const res = await fetch(new URL('/api/projects/ids', base), { cache: 'no-store' })
  const ids = await res.json()
  return ids.flatMap((id) => [
    { params: { id } },                        
    { params: { id }, searchParams: { lang: 'en' } },
  ])
}

export default async function Page({params, searchParams}) {
  const {id} = await params
  const { lang = 'pl' } = await searchParams
  const dictionary = (await getDictionary(lang, 'portfolio')) ?? {}


  // fetch projektu
  const res = await fetch(
    new URL('/api/projects/getSingle', process.env.NEXT_PUBLIC_SITE_URL),
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id }),
      cache: 'no-store',
    }
  )
  if (!res.ok) return <p>Projekt nie znaleziony.</p>
  const project = await res.json()
  console.log(project)

  const getLink = (file) =>
    `${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/${project.Client}/${file.replace(/\\/g, '/')}`

  return (
    <>
      <Header title={project.Name} content={dictionary.header?.description ?? 'Default Content'} bg={getLink(project.Background.file)} base={Boolean(project.Background.base64)} base64={project.Background.base64}/>

      <main className="flex flex-col gap-[192px] mt-[192px] pb-32 overflow-hidden max-sm:mt-[128px] relative">
        <PortfolioIntroduction dict={dictionary.project.introduction} desc={project.Description[lang]} logo={project.Logo.file} screens={project.Screens} convertLink={getLink}/>
        <PortfolioBrief dict={dictionary.project.brief} brief={project.Brief[lang]} screens={project.Screens} convertLink={getLink}/>
        <PortfolioTechs dict={dictionary.project.technologies} techs={project.Technologies}/>
      </main>

      <div className='gradient-transparency-v absolute w-[800px] h-[calc(100%-550px)] bg-linear-to-r from-[#00000000] via-[#e283504D] to-[#00000000] z-[-3] top-0 left-[50%] translate-x-[-50%] max-lg:w-[500px] max-sm:w-[80%]'></div>

      <Footer dict={dictionary.footer}/>
    </>
  )
}
