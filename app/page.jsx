import { getDictionary } from '@utils/getDictionary';
import Header from '@components/Header';
import Footer from '@components/Footer';
import CompaniesSlider from '@components/home/CompaniesSlider';
import Introduction from '@components/home/Introduction';
import Portoflio from '@components/home/Portfolio/Portoflio';
import Information from '@components/home/Information';
import CallToAction from '@components/home/CallToAction';
import Offer from '@components/home/Offer';
import Opinions from '@components/home/Opinions/Opinions';
import Owners from '@components/home/People/Owners';
import Contact from '@components/home/Contact/Contact';
import Faq from '@components/home/Faq/Faq';
import mainBg from '@assets/images/main-header-image.webp';

export default async function Home({ searchParams }) {

  const params = searchParams instanceof Promise ? await searchParams : searchParams;
  const lang = params?.lang || 'pl';
  const file = await getDictionary(lang, 'main');
  const dictionary = file.mainSite || {};
  const dictionaryFooter = file.footer || {};

  return (
    <>
        <Header title={dictionary.header?.title || 'Default Title'} content={dictionary.header?.content || 'Default Content'} bg={mainBg} buttonText={dictionary.header?.button || 'Default Button'}/>
        <main className="flex flex-col gap-[192px] overflow-hidden">
          <CompaniesSlider />
          <Introduction dict={dictionary.introduction || {}} />
          <Portoflio dict={dictionary.portfolio || {}} lang={lang} />
          <Information dict={dictionary.information || {}} />
          <CallToAction lang={lang} dict={dictionary.cta || {}} />
          <Offer dict={dictionary.offer || {}} />
          <Opinions dict={dictionary.opinions || {}} />
          <Owners dict={dictionary.people || {}} />
          <Contact dict={dictionary.contact || {}} />
          <Faq dict={dictionary.faq || {}} />
        </main>
        <Footer dict={dictionaryFooter} />
    </>
  );
}