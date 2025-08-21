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
    domains: ['images.unsplash.com', 'lh3.googleusercontent.com'],
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
  },
  async rewrites() {
    return [
      {
        source: '/polityka-prywatnosci',
        destination: '/assets/files/polityka_prywatnosci_Airtilion.pdf',
      },
      {
        source: '/regulamin-swiadczenia-uslug-droga-elektroniczna',
        destination: '/assets/files/regulamin-swiadczenia-uslug-droga-elektroniczna.pdf',
      },
      {
        source: '/zgoda-informacja-handlowa',
        destination: '/assets/files/zgoda-informacja-handlowa.pdf',
      },

      {
        source: '/privacy-policy',
        destination: '/assets/files/privacy-policy.pdf',
      },
      {
        source: '/terms-and-conditions-for-the-provision-of-electronic-services',
        destination: '/assets/files/terms-and-conditions-for-the-provision-of-electronic-services.pdf',
      },
      {
        source: '/consent-to-receive-commercial-information',
        destination: '/assets/files/consent-to-receive-commercial-information.pdf',
      },
    ]
  }
};
export default nextConfig;