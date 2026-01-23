const SHARED_GRAPH = [
    {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://airtilion.com/#organization",
                "name": "Airtilion",
                "url": "https://airtilion.com",
                "logo": "https://airtilion.com/airtilion-logo.svg",
                "sameAs": [
                    "https://www.linkedin.com/company/airtilion",
                    "https://www.facebook.com/airtilion",
                    "https://www.instagram.com/airtilion"
                ],
                "founder": [
                    {
                        "@type": "Person",
                        "@id": "https://airtilion.com/#founder-jakub",
                        "name": "Jakub Wadycki",
                        "jobTitle": "Co-founder",
                        "sameAs": [
                            "https://www.linkedin.com/in/jakub-wadycki"
                        ]
                    },
                    {
                        "@type": "Person",
                        "@id": "https://airtilion.com/#founder-artur",
                        "name": "Artur Plebańczyk",
                        "jobTitle": "Co-founder"
                    }
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+48-720-177-174",
                    "contactType": "customer service",
                    "areaServed": "PL",
                    "availableLanguage": ["Polish", "English"]
                },
            },
            {
                "@type": "WebSite",
                "@id": "https://airtilion.com/#website",
                "url": "https://airtilion.com",
                "name": "Airtilion | Tworzenie stron internetowych",
                "publisher": { "@id": "https://airtilion.com/#organization" }
            }
        ]
    }
]

export const getPageSchema = ({ title, description, slug, cityName = null }) => {
    return {
        "@context": "https://schema.org",
        "@graph": [
            ...SHARED_GRAPH,
            {
                "@type": "WebPage",
                "@id": `${slug}/#webpage`,
                "url": slug,
                "name": title,
                "description": description,
                "isPartOf": { "@id": "https://airtilion.com/#website" },
                "dateModified": "2026-01-23"
            },
            {
                "@type": "Service",
                "@id": `${slug}/#service`,
                "name": title,
                "description": description,
                "provider": { "@id": "https://airtilion.com/#organization" },
                ...(cityName && {
                    "areaServed": { "@type": "City", "name": cityName }
                })
            }
        ]
    }
}

export const getBlogListSchema = ({ title, description, slug }) => {
    return {
        "@context": "https://schema.org",
        "@graph": [
            ...SHARED_GRAPH,
            {
                "@type": "WebPage",
                "@id": `${slug}/#webpage`,
                "url": slug,
                "name": title,
                "description": description,
                "isPartOf": { "@id": "https://airtilion.com/#website" },
                "dateModified": "2026-01-23"
            },
            {
                "@type": "Blog",
                "@id": `${slug}/#blog`,
                "name": "Blog Airtilion",
                "description": description,
                "publisher": { "@id": "https://airtilion.com/#organization" }
            }
        ]
    }
}

export const getBlogPostSchema = ({ title, description, slug, publishDate, image, authorName }) => {
    const authorId = authorName === 'Jakub Wadycki' ? 'https://airtilion.com/#founder-jakub' : 'https://airtilion.com/#founder-artur'

    return {
        "@context": "https://schema.org",
        "@graph": [
            ...SHARED_GRAPH,
            {
                "@type": "WebPage",
                "@id": `${slug}/#webpage`,
                "url": slug,
                "name": title,
                "description": description,
                "isPartOf": { "@id": "https://airtilion.com/#website" },
                "dateModified": "2026-01-23"
            },
            {
                "@type": "BlogPosting",
                "@id": `${slug}/#article`,
                "headline": title,
                "image": image,
                "datePublished": publishDate,
                "dateModified": "2026-01-23",
                "author": { "@id": authorId },
                "publisher": { "@id": "https://airtilion.com/#organization" },
                "mainEntityOfPage": { "@id": `${slug}/#webpage` }
            }
        ]
    }
}