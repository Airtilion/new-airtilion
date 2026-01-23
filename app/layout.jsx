import { Montserrat } from 'next/font/google';
import '@styles/globals.css';
import '@styles/animations.css';
import '@styles/slider.css';
import Navbar from '@components/Navbar';
import { ThemeProvider } from '@context/ThemeContext';
import { Suspense } from 'react';
import CookiesTemplate from '@components/CookiesTemplate';
import Script from 'next/script';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: "Tworzenie stron internetowych | Airtilion",
  description: "Tworzenie stron internetowych, sklepów online, projektów graficznych i aplikacji mobilnych. Skontaktuj się z nami, aby poznać naszą ofertę i rozwiązania dla Ciebie!",
  openGraph: {
    title: "Tworzenie stron internetowych | Airtilion",
    description: "Tworzenie stron internetowych, sklepów online, projektów graficznych i aplikacji mobilnych. Skontaktuj się z nami, aby poznać naszą ofertę i rozwiązania dla Ciebie!",
    type: "website",
    url: "https://airtilion.com",
    siteName: "Tworzenie stron internetowych | Airtilion",
    images: [
      {
        url: "https://airtilion.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Tworzenie stron internetowych | Airtilion"
      }
    ]
  },
  alternates: {
    canonical: 'https://airtilion.com',
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/ico',
      url: '/favicon/favicon.ico'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'icon',
      type: "image/png",
      sizes: "192x192",
      url: "/favicon/android-chrome-192x192.png"
    },
    {
      rel: 'icon',
      type: "image/png",
      sizes: "512x512",
      url: "/favicon/android-chrome-512x512.png"
    },
    {
      rel: 'apple-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png'
    }
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="dark">

      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=G-NGHDG87L2Y`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
          });

          gtag('config', 'G-NGHDG87L2Y');
        `}
        </Script>
        {/* <Script id="meta-piksel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '23875045218747088');
          fbq('track', 'PageView');
        `}
        </Script> */}
        <meta name="robots" content="noodp,noydir"></meta>
        {/* <meta name="facebook-domain-verification" content="5cj55zrwldt94i8ln6uexw6mt9ijgn" /> */}
      </head>

      <body className={`${montserrat.className} antialiased dark:bg-[#000] dark:text-white relative`}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/gtag/js?id=G-NGHDG87L2Y" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
        </noscript>

        <ThemeProvider>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          {children}
        </ThemeProvider>
        <CookiesTemplate />

        {/* <noscript>
          <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=23875045218747088&ev=PageView&noscript=1" />
        </noscript> */}
      </body>
    </html>
  );
}