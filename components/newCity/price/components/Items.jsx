import React from 'react'
import ListItem from './ListItem';

const elements = [
    {
        title: "Strategia i analiza",
        desc: "Projekt poprzedzamy analizą Twojej branży i wymagań, aby strona realizowała cele biznesowe.",
    },
    {
        title: "Indywidualny projekt graficzny",
        desc: "Tworzymy unikalny design (brak szablonów i kreatorów), który wyróżnia Twoją markę.",
    },
    {
        title: "Dostosowanie do urządzeń mobilnych (RWD)",
        desc: "Gwarantujemy perfekcyjny wygląd na telefonach, tabletach i komputerach.",
    },
    {
        title: "Technologie na miarę czasów",
        desc: "Stosujemy nowoczesne rozwiązania i czysty kod, zapewniając optymalizację wydajności (szybkość ładowania).",
    },
    {
        title: "System CMS (opcjonalnie)",
        desc: "Wdrażamy wygodny panel zarządzania (np. integracja z WordPress) oraz dedykowane wtyczki funkcjonalne.",
    },
    {
        title: "Bezpieczeństwo strony internetowej",
        desc: "Wdrażamy certyfikat SSL oraz zabezpieczenia przed atakami.",
    },
    {
        title: "Przygotowanie do SEO",
        desc: "Odpowiednia struktura nagłówków, meta tagów i linków pod wyszukiwarki.",
    },
    {
        title: "Analityka ruchu",
        desc: "Pełna konfiguracja Google Analytics oraz Google Search Console.",
    },
    {
        title: "Zgodność z prawem (RODO)",
        desc: "Przygotowanie kompletu dokumentów (Polityka Prywatności, klauzule) oraz wdrożenie systemu zarządzania zgodami na pliki cookies.",
    },
    {
        title: "Infrastruktura",
        desc: "Pomoc w wyborze i rejestracja domeny (opcjonalnie) oraz konfiguracja serwera wirtualnego.",
    },
    {
        title: "Wdrożenie na serwerze",
        desc: "Instalacja, konfiguracja poczty i finalne testy działania.",
    },
    {
        title: "Szkolenie z obsługi",
        desc: "Uczymy, jak samodzielnie zarządzać stroną.",
    },
    {
        title: "Pełne wsparcie techniczne",
        desc: "Pakiet aktualizacji i pomocy technicznej (do 3 godzin miesięcznie na start).",
    },
    {
        title: "12 miesięczna gwarancja",
        desc: "Zapewniamy bezpłatne naprawy ewentualnych błędów technicznych.",
    },
]

const Items = () => {
    const midPoint = Math.ceil(elements.length / 2);
    const leftColumn = elements.slice(0, midPoint);
    const rightColumn = elements.slice(midPoint);

    return (
        <section className='mt-48 relative overflow-x-clip text-paragraph'>
            
            <div className="section-style-small">
                <p className='text-[18px] text-center max-xl:text-[16px] max-sm:text-[14px]'>Nie stosujemy ukrytych kosztów. Nasze pakiety cenowe są przejrzyste. <span className="font-semibold">Co zawsze wchodzi w cenę każdego projektu?</span></p>

                <div className='mt-8 grid grid-cols-1 gap-x-16 lg:grid-cols-2'>
                    <ul className='list-none space-y-8'>
                        {leftColumn.map((el, idx) => (
                            <ListItem key={`left-${idx}`} item={el} />
                        ))}
                    </ul>

                    <ul className="list-none space-y-8 max-lg:mt-8">
                        {rightColumn.map((el, idx) => (
                            <ListItem key={`right-${idx}`} item={el} />
                        ))}
                    </ul>
                </div>
            </div>

            <div className='absolute right-[-20%] top-[50%] translate-y-[-50%] rounded-full bg-[#e2835080] blur-[200px] w-[760px] h-[500px] z-[-1] max-xl:w-[500px] max-lg:w-[400px] max-lg:h-[400px] max-lg:top-[20%] max-md:blur-[120px] max-sm:w-[250px]'></div>
        </section>
    )
}

export default Items