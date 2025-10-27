const getCityJsonLd = (cityData, slug) => {
    const city = cityData.city;
    const pageUrl = `https://airtilion.com/${slug}`;
    const serviceName = cityData.metaTitle || `Strony internetowe ${city}`;
    
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        
        "serviceType": "Web development",
        "name": serviceName,
        "description": cityData.metaDescription, 
        "url": pageUrl,
                
        "provider": {
            "@type": "Organization",
            "name": "Airtilion",
            "url": "https://airtilion.com/",
            "logo": "https://airtilion.com/airtilion-logo.svg",

            "contactPoint": { 
                "@type": "ContactPoint",
                "telephone": "+48-720-177-174",
                "contactType": "customer service"
            }
        },
        
        "areaServed": {
            "@type": "City",
            "name": city
        }
    };

    return serviceSchema;
};

export default getCityJsonLd;