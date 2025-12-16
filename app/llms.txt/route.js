import { citiesList } from "@data/citiesList";

const BLOG_URL = process.env.BLOG_URL;

export async function GET() {
    const domain = 'https://airtilion.com';

    let content = `# Airtilion - Strony i Sklepy Internetowe\n\n`;
    content += `Poniżej znajdują się linki do naszej oferty oraz artykułów blogowych.\n\n`;

    content += `## Oferta i Główne strony\n`;

    const staticPages = [
        { title: "Strona główna", url: `${domain}`, desc: "Główna strona agencji Airtilion." },
        { title: "Strony internetowe", url: `${domain}/oferta-strony-internetowe`, desc: "Oferta projektowania i wdrażania stron internetowych." },
        { title: "Sklepy internetowe", url: `${domain}/oferta-sklepy-internetowe`, desc: "Wdrożenia e-commerce i sklepów online." },
        { title: "Aplikacje mobilne", url: `${domain}/oferta-aplikacje-mobilne`, desc: "Tworzenie dedykowanych aplikacji mobilnych." },
        { title: "Usługi dodatkowe", url: `${domain}/oferta-dodatkowe-uslugi`, desc: "Opieka nad stronami i wsparcie techniczne." },
        { title: "Portfolio", url: `${domain}/portfolio`, desc: "Nasze dotychczasowe realizacje." },
    ];

    staticPages.forEach(page => {
        content += `- [${page.title}](${page.url}): ${page.desc}\n`;
    });

    content += `\n## Oferta Lokalna\n`;
    content += `Świadczymy usługi w wielu miastach, m.in.:\n`;
    citiesList.forEach((city) => {
        content += `- [Strony internetowe - ${city.name}](${domain}/strony-internetowe-${city.slug})\n`;
    });

    content += `\n## Blog i Wiedza\n`;
    try {
        const res = await fetch(`${BLOG_URL}/wp-json/wp/v2/posts?per_page=100`, {
            cache: "no-store",
        });

        if (res.ok){
            const posts = await res.json();
            posts.forEach(post => {
                const decodedTitle = post.title.rendered.replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
                content += `- [${decodedTitle}](${domain}/blog/${post.slug})\n`;
            });
        }
    } catch (err) {
        console.error('Nie udalo się pobrać postów do llms.txt:', err);
        content += `> Błąd podczas pobierania listy artykułów.\n`;
    }

    return new Response(content, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
        },
    })
}