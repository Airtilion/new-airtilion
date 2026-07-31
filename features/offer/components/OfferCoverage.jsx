'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "/map/poland.json"

const OfferCoverage = ({ dict }) => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, []);

    const locations = [
        { name: 'Gdańsk', coordinates: [18.6466, 54.3520], href: '/strony-internetowe/gdansk' },
        { name: 'Szczecin', coordinates: [14.5528, 53.4285], href: '/strony-internetowe/szczecin' },
        { name: 'Poznań', coordinates: [16.9252, 52.4064], href: '/strony-internetowe/poznan' },
        { name: 'Bydgoszcz', coordinates: [18.0084, 53.1235], href: '/strony-internetowe/bydgoszcz' },
        { name: 'Warszawa', coordinates: [21.0122, 52.2297], href: '/strony-internetowe/warszawa' },
        { name: 'Białystok', coordinates: [23.1688, 53.1325], href: '/strony-internetowe/bialystok' },
        { name: 'Łódź', coordinates: [19.4570, 51.7592], href: '/strony-internetowe/lodz' },
        { name: 'Wrocław', coordinates: [17.0385, 51.1079], href: '/strony-internetowe/wroclaw' },
        { name: 'Katowice', coordinates: [19.0238, 50.2599], href: '/strony-internetowe/katowice' },
        { name: 'Kraków', coordinates: [19.9450, 50.0647], href: '/strony-internetowe/krakow' },
        { name: 'Lublin', coordinates: [22.5684, 51.2465], href: '/strony-internetowe/lublin' },
        { name: 'Rzeszów', coordinates: [21.9990, 50.0412], href: '/strony-internetowe/rzeszow' },
    ]

    return (
        <section className='mt-[128px]'>
            <div className='section-style'>
                <div className='flex items-center gap-8 max-lg:flex-col'>

                    <div className='w-1/2 flex flex-col items-start max-lg:w-full'>

                        <h2 className='title'>{dict.title}</h2>

                        <p className='mt-8 text-[16px] text-white/50 leading-relaxed max-w-md max-lg:max-w-none max-sm:text-[15px]'>{dict.subtitle}</p>

                        <Link href={'/strony-internetowe'} className='mt-12 group rounded-full flex items-center gap-6 px-8 py-5 bg-white text-black text-[13px] font-bold tracking-widest uppercase hover:bg-[#e28350] hover:text-white transition-colors duration-300'>
                            <span>{dict.cta}</span>
                            <Icon icon='ph:arrow-right-bold' width={16} height={16} className='group-hover:translate-x-1 transition-transform duration-300 shrink-0' />
                        </Link>
                    </div>

                    <div className='w-8/12 flex-center min-h-[500px] max-lg:w-full max-lg:min-h-auto'>

                        {isMounted && (
                            <>

                                <ComposableMap
                                    projection="geoMercator"
                                    projectionConfig={{
                                        scale: 3800,
                                        center: [19.3, 52.1]
                                    }}
                                    width={800}
                                    height={800}
                                    style={{ width: "100%", height: "auto", maxWidth: "700px" }}
                                >
                                    <defs>
                                        <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                                            <feMerge>
                                                <feMergeNode in="coloredBlur" />
                                                <feMergeNode in="SourceGraphic" />
                                            </feMerge>
                                        </filter>
                                    </defs>

                                    <Geographies geography={geoUrl}>
                                        {({ geographies }) =>
                                            geographies.map((geo) => (
                                                <Geography
                                                    key={geo.rsmKey}
                                                    geography={geo}
                                                    fill="#222222"
                                                    stroke="#3a3a3a"
                                                    strokeWidth={1}
                                                    style={{
                                                        default: { outline: "none" },
                                                        hover: { fill: "#2a2a2a", outline: "none", transition: "fill 0.3s ease" },
                                                        pressed: { outline: "none" }
                                                    }}
                                                />
                                            ))
                                        }
                                    </Geographies>

                                    {locations.map((loc, idx) => (
                                        <Marker key={idx} coordinates={loc.coordinates} className="cursor-pointer" onClick={() => router.push(loc.href)}>
                                            <g className="group transition-transform duration-300 hover:scale-125">
                                                <circle r={6} fill="#e28350" filter="url(#neon-glow)" />
                                                <circle r={2} fill="#ffffff" />
                                                <text y={-18} textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="bold" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md pointer-events-none">{loc.name}</text>
                                            </g>
                                        </Marker>
                                    ))}
                                </ComposableMap>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfferCoverage