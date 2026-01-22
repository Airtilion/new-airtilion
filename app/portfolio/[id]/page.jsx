import { notFound } from 'next/navigation';
import { getDictionary } from '@utils/getDictionary';
import { getProjectById, getProjectIds } from '@lib/projects';

import PortfolioPageClient from '@components/singlePortfolio/PortfolioPageClient';

export const dynamic = 'force-static';
export const dynamicParams = true; 

export async function generateMetadata({ params }) {
  const { id } = await params;
  let project = null;

  try {
    project = await getProjectById(id);
  } catch (e) {
    return { title: 'Projekt nie znaleziony' };
  }

  if (!project) return { title: 'Projekt nie znaleziony' };

  const projectName = project.Name ?? null;
  const title = projectName ? `${projectName} - Airtilion Portfolio` : 'Airtilion - Portfolio';
  const description = 'Zobacz nasze realizacje: nowoczesne strony internetowe, sklepy i aplikacje.';
  
  const canonical = `${process.env.NEXT_PUBLIC_SITE_URL}/portfolio/${id}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: project.Background?.file
        ? [{ url: `${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/${project.Client}/${project.Screens[0].file.replace(/\\/g, '/')}`, alt: projectName ?? 'Projekt' }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export async function generateStaticParams() {
  try {
    const ids = await getProjectIds();
    return ids.map((id) => ({ id: String(id) }));
  } catch (err) {
    console.error('generateStaticParams error:', err);
    return [];
  }
}

export default async function Page({ params }) {
  const { id } = await params;

  const lang = 'pl';

  const dictionary = (await getDictionary(lang, 'portfolio')) ?? {};

  let project;
  try {
    project = await getProjectById(id);
    project = JSON.parse(JSON.stringify(project));
  } catch (err) {
    console.error('Błąd pobierania projektu:', err);
    notFound();
  }

  if (!project) notFound();

  return (
    <PortfolioPageClient 
      project={project} 
      initialDictionary={dictionary} 
      apiUrl={process.env.NEXT_PUBLIC_API_URL} 
    />
  );
}