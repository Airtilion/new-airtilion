import { Montserrat } from 'next/font/google';
import '@styles/globals.css';
import '@styles/animations.css';
import Navbar from '@components/Navbar';
import { ThemeProvider } from '@context/ThemeContext';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="dark">
      <body className={`${montserrat.className} antialiased dark:bg-[#000] dark:text-white`}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}