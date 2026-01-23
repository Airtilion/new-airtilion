import Script from "next/script";

const JsonLd = ({ data }) => {
    if (!data) return null;
    return (
        <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
    )
}

export default JsonLd