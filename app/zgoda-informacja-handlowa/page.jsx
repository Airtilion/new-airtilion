import React from 'react'
import Link from 'next/link'
import { getDictionary } from '@utils/getDictionary'
import Footer from '@components/layout/Footer'
import Breadcrumbs from '@components/layout/Breadcrumbs'

export const metadata = {
    title: "Zgoda na przesyłanie informacji handlowej | Airtilion",
    alternates: {
        canonical: 'https://airtilion.com/zgoda-informacja-handlowa',
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
                    <article aria-labelledby='commercial-info' className='mt-8 space-y-4'>
                        <h1 id='commercial-info' className='uppercase text-[30px] text-center font-bold max-sm:text-[25px]'>ZGODA NA POTRZEBY WYSYŁANIA ZAMÓWIONEJ INFORMACJI HANDLOWEJ</h1>
                        <p>Ja, niżej podpisany/a, wyrażam dobrowolnie zgodę na przetwarzanie moich danych osobowych przez Airtilion Sp. z o.o. z siedzibą w Tarnowie (ul. Słoneczna 32/9, 33-100 Tarnów, NIP: 8733299720) w celu przesłania mi informacji handlowej dotyczącej usług oferowanych przez Airtilion (w szczególności: ofert dot. tworzenia stron internetowych, sklepów e-commerce, aplikacji mobilnych, ofert abonamentowych i usług programistycznych).</p>

                        <ol className='mt-8 list-decimal list-inside space-y-4'>
                            <li><span className='font-semibold'>Administrator danych:</span> Airtilion Sp. z o.o. (adres powyżej). Kontakt: <a href='mailto:kontakt@airtilion.com' className='text-[#E28350] hover:underline'>kontakt@airtilion.com</a>.</li>
                            <li><span className='font-semibold'>Zakres danych:</span> imię i nazwisko (jeżeli zostało podane), adres e-mail, numer telefonu (jeżeli podano), inne dane podane dobrowolnie w formularzu kontaktowym.</li>
                            <li><span className='font-semibold'>Cel przetwarzania:</span> przesłanie informacji handlowej (oferta, materiały marketingowe) na mój adres e-mail / numer telefonu.</li>
                            <li><span className='font-semibold'>Podstawa prawna:</span> dobrowolna zgoda osoby, której dane dotyczą.</li>
                            <li><span className='font-semibold'>Okres przechowywania:</span> dane będą przechowywane do czasu wycofania zgody lub przez okres nie dłuższy niż niezbędny do wykonania usługi/odsłania kampanii marketingowej, z zastrzeżeniem obowiązków przechowywania wynikających z prawa (np. księgowość).</li>
                            <li><span className='font-semibold'>Prawo do cofnięcia zgody:</span> mogę w każdej chwili cofnąć zgodę, wysyłając wiadomość na <a href='mailto:kontakt@airtilion.com' className='text-[#E28350] hover:underline'>kontakt@airtilion.com</a> lub klikając link rezygnacyjny w otrzymanym e-mailu. Cofnięcie zgody nie wpływa na zgodność przetwarzania dokonanego przed jej cofnięciem.</li>
                            <li><span className='font-semibold'>Prawa osoby, której dane dotyczą:</span> prawo dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
                            <li><span className='font-semibold'>Odbiorcy danych:</span> dane mogą być przekazane dostawcom usług technicznych i marketingowych (dostawcy usług mailingowych, platforma CRM, dostawca narzędzi analitycznych) na podstawie umów powierzenia przetwarzania.</li>
                            <li><span className='font-semibold'>Informacje dodatkowe:</span> szczegółowe informacje o przetwarzaniu danych osobowych znajdują się w <Link href='/polityka-prywatnosci' className='text-[#E28350] hover:underline'>Polityce prywatności</Link>.</li>
                        </ol>

                    </article>
                ) : (
                    <article aria-labelledby='commercial-info' className='mt-8 space-y-4'>
                        <h1 id='commercial-info' className='uppercase text-[30px] text-center font-bold max-sm:text-[25px]'>CONSENT FOR THE PURPOSE OF SENDING REQUESTED COMMERCIAL INFORMATION</h1>
                        <p>I, the undersigned, voluntarily consent to the processing of my personal data by Airtilion Sp. z o.o. with its registered office in Tarnów (ul. Słoneczna 32/9, 33-100 Tarnów, TAX ID (NIP): 8733299720) for the purpose of sending me commercial information concerning services offered by Airtilion (in particular: offers regarding website development, e-commerce stores, mobile applications, subscription offers and programming services).</p>

                        <ol className='mt-8 list-decimal list-inside space-y-4'>
                            <li><span className='font-semibold'>Data controller:</span> Airtilion Sp. z o.o. (address as above). Contact: <a href='mailto:kontakt@airtilion.com' className='text-[#E28350] hover:underline'>kontakt@airtilion.com</a>.</li>
                            <li><span className='font-semibold'>Scope of data:</span> first name and last name (if provided), e-mail address, telephone number (if provided), and other data voluntarily provided in the contact form.</li>
                            <li><span className='font-semibold'>Purpose of processing:</span> to send commercial information (offers, marketing materials) to my e-mail address and/or telephone number.</li>
                            <li><span className='font-semibold'>Legal basis:</span> the voluntary consent of the data subject.</li>
                            <li><span className='font-semibold'>Storage period:</span>  the data will be stored until the consent is withdrawn or for no longer than is necessary to perform the service / carry out the marketing campaign, subject to mandatory statutory retention obligations (e.g. accounting).</li>
                            <li><span className='font-semibold'>Right to withdraw consent:</span> I may withdraw my consent at any time by sending a message to <a href='mailto:kontakt@airtilion.com' className='text-[#E28350] hover:underline'>kontakt@airtilion.com</a> or by clicking the unsubscribe link included in the e-mail I receive. Withdrawal of consent does not affect the lawfulness of processing carried out on the basis of consent prior to its withdrawal.</li>
                            <li><span className='font-semibold'>Data subject rights:</span> the right of access to the data, rectification, erasure, restriction of processing, data portability, the right to object, and the right to lodge a complaint with the President of the Personal Data Protection Office (Urząd Ochrony Danych Osobowych).</li>
                            <li><span className='font-semibold'>Recipients of data:</span> data may be disclosed to technical and marketing service providers (mailing service providers, CRM platform providers, analytics providers) on the basis of data processing agreements.</li>
                            <li><span className='font-semibold'>Additional information:</span> detailed information about the processing of personal data is available in the <Link href='/polityka-prywatnosci' className='text-[#E28350] hover:underline'>Privacy Policy</Link>.</li>
                        </ol>

                    </article>
                )}
                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>

            <Footer dict={dictionaryFooter} />
        </>
    )
}

export default page