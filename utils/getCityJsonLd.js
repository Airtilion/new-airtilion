const getCityJsonLd = (cityName, slug) => {
    return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Airtilion",
        "url": `https://airtilion.com/${slug}`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tarnów",
            "addressCountry": "PL"
        },
        "areaServed": {
            "@type": "Place",
            "name": cityName
        },
        "description": `Strony internetowe ${cityName} – nowoczesne i responsywne witryny dla firm.`
    }
}

export default getCityJsonLd