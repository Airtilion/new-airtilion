export const revalidate = 86400;

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
import mainBgMd from '@assets/images/main-header-image-md.webp';
import SlideUpContact from '@components/SlideUpContact';
import { getOpinions } from '@lib/opinions';
import { getLatestProjects } from '@lib/mainProjects';

export default async function Home({ searchParams }) {

  const params = searchParams instanceof Promise ? await searchParams : searchParams;
  const lang = params?.lang || 'pl';
  const file = await getDictionary(lang, 'main');
  const dictionary = file.mainSite || {};
  const dictionaryFooter = file.footer || {};

  const opinionsData = await getOpinions();
  const projectsData = await getLatestProjects({ limit: 3, lang });

  return (
    <>
        <Header title={dictionary.header?.title || 'Default Title'} content={dictionary.header?.content || 'Default Content'} bg={mainBg} bgMd={mainBgMd} buttonText={dictionary.header?.button || 'Default Button'}/>
        <main className="flex flex-col gap-[192px] overflow-hidden max-lg:gap-[128px]">
          <CompaniesSlider />
          <Introduction dict={dictionary.introduction || {}} />
          <Portoflio dict={dictionary.portfolio || {}} lang={lang} data={projectsData}/>
          <Information dict={dictionary.information || {}} />
          <CallToAction lang={lang} dict={dictionary.cta || {}} />
          <Offer dict={dictionary.offer || {}} />
          <Opinions dict={dictionary.opinions || {}} lang={lang} data={opinionsData}/>
          <Owners dict={dictionary.people || {}} />
          <Contact dict={dictionary.contact || {}} />
          <Faq dict={dictionary.faq || {}} />
          <SlideUpContact dict={dictionary.cta.form} lang={lang}/>
        </main>
        <Footer dict={dictionaryFooter} />
    </>
  );
}