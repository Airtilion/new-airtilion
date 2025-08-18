// app/portfolio/[id]/page.jsx
import { getDictionary } from '@utils/getDictionary'
import Header from '@components/Header'
import PortfolioIntroduction from '@components/singlePortfolio/PortfolioIntroduction/PortfolioIntroduction'
import Footer from '@components/Footer'
import PortfolioBrief from '@components/singlePortfolio/PortfolioBrief'
import PortfolioTechs from '@components/singlePortfolio/PortfolioTechs'
import PortfolioSteps from '@components/singlePortfolio/PortfolioSteps/PortfolioSteps'
import PortfolioAchivements from '@components/singlePortfolio/PortfolioAchivements/PortfolioAchivements'
import PortfolioClient from '@components/singlePortfolio/PortfolioClient'
import PortfolioReview from '@components/singlePortfolio/PortfolioReview'
import PortfolioCallToAction from '@components/singlePortfolio/PortfolioCallToAction'
import PortfolioSum from '@components/singlePortfolio/PortfolioSum'

import { getProjectById, getProjectIds } from '@lib/projects'
import SlideUpContact from '@components/SlideUpContact'

export async function generateMetadata({ params, searchParams }) {
  const sParams = searchParams instanceof Promise ? await searchParams : searchParams
  const lang = sParams?.lang || 'pl'
  const id = params?.id

  let project = null

  try {
    project = await getProjectById(id)
  } catch (e) {
    project = null
  }

  const projectName = project?.Name ?? null

  const title = projectName ? `${projectName} — Airtilion Portfolio` : 'Airtilion — Portfolio — Zobacz nasze realizacje'
  const description = 'Zobacz nasze realizacje: nowoczesne strony internetowe, sklepy i aplikacje. Airtilion — tworzymy produkty, które działają.'

  const canonical = `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/${id}${lang && lang !== 'pl' ? `?lang=${encodeURIComponent(lang)}` : ''}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: project?.Background?.file
        ? [{ url: `${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/${project.Client}/${project.Screens[0].file.replace(/\\/g, '/')}`, alt: projectName ?? 'Projekt' }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export async function generateStaticParams() {
  try {
    const ids = await getProjectIds()
    return ids.map((id) => ({ id: String(id) }))
  } catch (err) {
    console.error('generateStaticParams: nie udało się pobrać ids', err)
    return [] // zapobiega crashowi builda - ale nie wygeneruje stron
  }
}

export default async function Page({ params, searchParams }) {

  const sParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const lang = sParams?.lang || 'pl';

  const { id } = await params
  const dictionary = (await getDictionary(lang, 'portfolio')) ?? {}

  let project
  try {
    project = await getProjectById(id)
    project = JSON.parse(JSON.stringify(project))
  } catch (err) {
    console.error('Błąd pobierania projektu:', err)
    return <p>Projekt nie znaleziony.</p>
  }

  const getLink = (file) =>
    `${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/${project.Client}/${file.replace(/\\/g, '/')}`
  const getClientLink = (file) =>
    `${process.env.NEXT_PUBLIC_API_URL}/uploads/clients/${project.Client}/${file.replace(/\\/g, '/')}`

  return (
    <>
      <Header
        title={project.Name}
        content={dictionary.header?.description ?? 'Default Content'}
        bg={getLink(project.Background?.file || '')}
        base={Boolean(project.Background?.base64)}
        base64={project.Background?.base64}
        dark={true}
      />

      <main className="flex flex-col gap-[192px] mt-[192px] pb-32 overflow-hidden max-sm:mt-[128px] relative">
        <PortfolioIntroduction
          dict={dictionary.project.introduction}
          desc={project.Description?.[lang]}
          logo={project.Logo?.file}
          screens={project.Screens}
          clientID={project.Client}
          visualization={project.Visualization}
          projectName={project.Name}
          link={project.Link}
        />
        <PortfolioBrief dict={dictionary.project.brief} brief={project.Brief?.[lang]} screens={project.Screens} convertLink={getLink} />
        <PortfolioTechs dict={dictionary.project.technologies} techs={project.Technologies} />
        <PortfolioSteps dict={dictionary.project.steps} steps={project.Work?.[lang]} />
        <PortfolioAchivements
          dict={dictionary.project.achivements}
          image={getLink(project.Screens?.[6]?.file || '')}
          achivements={project.Achievements?.[lang]}
        />
        <PortfolioClient dict={dictionary.project.client} client={project.ClientData} convertLink={getClientLink} lang={lang} />

        {project.Review?.author && project.Review.author !== 'Brak' ? (
          <PortfolioReview
            dict={dictionary.project.review}
            revs={project.Review.text?.[lang]}
            author={project.Review.author}
            authorRole={project.Review.authorRole?.[lang]}
          />
        ) : (
          <PortfolioSum dict={dictionary.project.sum} text={project.Summation?.text?.[lang]} />
        )}

        <PortfolioCallToAction dict={dictionary.project.cta} />
        <SlideUpContact dict={dictionary.cta?.form ?? {}} lang={lang} />
      </main>

      <div className="gradient-transparency-v absolute w-[800px] h-[calc(100%-550px)] bg-linear-to-r from-[#00000000] via-[#e283504D] to-[#00000000] z-[-3] top-0 left-[50%] translate-x-[-50%] max-lg:w-[500px] max-sm:w-[80%]"></div>

      <Footer dict={dictionary.footer} />
    </>
  )
}
