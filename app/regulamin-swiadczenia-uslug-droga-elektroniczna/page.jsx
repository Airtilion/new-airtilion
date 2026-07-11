import React from 'react'
import Link from 'next/link'
import { getDictionary } from '@utils/getDictionary'
import Footer from '@components/layout/Footer'
import Breadcrumbs from '@components/layout/Breadcrumbs'

export const metadata = {
    title: "Regulamin świadczenia usług drogą elektroniczną | Airtilion",
    alternates: {
        canonical: 'https://airtilion.com/regulamin-swiadczenia-uslug-droga-elektroniczna',
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
                    <article aria-labelledby='heading-terms-and-condition' className='mt-8 space-y-16'>
                        <section className="space-y-4">
                            <h1 id='commercial-info' className='uppercase text-[30px] text-center font-bold max-sm:text-[25px]'>Regulamin świadczenia usług drogą elektroniczną</h1>
                            <p>Airtilion Sp. z o.o. (dalej „Wykonawca” / „Airtilion”) Siedziba: ul. Słoneczna 32/9, 33-100 Tarnów. NIP: 8733299720, REGON: 540390460. Kontakt: <a href='mailto:kontakt@airtilion.com' className='text-[#E28350] hover:underline'>kontakt@airtilion.com</a>, tel. <a href='tel:+48720177174' className='text-[#E28350] hover:underline'>+48 720 177 174</a> lub <a href='tel:+48511019652' className='text-[#E28350] hover:underline'>+48 511 019 652</a>.</p>
                        </section>

                        <section aria-labelledby='basic-terms-and-condition' className="space-y-4">
                            <h2 id='basic-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§1. Postanowienia ogólne</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Niniejszy Regulamin określa zasady korzystania z usług świadczonych drogą elektroniczną przez Airtilion, w tym: tworzenie stron internetowych, sklepów ecommerce, aplikacji mobilnych, świadczenie usług utrzymania/abonamentu oraz prac programistycznych rozliczanych godzinowo.</li>
                                <li>Usługi świadczone są na terytorium Rzeczypospolitej Polskiej oraz - o ile strony ustalą inaczej - na terytorium innych państw.</li>
                                <li>Regulamin stosuje się w relacjach z konsumentami (B2C) i przedsiębiorcami (B2B) - w zakresie przewidzianym przepisami prawa. W zakresie praw konsumenta stosuje się przepisy prawa konsumenckiego (m.in. prawo odstąpienia).</li>
                            </ol>
                        </section>

                        <section aria-labelledby='definition-terms-and-condition' className="space-y-4">
                            <h2 id='definition-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§2. Definicje</h2>
                            <ul className="list-disc list-inside space-y-4">
                                <li><span className='font-semibold'>Klient</span> - osoba fizyczna, osoba prawna lub inna jednostka zawierająca umowę z Wykonawcą</li>
                                <li><span className='font-semibold'>Konsument</span> - Klient będący osobą fizyczną dokonującą czynności niezwiązanej bezpośrednio z działalnością gospodarczą.</li>
                                <li><span className='font-semibold'>Usługa</span> - usługa programistyczna, subskrypcja utrzymania, prace integracyjne, wdrożeniowe, projektowe itp. świadczone drogą elektroniczną lub w ramach kontraktu.</li>
                                <li><span className='font-semibold'>Strona</span> - serwis internetowy Airtilion (airtilion.com) i kanały komunikacji email/telefon.</li>
                            </ul>
                        </section>

                        <section aria-labelledby='types-terms-and-condition' className="space-y-4">
                            <h2 id='types-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§3. Rodzaje usług i zasady ich świadczenia</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Airtilion świadczy usługi w modelach: jednorazowa realizacja projektu (np. wykonanie strony), abonament/subskrypcja (utrzymanie, aktualizacje), rozliczenie godzinowe (support, prace rozwojowe).</li>
                                <li>Szczegółowy zakres prac, terminy i ceny określane są w ofercie/zamówieniu/umowie indywidualnej przesyłanej Klientowi e-mailem. Oferta wysłana do klienta zawiera zakres prac, harmonogram, warunki płatności.</li>
                                <li>Umowa zostaje zawarta z chwilą:
                                    <ul className='list-disc list-inside pl-8 mt-4 space-y-2'>
                                        <li>akceptacji oferty przez Klienta (pisemnie/e-mail) i jednoczesnego potwierdzenia przez Wykonawcę, lub</li>
                                        <li>innej formy wskazanej w indywidualnej ofercie (np. podpisanie umowy papierowej).</li>
                                    </ul>
                                </li>
                                <li>Wykonawca zastrzega możliwość zlecania części prac podwykonawcom (np. hosting, grafika, integracje z usługami zewnętrznymi) przy jednoczesnym zachowaniu odpowiedzialności za wykonanie usługi.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='technical-specifications-terms-and-condition' className="space-y-4">
                            <h2 id='technical-specifications-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§4. Warunki techniczne</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Do korzystania z usług Klient potrzebuje urządzenia z dostępem do Internetu i adresu e-mail. Wymagania techniczne (np. dostęp do FTP, konta hostingowego) będą szczegółowo opisane w specyfikacji zamówienia.</li>
                                <li>Klient zobowiązany jest dostarczyć materiały niezbędne do realizacji usługi (treści, grafiki, dostęp do domen, dane logowania) w terminach uzgodnionych w ofercie jeśli wymaga tego umowa. Opóźnienia Klienta mogą wydłużyć termin realizacji i powodować dodatkowe opłaty.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='prices-terms-and-condition' className="space-y-4">
                            <h2 id='prices-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§5. Ceny i warunki płatności</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Ceny usług ustalane są indywidualnie w ofercie. Standardowe formy rozliczeń: faktura VAT (B2B/B2C), zaliczki, płatności okresowe przy subskrypcji.</li>
                                <li>Termin płatności: zgodnie z ofertą/umową (np. 14 dni od wystawienia faktury) - o ile strony nie ustalą inaczej. W razie opóźnienia Wykonawca może naliczyć odsetki ustawowe za opóźnienie.</li>
                                <li>W przypadku umów abonamentowych: płatność cykliczna (miesięczna/roczna) rozpoczyna się w dniu wskazanym w umowie; warunki wypowiedzenia subskrypcji określa osobny regulamin subskrypcji/umowa.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='implementation-terms-and-condition' className="space-y-4">
                            <h2 id='implementation-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§6. Realizacja usługi, terminy</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Terminy realizacji podawane są w ofercie / umowie. W terminach nie uwzględnia się czasu oczekiwania na materiały od Klienta.</li>
                                <li>Jeśli usługa obejmuje wdrożenie na serwerze/hosting - Wykonawca poinformuje o wymaganych czynnościach po stronie Klienta.</li>
                                <li>W przypadku umów abonamentowych Wykonawca świadczy usługi zgodnie z zakresem określonym w ofercie abonamentowej.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='changes-to-the-order-terms-and-condition' className="space-y-4">
                            <h2 id='changes-to-the-order-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§7. Zmiany w zamówieniu i prace dodatkowe</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Każda zmiana zakresu usługi musi być potwierdzona na piśmie (e-mail) i może skutkować zmianą ceny/terminu.</li>
                                <li>Prace nieobjęte zakresem przyjętym w ofercie traktowane są jako dodatkowe i rozliczane oddzielnie.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='complaints-terms-and-condition' className="space-y-4">
                            <h2 id='complaints-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§8. Reklamacje i gwarancja</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Klient ma prawo zgłosić wadę usługi (reklamację) drogą e-mailową na adres <a href='mailto:kontakt@airtilion.com' className='text-[#E28350] hover:underline'>kontakt@airtilion.com</a>, wskazując opis błędu i dowody.</li>
                                <li>Reklamacje rozpatrywane są w terminie 14 dni kalendarzowych od daty otrzymania zgłoszenia (termin może być dłuższy, jeżeli specyfika wymaga dodatkowego czasu) - ostateczne rozwiązanie może obejmować poprawkę, uzupełnienie lub zwrot części wynagrodzenia według ustaleń stron.</li>
                                <li>W przypadku świadczenia usług dla konsumentów obowiązują przepisy o rękojmi i gwarancji jeśli strony tak ustalą; standardowo Wykonawca udziela rok na usunięcie defektów ujawnionych po wykonaniu usługi.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='withdrawal-from-the-contract-terms-and-condition' className="space-y-4">
                            <h2 id='withdrawal-from-the-contract-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§9. Prawo odstąpienia od umowy (konsumenci)</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Konsument ma prawo do odstąpienia od umowy zawartej na odległość w terminie 14 dni bez podania przyczyny - zgodnie z ustawą o prawach konsumenta. Termin biegnie od dnia zawarcia umowy. Wyjątki od prawa odstąpienia (np. usługi wykonane w pełni za zgodą konsumenta przed upływem terminu) stosuje się zgodnie z przepisami prawa.</li>
                                <li>Jeżeli Klient-konsument chce, aby usługa rozpoczęła się przed upływem okresu 14 dni i wyraził zgodę na rozpoczęcie wykonania usługi oraz na utratę prawa odstąpienia w przypadku całkowitego wykonania usługi, Wykonawca może rozpocząć wykonanie usługi wcześniej po uzyskaniu wyraźnego oświadczenia klienta. (wzór oświadczenia może być dołączony do umowy).</li>
                            </ol>
                        </section>

                        <section aria-labelledby='responsibility-terms-and-condition' className="space-y-4">
                            <h2 id='responsibility-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§10. Odpowiedzialność</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Wykonawca odpowiada za wykonanie usługi zgodnie z umową i zasadami wiedzy technicznej.</li>
                                <li>Wykonawca nie ponosi odpowiedzialności za: utratę danych lub szkody wynikłe z działań zewnętrznych (np. błędne dane dostarczone przez Klienta, działania operatorów hostingowych, awarie zewnętrznych integracji), o ile nie wynikają z winy Wykonawcy.</li>
                                <li>Wykonawca ogranicza odpowiedzialność za szkody do wysokości wynagrodzenia otrzymanego od danego Klienta za usługę, z zastrzeżeniem przepisów bezwzględnie obowiązujących (np. szkody wyrządzone umyślnie).</li>
                            </ol>
                        </section>

                        <section aria-labelledby='copyright-terms-and-condition' className="space-y-4">
                            <h2 id='copyright-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§11. Prawa autorskie i własność intelektualna</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Materiały dostarczone przez Klienta pozostają własnością Klienta. Klient oświadcza, że posiada prawa do materiałów (tekstów, grafik) przekazanych Wykonawcy i nie naruszają one praw osób trzecich.</li>
                                <li>Wyniki prac (kod, projekt graficzny, dokumentacja) - jeśli strony nie ustalą inaczej w umowie - przechodzą na Klienta po zapłacie pełnego wynagrodzenia (przeniesienie majątkowych praw autorskich) według zakresu określonego w umowie. Wykonawca zachowuje prawo do korzystania z ogólnych rozwiązań technicznych i know-how.</li>
                                <li>W zakresie oprogramowania open source zastosowane są odpowiednie licencje - Wykonawca informuje Klienta o komponentach i licencjach użytych w projekcie.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='confidentiality-terms-and-condition' className="space-y-4">
                            <h2 id='confidentiality-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§12. Poufność</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Strony zobowiązują się do zachowania poufności informacji biznesowych i danych osobowych otrzymanych w związku z realizacją umowy.</li>
                                <li>Obowiązek poufności obowiązuje w okresie trwania umowy oraz przez 2 lata po jej zakończeniu (lub inny okres wskazany w umowie).</li>
                            </ol>
                        </section>

                        <section aria-labelledby='processing-of-personal-data-terms-and-condition' className="space-y-4">
                            <h2 id='processing-of-personal-data-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§13. Przetwarzanie danych osobowych</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Wykonawca przetwarza dane osobowe Klientów zgodnie z <Link href='/polityka-prywatnosci' className='text-[#E28350] hover:underline'>Polityką prywatności</Link>. Szczegółowe informacje o celach, podstawie prawnej, okresach przechowywania i prawach osób znajdują się w tej Polityce.</li>
                                <li>W przypadku powierzenia przetwarzania (np. hosting, księgowość, dostawcy narzędzi analitycznych) stosowane będą umowy powierzenia przetwarzania danych.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='cookies-terms-and-condition' className="space-y-4">
                            <h2 id='cookies-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§14. Cookies i narzędzia zewnętrzne</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Strona korzysta z plików cookies zgodnie z obowiązującą polityką cookies i ustawieniami użytkownika. Informacje o cookies są dostępne w <Link href='/polityka-prywatnosci' className='text-[#E28350] hover:underline'>Polityce prywatności</Link>.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='higher-power-terms-and-condition' className="space-y-4">
                            <h2 id='higher-power-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§15. Siła wyższa</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Strony nie ponoszą odpowiedzialności za niewykonanie lub nienależyte wykonanie zobowiązań spowodowane działaniem siły wyższej (np. katastrofy naturalne, awarie operatorów telekomunikacyjnych, akty prawne uniemożliwiające wykonanie). Strona dotknięta siłą wyższą niezwłocznie poinformuje drugą stronę o zaistniałej okoliczności.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='changes-terms-and-condition' className="space-y-4">
                            <h2 id='changes-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§16. Zmiany regulaminu</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Wykonawca zastrzega sobie prawo zmiany niniejszego Regulaminu. Zmiany wchodzą w życie po opublikowaniu na stronie i po upływie terminu wskazanego w ogłoszeniu (co najmniej 7 dni), chyba że zmiana dotyczy bezpośrednio już zawartych umów - wtedy wejście w życie wymaga zgody Klienta.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='final-provisions-terms-and-condition' className="space-y-4">
                            <h2 id='final-provisions-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§17. Postanowienia końcowe</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego (w tym ustawy o świadczeniu usług drogą elektroniczną, prawo konsumenckie, RODO) oraz układy międzynarodowe.</li>
                                <li>Ewentualne spory będą rozstrzygane polubownie; w razie braku porozumienia spór rozstrzyga sąd właściwy dla siedziby Airtilion, chyba że strony ustalą inaczej (np. sąd powszechny właściwy dla konsumenta).</li>
                            </ol>
                        </section>

                    </article>
                ) : (
                    <article aria-labelledby='heading-terms-and-condition' className='mt-8 space-y-16'>
                        <section className="space-y-4">
                            <h1 id='commercial-info' className='uppercase text-[30px] text-center font-bold max-sm:text-[25px]'>TERMS AND CONDITIONS FOR THE PROVISION OF ELECTRONIC SERVICES</h1>
                            <p>Airtilion Sp. z o.o. (hereinafter “Contractor” / “Airtilion”) Registered office: ul. Słoneczna 32/9, 33-100 Tarnów, Poland. TAX ID (NIP): 8733299720, REGON: 540390460. Contact: <a href='mailto:kontakt@airtilion.com' className='text-[#E28350] hover:underline'>kontakt@airtilion.com</a>, tel. <a href='tel:+48720177174' className='text-[#E28350] hover:underline'>+48 720 177 174</a> or <a href='tel:+48511019652' className='text-[#E28350] hover:underline'>+48 511 019 652</a>.</p>
                        </section>

                        <section aria-labelledby='basic-terms-and-condition' className="space-y-4">
                            <h2 id='basic-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§1. General Provisions</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>This Terms and Conditions set out the rules for using electronic services provided by Airtilion, including: the creation of websites, e-commerce stores, mobile applications, provision of maintenance/subscription services and programming work billed on an hourly basis.</li>
                                <li>Services are provided on the territory of the Republic of Poland and — unless the parties agree otherwise — in other countries.</li>
                                <li>These Terms apply to relationships with consumers (B2C) and businesses (B2B) to the extent provided by applicable law. Consumer rights shall be governed by consumer protection legislation (including the right of withdrawal).</li>
                            </ol>
                        </section>

                        <section aria-labelledby='definition-terms-and-condition' className="space-y-4">
                            <h2 id='definition-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§2. Definitions</h2>
                            <ul className="list-disc list-inside space-y-4">
                                <li><span className='font-semibold'>Client</span> - a natural person, legal person or other entity entering into an agreement with the Contractor.</li>
                                <li><span className='font-semibold'>Consumer</span> - a Client who is a natural person performing a legal act not directly related to their business activity.</li>
                                <li><span className='font-semibold'>Service</span> - programming services, maintenance/subscription, integration, implementation, design and similar services provided electronically or under contract.</li>
                                <li><span className='font-semibold'>Site</span> - the Airtilion website (airtilion.com) and communication channels by email/telephone.</li>
                            </ul>
                        </section>

                        <section aria-labelledby='types-terms-and-condition' className="space-y-4">
                            <h2 id='types-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§3. Types of Services and Terms of Provision</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Airtilion provides services in the following models: one-off project execution (e.g. website creation), subscription/maintenance (updates, upkeep), and hourly billing (support, development work).</li>
                                <li>The detailed scope of work, deadlines and prices are specified in the offer/order/individual contract sent to the Client by e-mail. The offer sent to the Client includes the scope of work, schedule and payment terms.</li>
                                <li>The contract is concluded at the moment of:
                                    <ul className='list-disc list-inside pl-8 mt-4 space-y-2'>
                                        <li>acceptance of the offer by the Client (in writing / by e-mail) and simultaneous confirmation by the Contractor, or</li>
                                        <li>in another form specified in the individual offer (e.g. signing a paper contract).</li>
                                    </ul>
                                </li>
                                <li>The Contractor reserves the right to outsource parts of the work to subcontractors (e.g. hosting, graphic design, integrations with external services) while retaining responsibility for performance of the service.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='technical-specifications-terms-and-condition' className="space-y-4">
                            <h2 id='technical-specifications-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§4. Technical Requirements</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>To use the services, the Client needs a device with Internet access and an e-mail address. Technical requirements (e.g. FTP access, hosting account) will be specified in the order specification.</li>
                                <li>The Client is obliged to provide materials necessary for the execution of the service (content, graphics, domain access, login credentials) within the deadlines agreed in the offer if the contract requires them. Delays attributable to the Client may extend the delivery time and incur additional charges.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='prices-terms-and-condition' className="space-y-4">
                            <h2 id='prices-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§5. Prices and Payment Terms</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Service prices are determined individually in the offer. Standard settlement methods: VAT invoice (B2B/B2C), advance payments, periodic payments for subscriptions.</li>
                                <li>Payment term: as specified in the offer/contract (e.g. 14 days from the invoice date) - unless the parties agree otherwise. In case of delay, the Contractor may charge statutory late payment interest.</li>
                                <li>For subscription agreements: recurring payments (monthly/annual) commence on the date specified in the contract; subscription termination terms are set out in a separate subscription regulation/contract.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='implementation-terms-and-condition' className="space-y-4">
                            <h2 id='implementation-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§6. Service Execution and Deadlines</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Deadlines for completion are provided in the offer / contract. Deadlines do not include time spent waiting for materials from the Client.</li>
                                <li>If the service includes deployment to a server/hosting, the Contractor will inform the Client about the actions required on the Client’s side.</li>
                                <li>For subscription agreements, the Contractor provides services according to the scope set out in the subscription offer.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='changes-to-the-order-terms-and-condition' className="space-y-4">
                            <h2 id='changes-to-the-order-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§7. Changes to the Order and Additional Work</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Any change to the scope of the service must be confirmed in writing (e-mail) and may result in a change to price/timeframes.</li>
                                <li>Work not included in the agreed scope will be treated as additional work and billed separately.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='complaints-terms-and-condition' className="space-y-4">
                            <h2 id='complaints-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§8. Complaints and Warranty</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>The Client has the right to report a defect in the service (complaint) by e-mail to <a href='mailto:kontakt@airtilion.com' className='text-[#E28350] hover:underline'>kontakt@airtilion.com</a>, indicating a description of the fault and evidence.</li>
                                <li>Complaints are processed within 14 calendar days from the date of receipt of the complaint (this term may be extended if the specific nature of the case requires additional time) — the final remedy may include correction, supplementation or a partial refund of the fee according to the parties’ arrangements.</li>
                                <li>When services are provided to consumers, statutory rules on warranty and guarantees apply if agreed by the parties; as a standard practice the Contractor grants one year for remedying defects discovered after completion of the service.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='withdrawal-from-the-contract-terms-and-condition' className="space-y-4">
                            <h2 id='withdrawal-from-the-contract-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§9. Right of Withdrawal from the Contract (Consumers)</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>A consumer has the right to withdraw from a distance contract within 14 days without giving any reason — in accordance with the Consumer Rights Act. The withdrawal period starts from the date the contract is concluded. Exceptions to the right of withdrawal (e.g. services fully performed with the consumer’s consent before the expiry of the period) shall apply in accordance with statutory provisions.</li>
                                <li>If the consumer-Client wishes the service to commence before the expiry of the 14-day period and has expressly agreed to the commencement of the service and to the loss of the right of withdrawal in the event of full performance of the service, the Contractor may commence performance earlier after obtaining the Client’s explicit statement (a model statement may be attached to the contract).</li>
                            </ol>
                        </section>

                        <section aria-labelledby='responsibility-terms-and-condition' className="space-y-4">
                            <h2 id='responsibility-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§10. Responsibility</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>The Contractor is liable for performing the service in accordance with the contract and generally accepted technical standards.</li>
                                <li>The Contractor is not liable for: data loss or damages resulting from external actions (e.g. incorrect data provided by the Client, actions of hosting operators, failures of external integrations), insofar as they do not result from the Contractor’s fault.</li>
                                <li>The Contractor limits liability for damages to the amount of remuneration received from the given Client for the service, subject to mandatory statutory provisions (e.g. liability for intentional wrongdoing).</li>
                            </ol>
                        </section>

                        <section aria-labelledby='copyright-terms-and-condition' className="space-y-4">
                            <h2 id='copyright-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§11. Copyright and Intellectual Property</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Materials provided by the Client remain the Client’s property. The Client represents that it holds the rights to materials (texts, graphics) submitted to the Contractor and that they do not infringe third-party rights.</li>
                                <li>Deliverables (code, design, documentation) - unless otherwise agreed in the contract — shall be transferred to the Client upon full payment of the remuneration (transfer of economic copyrights) to the extent specified in the contract. The Contractor retains the right to use general technical solutions and know-how.</li>
                                <li>For open source software used, appropriate licenses apply - the Contractor shall inform the Client of components and licenses used in the project.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='confidentiality-terms-and-condition' className="space-y-4">
                            <h2 id='confidentiality-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§12. Confidentiality</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>The parties undertake to maintain confidentiality of business information and personal data obtained in connection with the performance of the contract.</li>
                                <li>The confidentiality obligation applies for the duration of the contract and for 2 years after its termination (or another period specified in the contract).</li>
                            </ol>
                        </section>

                        <section aria-labelledby='processing-of-personal-data-terms-and-condition' className="space-y-4">
                            <h2 id='processing-of-personal-data-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§13. Processing of Personal Data</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>The Contractor processes Clients’ personal data in accordance with the <Link href='/polityka-prywatnosci' className='text-[#E28350] hover:underline'>Privacy Policy</Link>. Detailed information on purposes, legal bases, retention periods and data subject rights can be found in that Policy.</li>
                                <li>In the event of entrusting processing (e.g. hosting, accounting, providers of analytical tools) data processing agreements will be applied.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='cookies-terms-and-condition' className="space-y-4">
                            <h2 id='cookies-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§14. Cookies i narzędzia zewnętrzne</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>The Site uses cookies in accordance with the applicable cookie policy and the user’s settings. Information about cookies is available in the <Link href='/polityka-prywatnosci' className='text-[#E28350] hover:underline'>Privacy Policy</Link>.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='higher-power-terms-and-condition' className="space-y-4">
                            <h2 id='higher-power-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§15. Force Majeure</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>The parties shall not be liable for failure to perform or improper performance of obligations caused by force majeure (e.g. natural disasters, failures of telecommunications operators, legal acts preventing performance). The party affected by force majeure shall promptly notify the other party of the circumstance.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='changes-terms-and-condition' className="space-y-4">
                            <h2 id='changes-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§16. Changes to the Terms</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>The Contractor reserves the right to amend these Terms. Amendments shall take effect upon publication on the website and after the expiry of the notice period specified in the announcement (at least 7 days), unless the change directly concerns already concluded contracts — in which case entering into force requires the Client’s consent.</li>
                            </ol>
                        </section>

                        <section aria-labelledby='final-provisions-terms-and-condition' className="space-y-4">
                            <h2 id='final-provisions-terms-and-condition' className='text-[25px] text-center font-semibold max-sm:text-[20px]'>§17. Final Provisions</h2>
                            <ol className="list-decimal list-inside space-y-4">
                                <li>Matters not regulated by these Terms shall be governed by the laws of the Republic of Poland (including the Act on the Provision of Electronic Services, consumer protection law, RODO) and applicable international agreements.</li>
                                <li>Disputes shall be resolved amicably; if no agreement is reached, disputes shall be resolved by the court competent for Airtilion’s registered office, unless the parties agree otherwise (e.g. a court competent for the consumer).</li>
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