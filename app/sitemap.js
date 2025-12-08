import { citiesList } from "@data/citiesList";

const BLOG_URL = process.env.BLOG_URL;
export const revalidate = 60;

export default async function sitemap() {
  const staticPages = [
    { url: 'https://airtilion.com', lastModified: new Date(), changeFrequency: 'yearly', priority: 1, },
    { url: 'https://airtilion.com/oferta-strony-internetowe', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9, },
    { url: 'https://airtilion.com/oferta-sklepy-internetowe', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9, },
    { url: 'https://airtilion.com/oferta-aplikacje-mobilne', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9, },
    { url: 'https://airtilion.com/oferta-dodatkowe-uslugi', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9, },
    { url: 'https://airtilion.com/portfolio', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6, },
    { url: 'https://airtilion.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6}
  ];

  const areaPages = citiesList.map(city => ({
    url: `https://airtilion.com/strony-internetowe-${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7
  }))

  const res = await fetch(`${BLOG_URL}/wp-json/wp/v2/posts?per_page=100`);
  if (!res.ok) {
    console.error('Błąd pobierania postów:', res.status);
    return staticPages;
  }

  const posts = await res.json();

  const blogPages = posts.map(post => ({
    url: `https://airtilion.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [...staticPages, ...areaPages, ...blogPages]
}