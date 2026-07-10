import React from 'react'
import Link from 'next/link'
import { getDictionary } from '@utils/getDictionary'
import Footer from '@components/layout/Footer'
import Breadcrumbs from '@components/layout/Breadcrumbs'

export const metadata = {
    title: "Polityka prywatności | Airtilion",
    alternates: {
        canonical: 'https://airtilion.com/polityka-prywatnosci',
    },
}

const page = async (searchParams) => {
    const params = searchParams instanceof Promise ? await searchParams : searchParams;
    const lang = params?.lang || 'pl';

    const footerFile = await getDictionary(lang, 'layout/footer');

    const dictionaryFooter = footerFile || {};
    return (
        <>
            <main className='relative section-style-small text-(--primary-text-color) max-lg:text-[15px] max-sm:text-[14px]'>
                <div className='mt-48'>
                    <Breadcrumbs lang={lang} />
                </div>

                {lang === 'pl' ? (
                    <article aria-labelledby='privacy-heading' className='mt-8 space-y-16'>
                        <section className='space-y-4'>
                            <h1 id='privacy-heading' className='uppercase text-[30px] text-center font-bold max-sm:text-[25px]'>Polityka prywatności</h1>
                            <p>Niniejsza Polityka stanowi podstawową informację o celach, sposobach przetwarzania oraz bezpieczeństwie Twoich danych osobowych, jako użytkownika strony: airtilion.com (zwanej dalej Stroną). Zapoznając się z Polityką prywatności dowiesz się kto jest administratorem Twoich danych osobowych, jakie dane osobowe są przez Stronę zbierane, w jakich celach są wykorzystywane oraz jak są chronione.</p>
                        </section>

                        <section aria-labelledby='basic-privacy' className='space-y-4'>
                            <h2 id='basic-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§1. Informacje podstawowe.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Administratorem Twoich danych osobowych jest: Airtilion Sp. z o.o. z siedzibą w Tarnowie, ul. Słoneczna 32/9, 33-100, NIP: 8733299720, REGON: 540390460. </li>
                                <li>Kontakt z Administratorem Danych Osobowych jest możliwy za pośrednictwem:
                                    <ul className='list-disc list-inside pl-8 mt-4 space-y-2'>
                                        <li>poczty e-mail: <a href='mailto:kontakt@airtilion.com' className='text-[#E28350] hover:underline'>kontakt@airtilion.com</a>,</li>
                                        <li><Link href='/#kontakt' className='text-[#E28350] hover:underline'>formularz kontaktowy</Link>,</li>
                                        <li>telefonicznie: <a href='tel:+48720177174' className='text-[#E28350] hover:underline'>+48 720 177 174</a> lub <a href='tel:+48511019652' className='text-[#E28350] hover:underline'>+48 511 019 652</a>.</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>

                        <section aria-labelledby='rules-privacy' className='space-y-4'>
                            <h2 id='rules-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§2. Zasady przetwarzania danych.</h2>
                            <ol className='list-decimal list-inside space-y-4'>
                                <li>Administrator przetwarza dane osobowe z poszanowaniem następujących zasad:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>w oparciu o podstawę prawną i zgodnie z prawem (legalizm);</li>
                                        <li>rzetelnie i uczciwie (rzetelność); </li>
                                        <li>w sposób przejrzysty dla osoby, której dane dotyczą (transparentność);</li>
                                        <li>w konkretnych celach i nie „na zapas” (minimalizacja);</li>
                                        <li>nie więcej niż potrzeba (adekwatność);</li>
                                        <li>z dbałością o prawidłowość danych (prawidłowość);</li>
                                        <li>nie dłużej niż potrzeba (czasowość);</li>
                                        <li>zapewniając odpowiednie bezpieczeństwo danych (bezpieczeństwo).</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>

                        <section aria-labelledby='goals-privacy' className='space-y-4'>
                            <h2 id='goals-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§3. Cele, podstawy prawne i zakres przetwarzania danych.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Twoje dane będziemy przetwarzać:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>w celach kontaktowych, aby udzielić Ci odpowiedzi na Twoją wiadomość przesłaną nam bezpośrednio drogą e-mailową, za pośrednictwem formularza, za pośrednictwem kanału Social Media lub w odpowiedzi na kontakt telefoniczny na podstawie realizacji prawnie uzasadnionego interesu Administratora związanego z koniecznością udzielenia Ci odpowiedzi;</li>
                                        <li>w celach marketingowych, wyłącznie na podstawie udzielonej przez Ciebie zgody;</li>
                                        <li>w celach informacyjnych, aby przekazywać Ci ważne informacje dotyczące usług, z których korzystasz za pośrednictwem naszej Strony;</li>
                                        <li>w celach związanych z prowadzeniem przez nas profilu firmowego w mediach społecznościowych (w szczególności Facebook / Instagram itp.) na zasadach określonych przez właścicieli danego medium (portalu) i informowania w nim, o naszych produktach, promocjach i innych wiadomościach dotyczących naszej działalności, co uważamy za nasz prawnie uzasadniony interes;</li>
                                        <li>w celach technicznych przy użyciu plików cookies (ciasteczka techniczne), na podstawie realizacji prawnie uzasadnionego interesu Administratora, związanego z prawidłowym działaniem i funkcjonowaniem Strony;</li>
                                        <li>w celach statystycznych i analitycznych, jeśli wyraziłeś zgodę na wykorzystanie przez nas plików cookies do celów analitycznych (ciasteczka analityczne);</li>
                                        <li>w celach marketingowych, jeśli wyraziłeś zgodę na wykorzystanie przez nas plików cookies do celów marketingowych (ciasteczka marketingowe);</li>
                                        <li>w celach archiwizacji numerów telefonów, wiadomości, e-maili, na podstawie realizacji prawnie uzasadnionego interesu Administratora, związanego z ochroną przed roszczeniami</li>
                                        <li>w celu analizy informacji anonimowych. To informacje gromadzone za pośrednictwem naszej Strony, takie jak: informacje o przeglądarce, systemie operacyjnym, urządzeniu, czasie spędzonym na stronie, przejściach między stronami, kliknięciach w linki, przybliżona lokalizacja, przedział wieku, płeć. Informacje te są zanonimizowane, są zbierane za pośrednictwem systemów reklamowych i analitycznych naszych partnerów. Nie pozwalają na identyfikację i przypisanie ich do konkretnego użytkownika. Informacje te służą nam do działań marketingowych, analitycznych i statystycznych.</li>
                                    </ul>
                                </li>
                                <li>Przetwarzamy Twoje dane w zakresie:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>jeśli prześlesz nam wiadomość drogą mailową, za pośrednictwem formularza, kanału Social Media lub przekażesz informacje drogą telefoniczną, to będziemy przetwarzać dane, które będą w tej wiadomości zawarte. Przekazanie nam danych w ten sposób następuje dobrowolnie. W każdym czasie możesz zwrócić się do nas z prośbą, o usunięcie tych danych;</li>
                                        <li>jeśli polubisz post, zostawisz komentarz, napiszesz, zareagujesz lub w inny sposób dołączysz do naszego profilu w mediach społecznościowych (np. Facebook, Instagram) będziemy przetwarzać Twoje dane, które podałeś w danym medium i do których będziemy mieli dostęp. W celu zakończenia przetwarzania, możesz zakończyć subskrypcję naszego profilu;</li>
                                        <li>pozostałe dane, które przetwarzamy to adres IP i inne dane zapisywane w plikach cookies. To Ty decydujesz, w jakim zakresie będziemy mogli wykorzystać pliki cookies z Twoimi danymi. Przekazanie nam danych w ten sposób następuje dobrowolnie. W każdym czasie możesz zmienić swoje preferencje. Możesz to zrobić w swojej przeglądarce internetowej lub też po usunięciu zapisanych plików cookies pochodzących z naszej Strony;</li>
                                        <li>korzystania z API (interfejsów programistycznych aplikacji) dostarczanych przez zewnętrznych partnerów w celu zintegrowania różnych funkcjonalności, takich jak mapy, usługi analityczne, reklamowe czy media społecznościowe. Korzystanie z tych API może prowadzić do tworzenia dodatkowych ciasteczek lub korzystania z istniejących ciasteczek w celu przetwarzania danych użytkowników. Zewnętrzni partnerzy mogą przechowywać i przetwarzać te dane zgodnie z własnymi politykami prywatności.</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>

                        <section aria-labelledby='profiling-privacy' className='space-y-4'>
                            <h2 id='profiling-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§4. Na Stronie nie dokonujemy automatycznego profilowania.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Na Stronie nie korzystamy z automatycznego profilowania, w celu tworzenia kampanii marketingowych w oparciu o mierzenie aktywności użytkownika, dzięki któremu bylibyśmy w stanie skierować wybrany przez nas materiał reklamowy do precyzyjnie wskazanego użytkownika.</li>
                                <li>Choć korzystamy z systemów reklamowych naszych partnerów (Facebook, Google) to informacje i dane, które pozyskują na temat Twojej aktywności na Stronie, na podstawie których możemy tworzyć kampanie marketingowe, nie są profilowaniem automatycznym, ponieważ na ich podstawie nie jesteśmy w stanie podjąć decyzji w stosunku do Ciebie, jako do konkretnego użytkownika (np. pokazanie Ci konkretnej reklamy). Reklamy możemy tworzyć wyłącznie dla grup użytkowników, w oparciu o ogólne dane statystyczne dostarczone przez partnerów. Nie jesteśmy w stanie sprawić, by na podstawie danych dotyczących aktywności, konkretny użytkownik zobaczył wybraną przez nas reklamę.</li>
                                <li>Więcej informacji o tym jak nasi partnerzy dokonują profilowania użytkowników i tworzą grupy odbiorców znajdziesz w ich politykach prywatności w paragrafie niżej.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='data-recipients-privacy' className='space-y-4'>
                            <h2 id='data-recipients-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§5. Odbiorcy danych oraz zamiar przekazywania danych do Państwa spoza EOG lub organizacji międzynarodowej.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>W zależności od celu w jakim przetwarzamy Twoje dane, odbiorcami Twoich danych osobowych mogą być:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>urzędy państwowe i inne instytucje publiczne, w zakresie, w jakim obowiązki przekazywania danych wynikają z przepisów prawa obowiązującego na terytorium Rzeczypospolitej Polskiej, w celach związanych z realizacją obowiązków prawnych ciążących na administratorze, takich jak dochodzenie roszczeń prawnych, realizacja zobowiązań podatkowych oraz inne postępowania regulowane przez odpowiednie przepisy prawa;</li>
                                        <li>dostawca oprogramowania Strony (hosting, serwer, domena);</li>
                                        <li>podmiot zajmujący się obsługą programistyczną Strony;</li>
                                        <li>podmiot zajmujący się obsługą marketingową Strony oraz obsługą kanałów Social Media;</li>
                                        <li>dostawca oprogramowania do przechowywania danych i dokumentów w chmurze;</li>
                                        <li>dostawca oprogramowania do zarządzania ciasteczkami i zakresem przetwarzanych danych;</li>
                                        <li>jeśli wyraziłeś zgodę na ciasteczka marketingowe, Twoje dane zapisane w plikach cookies, będą przekazane do naszych partnerów reklamowych (Facebook, Google);</li>
                                        <li>jeśli wyraziłeś zgodę na ciasteczka analityczne, Twoje dane zapisane w plikach cookies, będą przetwarzane przez podmiot dostarczający oprogramowanie do analizy ruchu na naszej Stronie (np. Google Analytics).</li>
                                    </ul>
                                </li>
                                <li>Twoje dane nie są przekazywane do Państw spoza EOG lub organizacji międzynarodowych, za wyjątkiem przypadków przetwarzania danych przez podmioty:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>Google Inc. z siedzibą w USA w zakresie analityki ruchu na stronie w systemie Google Analytics oraz dostarczania dodatkowych funkcji (takich jak Google Maps, Google 5 Search Console) związanych z prawidłowym funkcjonowaniem Strony oraz wyświetlaniem wyników wyszukiwania. <a href='https://policies.google.com/privacy?hl=pl' rel='nofollow' className='text-[#E28350] hover:underline'>Zobacz jak Google przetwarza i chroni Twoje dane.</a> Ten dodatek do przeglądarki umożliwi Ci zarządzanie zakresem i poziomem dostępu do danych zbieranych przez Google Analytics;</li>
                                        <li>Google Inc. z siedzibą w USA w zakresie reklam i mierzenia ich skuteczności w systemie Google Ads. <a href='https://policies.google.com/privacy?hl=pl' rel='nofollow' className='text-[#E28350] hover:underline'>Zobacz jak Google przetwarza i chroni Twoje dane;</a></li>
                                        <li>Meta Platforms Inc. z siedzibą w USA w zakresie obsługi konta i dostępu do danych w serwisach społecznościowych (Facebook, Instagram), reklam i mierzenia ich skuteczności związanych z instalacją na stronie piksela Facebooka oraz API Konwersji. <a href='https://transparency.meta.com' rel='nofollow' className='text-[#E28350] hover:underline'>Zobacz jak Facebook przetwarza i chroni Twoje dane;</a></li>
                                        <li>Google Inc. z siedzibą w USA w zakresie oprogramowania dysku wirtualnego służącego do przechowywania dokumentacji firmowej (dokumentacja obsługi procesu obsługi klienta i kontrahenta oraz dokumentacja RODO). <a href='https://support.google.com/drive/answer/10375054?hl=pl' rel='nofollow' className='text-[#E28350] hover:underline'>Zobacz jak Google chroni Twoje dane;</a></li>
                                        <li>Google Inc. z siedzibą w USA w zakresie obsługi osadzonych na stronie filmów z przeglądarki YouTube. Google zbiera dane dotyczące Twoich preferencji, aktywności związanych z oglądaniem filmów, co może mieć wpływ na wyświetlane reklamy oraz kształt Twoich playlist. <a href='https://www.youtube.com/intl/ALL_pl/howyoutubeworks/privacy' rel='nofollow' className='text-[#E28350] hover:underline'>Zobacz jak YouTube dba o prywatność Twoich danych.</a></li>
                                    </ul>
                                </li>
                            </ol>
                        </section>

                        <section aria-labelledby='deadline-privacy' className='space-y-4'>
                            <h2 id='deadline-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§6. Termin przechowywania danych.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Nie jesteśmy w stanie określić jednego okresu przez który będziemy przetwarzać Twoje dane.</li>
                                <li>Jeśli przekazałeś nam swoje dane w wiadomości przesłanej drogą mailową, telefonicznie, za pośrednictwem formularza lub za pośrednictwem mediów społecznościowych, na których mamy swoje firmowe profile, to Twoje dane będziemy przetwarzać do momentu złożenia przez Ciebie żądania usunięcia tych danych lub sprzeciwu wobec przetwarzania, ale również w przypadku, w którym uznamy, że zrealizowaliśmy prawnie uzasadniony interes Administratora.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='laws-privacy' className='space-y-4'>
                            <h2 id='laws-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§7. Prawa użytkowników.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>W związku z przetwarzaniem Twoich danych przysługują Ci następujące prawa:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>dostępu do treści swoich danych oraz prawo ich sprostowania, usunięcia, ograniczenia przetwarzania;</li>
                                        <li>prawo do przenoszenia danych;</li>
                                        <li>prawo wniesienia sprzeciwu;</li>
                                        <li>prawo do cofnięcia zgody na ich przetwarzanie w dowolnym momencie i w dowolnej formie, chyba że przetwarzanie danych odbywa się w celu wykonywania umowy przez Administratora, w celu wywiązania się przez Administratora z obowiązków prawnych względem instytucji państwowych lub w celu realizacji prawnie uzasadnionych interesów Administratora.</li>
                                    </ul>
                                </li>
                                <li>Masz także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (na adres Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa)</li>
                                <li>Więcej informacji w przedmiocie ochrony danych osobowych, znajdziesz na stronie internetowej <a href='https://www.uodo.gov.pl/' rel='nofollow' className='text-[#E28350] hover:underline'>Urzędu Ochrony Danych Osobowych</a>.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='cookies-info-privacy' className='space-y-4'>
                            <h2 id='cookies-info-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§8. Informacja o ciasteczkach.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Na naszej stronie wykorzystujemy ciasteczka (pliki cookies).</li>
                                <li>Na Stronie istnieje możliwość braku wyrażenia zgody na wykorzystywanie plików cookie, wyświetlana po wejściu na stronę.</li>
                                <li>Ciasteczka (pliki cookies) są niewielkimi plikami tekstowymi przechowywanymi na urządzeniach użytkowników podczas przeglądania Strony internetowej. Są one wykorzystywane w celu ułatwienia korzystania z naszej Strony, poprawienia jakości usług oraz umożliwienia analizy ruchu i zachowań użytkowników.</li>
                                <li>Ciasteczka mogą być stałe (trwałe) lub tymczasowe (sesyjne). Stałe ciasteczka są przechowywane na urządzeniu użytkownika przez określony czas lub do momentu ich usunięcia przez użytkownika. Tymczasowe ciasteczka są usuwane po zamknięciu przeglądarki. </li>
                                <li>Wykorzystujemy ciasteczka własne oraz ciasteczka stron trzecich. Ciasteczka własne są wykorzystywane w celu zapewnienia prawidłowego działania Strony, personalizacji treści, zapisywania preferencji użytkowników oraz analizy statystyk. Ciasteczka stron trzecich są wykorzystywane przez zewnętrzne narzędzia analityczne, reklamowe oraz do integracji z mediami społecznościowymi.</li>
                                <li>Użytkownicy mają prawo kontrolować i ograniczać sposób, w jaki ciasteczka są wykorzystywane na naszej stronie. Większość przeglądarek internetowych umożliwia zarządzanie plikami cookies, w tym blokowanie, ograniczanie lub usuwanie ciasteczek. Szczegółowe informacje na temat zarządzania ciasteczkami można znaleźć w ustawieniach przeglądarki użytkownika.</li>
                                <li>Należy pamiętać, że wyłączenie lub ograniczenie ciasteczek może wpłynąć na funkcjonalność Strony oraz jakość świadczonych usług.</li>
                                <li>Na naszej stronie wykorzystujemy różne rodzaje ciasteczek, aby lepiej dostosować się do potrzeb użytkowników i zapewnić optymalne korzystanie ze Strony.</li>
                                <li>Ciasteczka techniczne: Są niezbędne do prawidłowego funkcjonowania Strony. Umożliwiają utrzymanie sesji użytkownika, obsługę formularzy, zapamiętywanie preferencji oraz zapewnienie bezpieczeństwa Strony.</li>
                                <li>Ciasteczka marketingowe: Pozwalają na personalizację reklam oraz prowadzenie działań remarketingowych, które są dostosowane do zainteresowań i preferencji użytkowników. Służą również do mierzenia skuteczności kampanii reklamowych oraz optymalizacji treści reklamowych.</li>
                                <li>Ciasteczka analityczne: Są wykorzystywane do zbierania informacji o sposobie korzystania z Strony przez użytkowników, takich jak liczba odwiedzin, Strony odwiedzane, czas spędzony na stronie czy źródło ruchu. Uzyskane dane pomagają w analizie i optymalizacji Strony, poprawiając jej funkcjonowanie i dostosowując treści do potrzeb użytkowników.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='why-use-privacy' className='space-y-4'>
                            <h2 id='why-use-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§9. Dlaczego korzystamy z ciasteczek?</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Komfort korzystania ze Strony: ciasteczka (pliki cookies) mogą znacząco wpłynąć na komfort korzystania ze Strony internetowej</li>
                                <li>Personalizacja treści: ciasteczka pozwalają na dostosowanie wyświetlanych treści do preferencji i zainteresowań użytkownika, co sprawia, że strona staje się bardziej atrakcyjna i użyteczna.</li>
                                <li>Zapamiętywanie ustawień: Dzięki ciasteczkom strona może zapamiętać wybrane przez użytkownika ustawienia, takie jak język, układ czy kolorystyka, co pozwala na szybsze i wygodniejsze korzystanie z serwisu.</li>
                                <li>Utrzymanie sesji: dzięki ciasteczkom strona może śledzić aktywność użytkownika na różnych podstronach, co pozwala na łatwe wracanie do ostatnio odwiedzanych sekcji lub kontynuowanie niedokończonych działań, takich jak wypełnianie formularzy.</li>
                                <li>Optymalizacja wydajności: ciasteczka mogą być wykorzystane do analizy ruchu i zachowań użytkowników na stronie, co pomaga w optymalizacji jej wydajności oraz dostarczaniu treści o wysokiej jakości.</li>
                                <li>Reklamy: ciasteczka umożliwiają wyświetlanie spersonalizowanych reklam, które są dopasowane do zainteresowań i potrzeb użytkownika. Dzięki temu, reklamy są mniej inwazyjne i bardziej adekwatne.</li>
                                <li>Integracja z mediami społecznościowymi: ciasteczka pozwalają na integrację z serwisami społecznościowymi, takimi jak Facebook, Twitter czy Instagram, co umożliwia łatwe udostępnianie treści oraz korzystanie z dodatkowych funkcji, takich jak komentowanie czy polubienia.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='technical-function-privacy' className='space-y-4'>
                            <h2 id='technical-function-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§10. Funkcje ciasteczek technicznych.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Zapamiętywanie preferencji użytkownika: dzięki ciasteczkom technicznym strona może przechowywać informacje na temat preferencji użytkowników, takich jak wybrany język, wielkość czcionki, ustawienia kolorystyczne czy inne elementy personalizacji.</li>
                                <li>Obsługa formularzy: ciasteczka techniczne wspomagają funkcjonowanie formularzy na stronie, takich jak formularze logowania, rejestracji czy kontaktowe, zapewniając prawidłowe przetwarzanie danych wprowadzanych przez użytkowników.</li>
                                <li>Optymalizacja wydajności Strony: użycie ciasteczek technicznych umożliwia monitorowanie wydajności Strony oraz szybkość ładowania poszczególnych elementów, co pozwala na optymalizację i poprawę jakości świadczonych usług.</li>
                                <li>Bezpieczeństwo: ciasteczka techniczne pomagają w zapewnieniu bezpieczeństwa Strony i jej użytkowników, na przykład poprzez weryfikację tożsamości użytkowników, wykrywanie prób włamań czy ochronę przed atakami typu CSRF (Cross-Site Request Forgery).</li>
                            </ol>
                        </section>

                        <section aria-labelledby='analytical-function-privacy' className='space-y-4'>
                            <h2 id='analytical-function-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§11. Funkcje ciasteczek analitycznych.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Pomiar ruchu na stronie: ciasteczka analityczne pozwalają na monitorowanie liczby odwiedzin, unikalnych użytkowników i wyświetleń stron, co daje ogólny obraz popularności i wydajności Strony.</li>
                                <li>Analiza zachowań użytkowników: dzięki ciasteczkom analitycznym można zbierać informacje o sposobie, w jaki użytkownicy poruszają się po stronie, na przykład czas spędzony na poszczególnych podstronach, ścieżki nawigacji oraz miejsca, w których opuszczają Stronę</li>
                                <li>Optymalizacja konwersji: ciasteczka analityczne pomagają w identyfikowaniu elementów Strony, które wpływają na skuteczność osiągania celów biznesowych, takich jak rejestracja, złożenie zamówienia czy wypełnienie formularza kontaktowego.</li>
                                <li>Segmentacja użytkowników: użycie ciasteczek analitycznych umożliwia grupowanie użytkowników według różnych kryteriów, co pozwala na lepsze dostosowanie treści i oferty, do potrzeb poszczególnych segmentów.</li>
                                <li>Testowanie A/B: ciasteczka analityczne są wykorzystywane do przeprowadzania testów A/B, które polegają na porównaniu dwóch wersji Strony internetowej, aby sprawdzić, która z nich lepiej spełnia założone cele. Testy te pomagają w optymalizacji wyglądu, funkcjonalności i treści Strony.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='marketing-function-privacy' className='space-y-4'>
                            <h2 id='marketing-function-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§12 Funkcje ciasteczek marketingowych.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Spersonalizowane reklamy: ciasteczka marketingowe umożliwiają wyświetlanie reklam dopasowanych do zainteresowań, preferencji i historii przeglądania użytkownika, co sprawia, że są one bardziej atrakcyjne i efektywne.</li>
                                <li>Remarketing: dzięki ciasteczkom marketingowym można śledzić użytkowników, którzy odwiedzili Stronę, ale nie dokonali zakupu lub innej akcji i ponownie kierować do nich reklamy, aby zachęcić do powrotu na stronę i finalizacji transakcji.</li>
                                <li>Pomiar skuteczności reklam: ciasteczka marketingowe pozwalają na monitorowanie wyników kampanii reklamowych, takich jak liczba kliknięć, konwersji czy wyświetleń, co umożliwia optymalizację strategii marketingowej.</li>
                                <li>Zarządzanie reklamami w wielu kanałach: użycie ciasteczek marketingowych ułatwia koordynację i integrację działań reklamowych prowadzonych w różnych kanałach, takich jak wyszukiwarki, media społecznościowe czy Strony partnerskie.</li>
                                <li>Testowanie i optymalizacja treści reklamowych: ciasteczka marketingowe są wykorzystywane do przeprowadzania testów A/B oraz innych metod analizy, które pozwalają na ocenę, jakie przekazy, formaty czy kreatywności reklamowe są najbardziej skuteczne i angażujące dla użytkowników.</li>
                            </ol>
                        </section>

                    </article>
                ) : (
                    <article aria-labelledby='privacy-heading' className='mt-8 space-y-16'>

                        <section className='space-y-4'>
                            <h1 id='privacy-heading' className='uppercase text-[30px] text-center font-bold max-sm:text-[25px]'>Privacy Policy</h1>
                            <p>This Policy constitutes the basic information on the purposes, methods of processing and security of your personal data as a user of the website: airtilion.com (hereinafter referred to as the “Website”). By reading this Privacy Policy you will learn who is the controller of your personal data, which personal data are collected by the Website, for what purposes they are used and how they are protected.</p>
                        </section>

                        <section aria-labelledby='basic-privacy' className='space-y-4'>
                            <h2 id='basic-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§1. Basic information.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>The controller of your personal data is: Airtilion Sp. z o.o. with its registered office in Tarnów, ul. Słoneczna 32/9, 33-100, TAX ID (NIP): 8733299720, REGON: 540390460.</li>
                                <li>You can contact the Data Controller via:
                                    <ul className='list-disc list-inside pl-8 mt-4 space-y-2'>
                                        <li>e-mail: <a href='mailto:kontakt@airtilion.com' className='text-[#E28350] hover:underline'>kontakt@airtilion.com</a>,</li>
                                        <li><Link href='/#kontakt' className='text-[#E28350] hover:underline'>contact form</Link>,</li>
                                        <li>by phone: <a href='tel:+48720177174' className='text-[#E28350] hover:underline'>+48 720 177 174</a> or <a href='tel:+48511019652' className='text-[#E28350] hover:underline'>+48 511 019 652</a>.</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>

                        <section aria-labelledby='rules-privacy' className='space-y-4'>
                            <h2 id='rules-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§2. Principles of data processing.</h2>
                            <ol className='list-decimal list-inside space-y-4'>
                                <li>The Controller processes personal data in compliance with the following principles:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>based on a legal basis and in accordance with the law (legality);</li>
                                        <li>fairly and honestly (fairness);</li>
                                        <li>in a transparent manner for the data subject (transparency);</li>
                                        <li>for specific purposes and not “in reserve” (data minimization);</li>
                                        <li>not more than necessary (adequacy);</li>
                                        <li>with care for data accuracy (accuracy);</li>
                                        <li>not longer than necessary (storage limitation);</li>
                                        <li>ensuring appropriate data security (security).</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>

                        <section aria-labelledby='goals-privacy' className='space-y-4'>
                            <h2 id='goals-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§3. Purposes, legal bases and scope of processing.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>We will process your data for the following purposes:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>Contact purposes — to reply to your message sent to us by e-mail, via the contact form, via social media channels or in response to a telephone contact, on the basis of the Controller’s legitimate interest connected with the need to reply to you;</li>
                                        <li>Marketing purposes — only on the basis of the consent you have given;</li>
                                        <li>Informational purposes — to send you important information related to the services you use through our Website;</li>
                                        <li>Managing our corporate social media profiles (in particular Facebook / Instagram etc.) — on the terms set by the owners of the given platform and to inform about our products, promotions and other business-related messages, which we consider to be our legitimate interest;</li>
                                        <li>Technical purposes using cookies (technical cookies) — on the basis of the Controller’s legitimate interest related to the proper functioning of the Website;</li>
                                        <li>Statistical and analytical purposes — if you have consented to the use of cookies for analytical purposes (analytical cookies);</li>
                                        <li>Marketing purposes through cookies — if you have consented to the use of cookies for marketing purposes (marketing cookies);</li>
                                        <li>Archiving phone numbers, messages, e-mails — on the basis of the Controller’s legitimate interest related to protection against claims;</li>
                                        <li>Analysis of anonymous information — information collected via our Website such as browser, operating system, device, time spent on the site, page transitions, link clicks, approximate location, age bracket, gender. These data are anonymized, collected via advertising and analytics systems provided by our partners. They do not allow identification of a specific user. These data are used for marketing, analytical and statistical purposes.</li>
                                    </ul>
                                </li>
                                <li>We process your data in the following scope:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>if you send us a message by e-mail, via the contact form, social media channel or provide information by telephone, we will process the data contained in that message. Provision of data in this way is voluntary. You may request deletion of those data at any time;</li>
                                        <li>if you like a post, leave a comment, write, react or otherwise interact with our corporate social media profile (e.g. Facebook, Instagram), we will process the data you provided in that medium and to which we have access. To stop processing, you may unsubscribe from our profile;</li>
                                        <li>other data we process include the IP address and other data stored in cookies. You decide to what extent we may use cookies with your data. Provision of these data is voluntary. You can change your preferences at any time—either in your browser or by deleting cookies saved by our Website;</li>
                                        <li>use of APIs (application programming interfaces) provided by external partners in order to integrate various functionalities (such as maps, analytics, advertising or social media). Use of these APIs may lead to creation of additional cookies or use of existing cookies to process user data. External partners may store and process those data in accordance with their own privacy policies.</li>
                                    </ul>
                                </li>
                            </ol>
                        </section>

                        <section aria-labelledby='profiling-privacy' className='space-y-4'>
                            <h2 id='profiling-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§4. No automated profiling on the Website.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>We do not use automated profiling on the Website for the purpose of creating marketing campaigns based on measuring user activity that would allow us to target selected advertising material to an individually identified user.</li>
                                <li>Although we use advertising systems of our partners (Facebook, Google), the information and data they collect about your activity on the Website, which we may use to create marketing campaigns, do not constitute automated profiling on our part because they do not enable us to make decisions regarding you as an individual user (e.g., to show you a specific ad). We may create ads only for user groups based on aggregated statistical data provided by partners. We are not able to make a specific user see a particular ad based solely on activity data</li>
                                <li>More information about how our partners profile users and create audience groups can be found in their privacy policies listed in the paragraph below.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='data-recipients-privacy' className='space-y-4'>
                            <h2 id='data-recipients-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§5. Recipients of data and the intention to transfer data to countries outside the EEA or to international organisations.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li> Depending on the purpose for which we process your data, the recipients of your personal data may include:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>public authorities and other public institutions, to the extent that the obligation to transfer data results from laws applicable in the territory of the Republic of Poland — e.g., for the purpose of fulfilling legal obligations of the Controller such as pursuing legal claims, fulfilling tax obligations and other proceedings regulated by appropriate laws;</li>
                                        <li>the Website’s software provider (hosting, server, domain);</li>
                                        <li>the entity providing programming maintenance of the Website;</li>
                                        <li>the entity handling the Website’s marketing and social media channels;</li>
                                        <li>provider of cloud storage/document management software;</li>
                                        <li>provider of cookie management and data processing management software;</li>
                                        <li>if you have consented to marketing cookies, your cookie-stored data will be transmitted to our advertising partners (Facebook, Google);</li>
                                        <li>if you have consented to analytical cookies, your cookie-stored data will be processed by the provider of traffic analysis software on our Website (e.g. Google Analytics).</li>
                                    </ul>
                                </li>
                                <li>Your data are not transferred to countries outside the European Economic Area (EEA) or to international organisations, except for cases where processing is performed by the following entities:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>Google Inc. (USA) — for website analytics in Google Analytics and for providing additional functionalities (such as Google Maps, Google Search Console) related to proper functioning of the Website and search results. <a href='https://policies.google.com/privacy?hl=en' rel='nofollow' className='text-[#E28350] hover:underline'>See how Google processes and protects your data.</a> This browser add-on will allow you to manage the scope and level of access to data collected by Google Analytics;</li>
                                        <li>Google Inc. (USA) — for advertising and measuring ad effectiveness in Google Ads. <a href='https://policies.google.com/privacy?hl=en' rel='nofollow' className='text-[#E28350] hover:underline'>See how Google processes and protects your data;</a></li>
                                        <li>Meta Platforms, Inc. (USA) — for managing the account and access to data in social platforms (Facebook, Instagram), advertising and measuring their effectiveness connected with the installation of the Facebook Pixel on the Website and Conversion API. <a href='https://transparency.meta.com' rel='nofollow' className='text-[#E28350] hover:underline'>See how Facebook processes and protects your data;</a></li>
                                        <li>Google Inc. (USA) — for virtual drive software used to store company documentation (customer and contractor handling documentation and GDPR documentation). <a href='https://support.google.com/drive/answer/10375054?hl=en' rel='nofollow' className='text-[#E28350] hover:underline'>See how Google protects your data;</a></li>
                                        <li>Google Inc. (USA) — for hosting embedded videos from YouTube on the Website. Google collects data about your preferences and viewing activity, which may affect displayed ads and your playlists. <a href='https://www.youtube.com/intl/ALL_en/howyoutubeworks/privacy/' rel='nofollow' className='text-[#E28350] hover:underline'>See how YouTube protects privacy.</a></li>
                                    </ul>
                                </li>
                            </ol>
                        </section>

                        <section aria-labelledby='deadline-privacy' className='space-y-4'>
                            <h2 id='deadline-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§6. Storage period.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>We cannot define a single period during which we will process your data.</li>
                                <li>If you have provided your data in a message sent by e-mail, telephone, via the contact form or via social media where we maintain corporate profiles, we will process your data until you request their deletion or object to the processing, but also in cases where we consider that we have achieved the Controller’s legitimate interest.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='laws-privacy' className='space-y-4'>
                            <h2 id='laws-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§7. Data subject rights.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>In relation to the processing of your data you have the following rights:
                                    <ul className="list-disc list-inside pl-8 mt-4 space-y-2">
                                        <li>the right of access to your data and the right to rectification, deletion and restriction of processing;</li>
                                        <li>the right to data portability;</li>
                                        <li>the right to object;</li>
                                        <li>the right to withdraw consent to processing at any time and in any form, unless the processing is carried out for the performance of a contract by the Controller, for the Controller’s compliance with legal obligations toward public authorities, or for the Controller’s legitimate interests.</li>
                                    </ul>
                                </li>
                                <li>You also have the right to lodge a complaint with the President of the Personal Data Protection Office (Urząd Ochrony Danych Osobowych), at the address: ul. Stawki 2, 00-193 Warsaw.</li>
                                <li>More information about data protection can be found on the <a href='https://www.uodo.gov.pl/' rel='nofollow' className='text-[#E28350] hover:underline'>Personal Data Protection Office</a>  website.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='cookies-info-privacy' className='space-y-4'>
                            <h2 id='cookies-info-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§8. Information about cookies.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Our Website uses cookies.</li>
                                <li>When you visit the Website, you may decline consent to the use of cookies — a notice is displayed upon entering the site.</li>
                                <li>Cookies are small text files stored on users’ devices while browsing the Website. They are used to facilitate use of our Website, improve service quality and enable analysis of traffic and user behaviour.</li>
                                <li>Cookies may be persistent or temporary (session). Persistent cookies are stored on the user’s device for a defined period or until they are deleted by the user. Session cookies are removed after the browser is closed.</li>
                                <li>We use both first-party cookies and third-party cookies. First-party cookies are used to ensure correct operation of the Website, personalize content, save user preferences and analyse statistics. Third-party cookies are used by external analytics, advertising tools and for integration with social media.</li>
                                <li>Users have the right to control and limit how cookies are used on our site. Most web browsers allow management of cookies, including blocking, limiting or deleting cookies. Detailed information on managing cookies can be found in your browser settings.</li>
                                <li>Please note that disabling or limiting cookies may affect the functionality of the Website and the quality of services.</li>
                                <li>We use different kinds of cookies to better adapt to users’ needs and to ensure optimal use of the Website.</li>
                                <li>Technical cookies: These are necessary for the proper functioning of the Website. They enable maintaining user sessions, handling forms, remembering preferences, and ensuring the security of the Website.</li>
                                <li>Marketing cookies: They allow for the personalization of advertisements and remarketing activities tailored to the interests and preferences of users. They are also used to measure the effectiveness of advertising campaigns and optimize advertising content.</li>
                                <li>Analytical cookies: These cookies are used to collect information about how users use the Website, such as the number of visits, pages visited, time spent on the website, and traffic sources. The data obtained helps in the analysis and optimization of the Website, improving its performance and tailoring content to user needs.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='why-use-privacy' className='space-y-4'>
                            <h2 id='why-use-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§9. Why we use cookies?</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>User convenience: Cookies can significantly affect the comfort of browsing the Website.</li>
                                <li>Content personalization: Cookies enable adjusting displayed content to user preferences and interests, making the site more useful.</li>
                                <li>Remembering settings: Cookies permit the Website to remember user settings such as language, layout or color scheme, enabling faster and more convenient use.</li>
                                <li>Session maintenance: Cookies help track user activity across pages, enabling returning to recently visited sections or continuing unfinished actions (e.g. filling forms).</li>
                                <li>Performance optimization: Cookies can be used for traffic analysis and behaviour analysis which helps optimize performance and deliver high-quality content.</li>
                                <li>Advertising: Cookies allow displaying personalized ads tailored to the user’s interests and needs, making ads less intrusive and more relevant.</li>
                                <li>Social media integration: Cookies enable integration with social networks (Facebook, Twitter, Instagram), facilitating sharing, commenting or liking content and using additional features.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='technical-function-privacy' className='space-y-4'>
                            <h2 id='technical-function-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§10. Functions of technical cookies.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Remembering user preferences: Technical cookies allow the site to store information about user preferences (selected language, font size, color settings, other personalization).</li>
                                <li>Form handling: Technical cookies support functioning of site forms (login, registration, contact), ensuring proper processing of data entered by users.</li>
                                <li>Performance optimization: Technical cookies enable monitoring of site performance and loading speeds for optimization.</li>
                                <li>Security: Technical cookies help provide site security (e.g., verifying user identity, detecting intrusion attempts, protecting against CSRF attacks).</li>
                            </ol>
                        </section>

                        <section aria-labelledby='analytical-function-privacy' className='space-y-4'>
                            <h2 id='analytical-function-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§11. Functions of analytical cookies.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Traffic measurement: Analytical cookies allow monitoring visits, unique users and page views to give an overall picture of site popularity and performance.</li>
                                <li>Behaviour analysis: They collect data on how users navigate the site (time on pages, navigation paths, exit points).</li>
                                <li>Conversion optimization: They help identify elements that affect conversion rates (e.g. signups, orders, contact form submissions).</li>
                                <li>User segmentation: Analytical cookies enable grouping users by various criteria for better content and offer tailoring.</li>
                                <li>A/B testing: Analytical cookies are used in A/B testing to compare two versions of the site and see which better meets goals.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='marketing-function-privacy' className='space-y-4'>
                            <h2 id='marketing-function-privacy' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§12 Functions of marketing cookies.</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Personalised advertising: Marketing cookies enable showing ads tailored to the user’s interests and browsing history.</li>
                                <li>Remarketing: They allow tracking users who visited the Website but did not complete an action, and retargeting them with ads to encourage return and conversion.</li>
                                <li>Advertising effectiveness measurement: Marketing cookies help monitor campaign performance (clicks, conversions, impressions) for optimization.</li>
                                <li>Cross-channel ad management: They facilitate coordination of advertising across multiple channels (search, social, partner sites).</li>
                                <li>Testing and optimisation of ad content: Marketing cookies are used for testing (including A/B) and evaluating which creatives and messages work best.</li>
                            </ol>
                        </section>

                    </article>
                )}
                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>

            <Footer dict={dictionaryFooter} />
        </>
    )
}

export default page