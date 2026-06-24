export const routes = {
  knowledgeBase: {
    index: '/wiedza',
    article: (slug) => `/wiedza/${slug}`,
    articleEn: (slug) => `/wiedza/${slug}?lang=en`,
  },
  blog: {
    index: '/blog',
    post: (slug) => `/blog/${slug}`,
  },
  city: (miasto) => `/strony-internetowe/${miasto}`,
  industry: (branza) => `/strony-internetowe/dla-${branza}`,
}