import Footer from '@components/Footer';
import Image from 'next/image';
import { getDictionary } from '@utils/getDictionary';
import earth from '@assets/images/earth.webp'
import Link from 'next/link';

export default async function NotFound({ searchParams }) {
  // Sprawdź, czy searchParams jest Promise, i awaituj, jeśli tak
  const params = searchParams instanceof Promise ? await searchParams : searchParams;
  const lang = params?.lang || 'pl'; // Bezpieczne uzyskanie lang z domyślną wartością 'pl'
  const file = await getDictionary(lang, 'notFound');
  const dictionary = file || {}; // Domyślny pusty obiekt


  return (
    <>
      <main id="not-found-section" className='pt-[120px] flex justify-center relative overflow-hidden h-dvh'>
        <div className='flex flex-col items-center w-[790px] px-16 relative z-0 justify-center'>
          <h1 className='text-[40px] !font-extralight text-center max-w-[500px] max-lg:text-[30px] max-lg:max-w-[350px] max-sm:text-[25px] max-sm:max-w-[300px] translate-y-animation'>{dictionary.title}</h1>
          <p className='text-[300px] !font-bold text-center max-lg:text-[220px] max-lg:mb-12 max-sm:text-[150px] translate-y-animation' style={{animationDelay: '150ms'}}>404</p>

          <div className='absolute z-[-1] top-[-186px] inset-0 bg-linear-to-l from-[#0000004D] via-[#E283504D] to-[#0000004D]'></div>
        </div>

        <div className='absolute z-20 w-[790px] h-full mt-[-120px] left-[50%] translate-x-[-50%] flex justify-center items-end'>
          <Link href="/" className='mb-[25%] translate-y-animation' style={{animationDelay: '300ms'}}>
            <button className='px-12 py-3 border-[1px] border-[#939393] text-[#939393] rounded-full hover:bg-[#939393] hover:text-white duration-500'>{dictionary.button}</button>
          </Link>
        </div>

        <div className='absolute left-[50%] translate-x-[-50%] top-[60%] w-[3471px] h-[3471px] rounded-full radial-gradient-404 z-10'></div>
        <div className='absolute left-[50%] translate-x-[-50%] top-[60%] w-[3471px] h-[3471px] rounded-full z-[9]'>
          <Image src={earth} width={3400} height={3400} alt={dictionary.alt} className='w-full h-full animate-spin' style={{ animationDuration: '150s' }} />
        </div>

        <div className='absolute inset-0 bg-linear-to-b from-[#00000000] from-50% to-[#000000] z-[11]'></div>
      </main>
      <Footer dict={dictionary.footer} />
    </>
  );
}