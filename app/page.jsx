import Header from '@components/Header';
import bg from '@assets/images/main-header-image.webp';
import { getLangFromCookie } from '@utils/get-language-from-cookie';
import { dictionaries } from '@utils/dictionaries';
import CompaniesSlider from '@components/home/CompaniesSlider';
import Introduction from '@components/home/Introduction';
import Portoflio from '@components/home/Portfolio/Portoflio';
import Information from '@components/home/Information';
// import StarsCanvas from '@components/StartsBg';

export default function Home() {
  const lang = getLangFromCookie();
  const dict = (dictionaries[lang].mainSite) || (dictionaries[lang].mainsite); // niektóre klucze różnią się w JSON

  const headerDict = dict.header;
  const introductionDict = dict.introduction;
  const portfolioDict = dict.portfolio;

  return (
    <>
      {/* <StarsCanvas /> */}
      <Header bg={bg} title={headerDict.title} content={headerDict.content} imageAlt={headerDict.imageAlt} buttonText={headerDict.button}/>
      <main className='flex flex-col gap-[192px]'>
        <CompaniesSlider/>
        <Introduction dict={introductionDict}/>
        <Portoflio dict={portfolioDict}/>
        <Information/>
      </main>
    </>
  );
}
