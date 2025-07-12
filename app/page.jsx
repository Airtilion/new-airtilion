import Header from '@components/Header';
import bg from '@assets/images/main-header-image.webp';
import { getLangFromCookie } from '@utils/get-language-from-cookie';
import { dictionaries } from '@utils/dictionaries';
import CompaniesSlider from '@components/home/CompaniesSlider';
import Introduction from '@components/home/Introduction';
import Portoflio from '@components/home/Portfolio/Portoflio';
import Information from '@components/home/Information';
import CallToAction from '@components/home/CallToAction';
import CustomCooperate from '@components/CustomCooperate';
import Offer from '@components/home/Offer';
import Opinions from '@components/home/Opinions/Opinions';
import Owners from '@components/home/People/Owners';
import Contact from '@components/home/Contact/Contact';
import Faq from '@components/home/Faq/Faq';
// import StarsCanvas from '@components/StartsBg';

export default function Home() {
  const lang = getLangFromCookie();
  const dict = (dictionaries[lang].mainSite) || (dictionaries[lang].mainsite); // niektóre klucze różnią się w JSON

  const headerDict = dict.header;
  const introductionDict = dict.introduction;
  const portfolioDict = dict.portfolio;
  const informationDict = dict.information;
  const ctaDict = dict.cta
  const offerDict = dict.offer
  const opinionsDict = dict.opinions
  const ownersDict = dict.people
  const contactDict = dict.contact
  const faqDict = dict.faq

  return (
    <>
      {/* <StarsCanvas /> */}
      <Header bg={bg} title={headerDict.title} content={headerDict.content} imageAlt={headerDict.imageAlt} buttonText={headerDict.button}/>
      <main className='flex flex-col gap-[192px] overflow-hidden'>
        <CompaniesSlider/>
        <Introduction dict={introductionDict}/>
        <Portoflio dict={portfolioDict}/>
        <Information dict={informationDict}/>
        <CallToAction dict={ctaDict}/>
        <Offer dict={offerDict}/>
        <Opinions dict={opinionsDict}/>
        <Owners dict={ownersDict}/>
        <Contact dict={contactDict}/>
        <Faq dict={faqDict}/>
        <div>xD</div>
      </main>
    </>
  );
}
