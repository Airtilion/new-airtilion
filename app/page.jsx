import Header from '@components/Header';
import bg from '@assets/images/main-header-image.webp';
import { getLangFromCookie } from '@utils/get-language-from-cookie';
import { dictionaries } from '@utils/dictionaries';
import StarsCanvas from '@components/StartsBg';

export default function Home() {
  const lang = getLangFromCookie();
  const dict =
    (dictionaries[lang].mainSite?.header) ||
    (dictionaries[lang].mainsite?.header); // niektóre klucze różnią się w JSON

  return (
    <>
      {/* <StarsCanvas /> */}
      <Header bg={bg} title={dict.title} content={dict.content} imageAlt={dict.imageAlt} buttonText={dict.button}/>
      <main>

      </main>
    </>
  );
}
