import React from 'react'
import Link from 'next/link'

// Funkcja do ładowania dojebanych zdjęć (podmienisz na swoje w przyszłości)
const getPlatformImage = (title) => {
    const t = title.toLowerCase();
    // Przykładowe zdjęcia z Unsplash – wysoka jakość, mroczny/premium klimat
    if (t.includes('woo')) return 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1664&auto=format&fit=crop';
    if (t.includes('shopi')) return 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop';
    return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop';
}

const ServicePlatforms = ({ dict, lang, baseUrl = "https://airtilion.com" }) => {
    return (
        <section className='mt-32 max-md:mt-24'>
            <div className='section-style'>

                {/* Potężny, czysty nagłówek */}
                <div className='max-w-4xl mb-32 max-md:mb-20'>
                    <h2 className='text-[56px] leading-[1.1] font-bold text-white tracking-tight max-lg:text-[48px] max-md:text-[40px]'>
                        {dict.title}
                    </h2>
                    <p className='mt-8 text-[20px] leading-relaxed text-white/70 max-lg:text-[18px] max-w-3xl'>
                        {dict.desc}{' '}
                        <Link href='/sklepy-internetowe/woocommerce' className='text-white hover:text-[#e28350] transition-colors'>WooCommerce</Link>,{' '}
                        <Link href='/sklepy-internetowe/shopify' className='text-white hover:text-[#e28350] transition-colors'>Shopify</Link>{' '}
                        {lang === 'en' ? 'and' : 'i'}&nbsp;
                        <Link href='/sklepy-internetowe/shoper' className='text-white hover:text-[#e28350] transition-colors'>Shoper</Link>.
                    </p>
                </div>

                {/* Układ Magazynowy - Wielkie zdjęcia i czysty tekst */}
                <div className='flex flex-col gap-32 max-md:gap-24'>
                    {dict.items.map((item, idx) => (
                        <div 
                            key={idx} 
                            // lg:even:flex-row-reverse robi robotę - parzyste elementy zamieniają się stronami
                            className='group flex flex-col lg:flex-row lg:even:flex-row-reverse items-center gap-16 max-xl:gap-12'
                        >
                            {/* Sekcja Zdjęcia (50% szerokości) */}
                            <Link 
                                href={`${baseUrl}${item.link}`}
                                className='w-full lg:w-1/2 overflow-hidden rounded-[2rem] aspect-[4/3] block'
                            >
                                <img 
                                    src={getPlatformImage(item.title)} 
                                    alt={item.title} 
                                    className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100'
                                />
                            </Link>

                            {/* Sekcja Tekstu (50% szerokości) */}
                            <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                                <h3 className='text-[48px] font-bold text-white mb-8 tracking-tight max-lg:text-[40px] max-md:text-[32px]'>
                                    {item.title}
                                </h3>
                                
                                <div className='flex flex-col gap-6 text-[18px] leading-relaxed text-white/70 max-md:text-[16px]'>
                                    {item.desc.map((paragraph, pIdx) => (
                                        <p key={pIdx}>{paragraph}</p>
                                    ))}
                                </div>

                                <div className='mt-12'>
                                    <Link 
                                        href={`${baseUrl}${item.link}`}
                                        className='inline-block text-[16px] font-medium uppercase tracking-widest text-white border-b-2 border-[#e28350] pb-2 hover:text-[#e28350] transition-colors duration-300'
                                    >
                                        Dowiedz się więcej
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ServicePlatforms