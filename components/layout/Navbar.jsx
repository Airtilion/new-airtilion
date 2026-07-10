'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { scrollToSection } from '@utils/scrollToSection';

import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify';
import navbarPl from '@languages/pl/layout/navbar.json'
import navbarEn from '@languages/en/layout/navbar.json'
import WebsiteSettings from '@components/WebsiteSettings';

const Navbar = () => {
    const menuButtonRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const megaMenuRef = useRef(null);
    const closeTimeoutRef = useRef(null);

    const [isScrolled, setIsScrolled] = useState(false);
    const [megaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [mobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileView, setMobileView] = useState('main');

    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const lang = searchParams.get('lang') === 'en' ? 'en' : 'pl';
    const dict = lang === 'en' ? navbarEn : navbarPl;


    // ---------- Mega Menu ---------- //
    const openMegaMenu = () => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        setIsMegaMenuOpen(true);
    }

    const scheduleMegaMenuClose = () => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = setTimeout(() => setIsMegaMenuOpen(false), 300);
    }

    // ---------- Mobile Menu ---------- //
    const openMobileMenu = () => {
        setIsMobileMenuOpen(true);
        menuButtonRef.current?.classList.add('active');
        document.body.classList.add('overflow-hidden');
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setMobileView('main');
        menuButtonRef.current?.classList.remove('active');
        document.body.classList.remove('overflow-hidden');
    }

    const toogleMobileMenu = () => {
        mobileMenuOpen ? closeMobileMenu() : openMobileMenu();
    }

    // ---------- Eventy ---------- //
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 5);
        const handleResize = () => { if (window.innerWidth > 1023) closeMobileMenu() }
        const handleClickOutside = (e) => {
            if (megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
                setIsMegaMenuOpen(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousedown', handleClickOutside);
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        }
    }, []);

    // ---------- Nawigacja ---------- //
    const handleLinkClick = (e, link) => {
        setIsMegaMenuOpen(false);
        if (link.startsWith('/#')) {
            e.preventDefault();
            const hash = link.split('#')[1];

            if (pathname === '/') {
                const el = document.getElementById(hash);
                if (el) {
                    scrollToSection(el, 128);
                    window.history.pushState(null, '', `#${hash}`);
                }
            } else {
                router.push(`/#${hash}`);
            }
        } else {
            window.scrollTo({ top: 0, beahvior: 'auto' });
        }
    };

    return (

        <header className={`opacity-0 translate-y-animation navbar flex items-center justify-between px-24 h-[120px] w-full fixed top-0 z-40 duration-300 ${isScrolled ? 'backdrop-blur-[10px] bg-[#00000040]' : ''} max-2xl:px-16 max-xl:px-8 max-lg:h-[90px] max-sm:px-6`}>
            <button
                ref={menuButtonRef}
                onClick={toogleMobileMenu}
                aria-label={mobileMenuOpen ? dict.ariaButtons.closeMenu : dict.ariaButtons.menu}
                aria-expanded={mobileMenuOpen}
                aria-controls='mobile-menu'
                className="hamburger-menu w-12 h-[35px] duration-500 rounded-[5px] z-30 max-lg:flex flex-col justify-between items-center gap-[10px] hidden fixed right-16 top-[32px] max-sm:top-[27.5px] max-sm:right-6"
            >
                <span aria-hidden="true" className="block h-[5px] w-12 bg-gradient-to-r from-[#E28350] to-[#412515] rounded-full duration-500" />
                <span aria-hidden="true" className="block h-[5px] w-12 bg-gradient-to-r from-[#E28350] to-[#412515] rounded-full duration-500" />
                <span aria-hidden="true" className="block h-[5px] w-12 bg-gradient-to-r from-[#E28350] to-[#412515] rounded-full duration-500" />
            </button>

            <Link href='/' onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>
                <img src="/airtilion-logo.svg" alt="Airtilion — przejdź do strony głównej" width={230} height={60} className="max-2xl:w-[200px] max-xl:w-[160px] max-lg:w-[200px]" />
            </Link>

            {/* Desktop */}
            <div className='flex gap-4 items-center max-xl:gap-2 max-lg:hidden'>
                <nav aria-label={dict.ariaButtons.menuDesktop}>
                    <ul className="flex items-center gap-[32px] text-[16px] mr-[16px] max-2xl:text-[15px] max-xl:text-[14px]">
                        {dict.items.map((item, idx) => {
                            const isOffer = item.link === '/oferta'
                            return (
                                <li key={idx} ref={isOffer ? megaMenuRef : null} {...(isOffer ? { onMouseEnter: openMegaMenu, onMouseLeave: scheduleMegaMenuClose } : {})}>
                                    <Link href={item.link} onClick={(e) => handleLinkClick(e, item.link)} aria-haspopup={isOffer ? 'true' : undefined} aria-expanded={isOffer ? megaMenuOpen : undefined} className='hover:text-[#e28350] duration-500 flex items-center gap-1'>
                                        {item.name}
                                        {isOffer && (
                                            <Icon icon='ep:arrow-down' width={14} height={14} aria-hidden='true' className={`duration-300 ${megaMenuOpen ? 'rotate-180' : ''}`} />
                                        )}
                                    </Link>

                                    {isOffer && (
                                        <div role='region' aria-label={dict.ariaButtons.offerMenu} onMouseEnter={openMegaMenu} onMouseLeave={scheduleMegaMenuClose} className={`absolute top-[100px] left-0 right-0 mx-auto w-full max-w-[1400px] bg-[#000000E6] backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-200 ${megaMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>

                                            <div className='w-[1100px] h-[1100px] rounded-full bg-[#e2835033] blur-[200px] absolute bottom-[-850px] left-1/2 -translate-x-1/2 pointer-events-none' aria-hidden="true" />

                                            <div className='relative z-10 p-10 grid grid-cols-4 gap-x-12 gap-y-10'>
                                                {dict.megaMenu.groups.map((group, gi) => (
                                                    <div key={gi} className='flex flex-col gap-4'>
                                                        <div className='flex flex-col gap-4 border-l border-white/5 pl-6 first:border-none first:pl-0'>
                                                            <Link href={group.link} onClick={(e) => handleLinkClick(e, group.link)} className="text-white font-semibold text-[17px] hover:text-[#e28350] duration-300 flex gap-3 group/title">
                                                                <span className='w-6 h-6 rounded-md bg-[#e28350]/10 flex-center shrink-0 group-hover/title:bg-[#e28350]/20 duration-300'>
                                                                    <Icon icon='ph:caret-right-bold' width={12} aria-hidden="true" className='text-[#e28350]' />
                                                                </span>
                                                                {group.title}
                                                            </Link>

                                                            {group.items.length > 0 && (
                                                                <ul className='flex flex-col gap-3 pl-12 list-disc text-(--primary-text-color)'>
                                                                    {group.items.map((subItem, si) => (
                                                                        <li key={si}>
                                                                            <Link href={subItem.link} onClick={(e) => handleLinkClick(e, subItem.link)} className="text-[15px] text-(--primary-text-color) hover:text-[#E28350] duration-300 block leading-tight hover:translate-x-1 transition-transform">
                                                                                {subItem.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="col-span-4 flex items-center justify-between pt-6 border-t border-white/10 mt-2">
                                                    <p className="text-[13px] text-white/30">{dict.otherText[0]}</p>
                                                    <Link href="/oferta" onClick={(e) => handleLinkClick(e, '/oferta')} className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white text-white font-medium rounded-lg text-[14px] hover:bg-white hover:text-black duration-300 group/cta">
                                                        {dict.otherText[1]}
                                                        <Icon icon="ph:arrow-right-bold" width={14} aria-hidden="true" className="group-hover/cta:translate-x-1 duration-300" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <button onClick={() => window.dispatchEvent(new CustomEvent('openContact'))} className="group flex items-center gap-3 h-[50px] bg-gradient-to-r from-[#000000] to-[#E28350] duration-500 text-[16px] rounded-full px-8 py-3 text-white max-2xl:h-[40px] max-2xl:text-[15px] max-xl:px-6">
                    <Icon icon="solar:letter-bold" width={20} height={20} aria-hidden="true" className="group-hover:hidden" />
                    <Icon icon="solar:letter-opened-bold" width={20} height={20} aria-hidden="true" className="hidden group-hover:block" />
                    {dict.cta}
                </button>

                <WebsiteSettings index={dict.items.length} dict={dict.ariaButtons} />

            </div>

            {/* Mobile */}
            <div id='mobile-menu' ref={mobileMenuRef} role="dialog" aria-live='polite' aria-modal='true' aria-label={dict.ariaButtons.menuMobile} className={`fixed inset-0 h-dvh bg-[#000000D9] z-[60] backdrop-blur-[10px] flex-col justify-center items-center gap-[32px] ${mobileMenuOpen ? 'flex' : 'hidden'}`}>
                {mobileView === 'main' && (
                    <nav aria-label={dict.ariaButtons.menuMobile}>
                        <ul className="flex flex-col w-[280px] gap-2 text-[18px]">
                            {dict.items.map((item, idx) => {
                                const isOffer = item.link === '/oferta'
                                return (
                                    <li key={idx}>
                                        {isOffer ? (
                                            <button onClick={() => setMobileView('offer')} className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#e28350] duration-300 max-sm:text-[15px]">
                                                {item.name}
                                                <Icon icon="ep:arrow-right" width={18} height={18} aria-hidden="true max-sm:w-[16px] max-sm:h-[16px]" />
                                            </button>
                                        ) : (
                                            <Link href={item.link} onClick={(e) => { handleLinkClick(e, item.link); closeMobileMenu() }} className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#e28350] duration-300 max-sm:text-[15px]">
                                                {item.name}
                                            </Link>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                )}

                {mobileView === 'offer' && (
                    <nav aria-label="Menu oferty">
                        <ul className="flex flex-col w-[280px] gap-2 text-[18px] max-sm:text-[16px]">

                            <li>
                                <button onClick={() => setMobileView('main')} className="flex items-center gap-2 px-4 py-3 text-[14px] text-white/50 hover:text-white duration-300">
                                    <Icon icon="ep:arrow-left" width={16} aria-hidden="true" className='w-[14px]' />
                                    {dict.otherText[2]}
                                </button>
                            </li>

                            <li>
                                <Link href="/oferta" onClick={closeMobileMenu} className="flex items-center justify-between px-4 py-3 rounded-xl text-[#e28350] font-semibold hover:bg-white/5 duration-300">
                                    {dict.otherText[1]}
                                    <Icon icon="ep:arrow-right" width={18} aria-hidden="true" />
                                </Link>
                            </li>

                            <li aria-hidden="true" className="border-t border-white/10 my-1" />

                            {dict.megaMenu.groups.map((group, gi) => (
                                <li key={gi}>
                                    {group.items.length > 0 ? (
                                        <button onClick={() => setMobileView(group.link)} className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#e28350] duration-300">
                                            {group.title}
                                            <Icon icon="ep:arrow-right" width={18} aria-hidden="true" />
                                        </button>
                                    ) : (
                                        <Link href={group.link} onClick={closeMobileMenu} className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 hover:text-[#e28350] duration-300">
                                            {group.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                {dict.megaMenu.groups.map((group) =>
                    mobileView === group.link ? (
                        <nav key={group.link} aria-label={group.title}>
                            <ul className="flex flex-col w-[280px] gap-2 text-[18px]">

                                <li>
                                    <button onClick={() => setMobileView('offer')} className="flex items-center gap-2 px-4 py-3 text-[14px] text-white/50 hover:text-white duration-300">
                                        <Icon icon="ep:arrow-left" width={16} aria-hidden="true" className='w-[14px]' />
                                        {dict.otherText[3]}
                                    </button>
                                </li>

                                <li>
                                    <Link href={group.link} onClick={closeMobileMenu} className="flex items-center px-4 py-3 font-semibold text-[#e28350] hover:bg-white/5 rounded-xl duration-300">
                                        {group.title}
                                    </Link>
                                </li>

                                <li aria-hidden="true" className="border-t border-white/10 my-1" />

                                {group.items.map((subItem, si) => (
                                    <li key={si}>
                                        <Link href={subItem.link} onClick={closeMobileMenu} className="flex px-4 py-3 text-[16px] text-white/80 hover:text-[#e28350] hover:bg-white/5 rounded-xl duration-300">
                                            {subItem.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ) : null
                )}

                <button onClick={() => { window.dispatchEvent(new CustomEvent('openContact')); closeMobileMenu() }} className="flex items-center gap-3 h-[50px] bg-gradient-to-r from-[#542f1b] to-[#E28350] text-[16px] rounded-full px-8 text-white max-sm:h-[40px] max-sm:text-[15px]">
                    <Icon icon="solar:letter-bold" width={22} height={22} aria-hidden="true" />
                    {dict.cta}
                </button>

                <WebsiteSettings index={dict.items.length} dict={dict.ariaButtons} />
            </div>

        </header >
    )
}

export default Navbar