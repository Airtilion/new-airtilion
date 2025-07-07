import { Montserrat } from 'next/font/google';
import '@styles/globals.css';
import '@styles/animations.css';
import Navbar from '@components/Navbar';
import { ThemeProvider } from '@context/ThemeContext';
import { LanguageProvider } from '@context/LanguageContext';
import { getLangFromCookie } from '@utils/get-language-from-cookie';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const initialLang = getLangFromCookie();

  return (
    <html className="dark">
      <body className={`${montserrat.className} antialiased dark:bg-[#000] dark:text-white`}>
        <ThemeProvider>
          <LanguageProvider initialLang={initialLang}>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
