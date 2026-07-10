/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.airtilion.com',
      }
    ],
    domains: ['images.unsplash.com', 'blog.airtilion.com'],
  },
  async redirects() {
    return [
      {
        source: '/offer/apps',
        destination: '/oferta-aplikacje-mobilne',
        permanent: true,
      },
      {
        source: '/oferta/aplikacje-mobilne',
        destination: '/oferta-aplikacje-mobilne',
        permanent: true,
      },
      {
        source: '/offer/services',
        destination: '/oferta-uslugi-dodatkowe',
        permanent: true,
      },
      {
        source: '/oferta/uslugi',
        destination: 'oferta-uslugi-dodatkowe',
        permanent: true,
      },
      {
        source: '/offer/shops',
        destination: 'oferta-sklepy-internetowe',
        permanent: true,
      },
      {
        source: '/oferta/sklepy-internetowe',
        destination: 'oferta-sklepy-internetowe',
        permanent: true,
      },
      {
        source: '/offer/websites',
        destination: '/oferta-strony-internetowe',
        permanent: true,
      },
      {
        source: '/oferta/strony-internetowe',
        destination: 'oferta-strony-internetowe',
        permanent: true,
      },
      {
        source: '/area',
        destination: '/',
        permanent: true,
      },
      {
        source: '/area/:city',
        destination: '/strony-internetowe-:city',
        permanent: true,
      },
    ]
  }
};
export default nextConfig;