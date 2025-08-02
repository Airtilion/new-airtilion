'use client'

import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify'
import Image from 'next/image'

const ProjectViewer = ({ isVisible, isContactOpen, setIsContactOpen, vis, projectName, convertLink }) => {
    const [actualPhoto, setActualPhoto] = useState(0)
    const [open, setOpen] = useState(false);

    const fixEncoding = (str) => {
        const bytes = Uint8Array.from(Array.from(str).map(ch => ch.charCodeAt(0)));
        return new TextDecoder('utf-8').decode(bytes).replace(/-/g, ' ');
    }

    return (
        <>
            {isVisible && (
                <>
                    <div className="fixed inset-0 bg-[#00000099] backdrop-blur-sm z-[48]" />
                    <div className={`contact-panel relative ${isContactOpen ? 'slide-up' : 'slide-down'}`}>
                        <div className='flex flex-col mt-[80px] gap-16 items-center w-[1240px] max-2xl:w-[960px] max-xl:w-[750px] max-lg:w-[90%] mx-auto max-sm:mt-32 max-sm:gap-8'>
                            <p className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] self-start'>Wizualizacja: {projectName}</p>
                            <Image src={convertLink(vis[actualPhoto].file)} width={1240} height={1000} quality={100} placeholder='blur' blurDataURL={vis[actualPhoto].base64} className='h-auto w-full duration-500' alt="Jakaś wizualizacja" />
                        </div>
                    </div>

                    <div className='w-full flex justify-end fixed top-16 right-16 z-[52] max-md:right-8 max-md:top-8'>
                        <button onClick={() => setIsContactOpen(false)} className='flex gap-[8px] px-[12px] py-[6px] rounded-[5px] items-center duration-500 hover:bg-[#e283507e] bg-[#000000cd]'>
                            <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                            <span className='font-light text-[16px]'>Zamknij</span>
                        </button>
                    </div>

                    <div onClick={() => setOpen(prev => !prev)} className='z-[52] fixed left-[50%] translate-x-[-50%] bottom-8 bg-[#000000CC] backdrop-blur-sm py-4 px-6 rounded-[5px] flex gap-4 items-center cursor-pointer w-fit max-md:max-w-[350px] max-md:justify-between max-sm:w-[260px]'>
                        <p className='!text-[#e28350] max-md:text-[14px]'>Wybrana strona: <br className='hidden max-md:block'/><span className='text-white'>{fixEncoding(vis[actualPhoto].file.slice(projectName.length + 15, -5))}</span></p>
                        <Icon icon="weui:arrow-outlined" width={30} height={30} className={`text-white duration-500 ${open ? 'rotate-[90deg]' : 'rotate-[-90deg]'}`} />

                        <div className={`absolute left-0 w-full z-[-1] bg-[#000000f7] backdrop-blur-sm flex flex-col overflow-hidden rounded-[5px] transition-all duration-300 p-4 gap-2 ${open ? 'opacity-100 translate-y-[-128px]' : 'opacity-0 -translate-y-2 pointer-events-none'}`} style={{maxHeight: open ? vis.length*60+'px' : '0px'}}>
                            {vis.map((v, idx) => (
                                <p key={idx} onClick={e => { e.stopPropagation(); setActualPhoto(idx); setOpen(false) }} className={`text-right text-[18px] cursor-pointer duration-500 pointer-events-auto ${idx === actualPhoto && '!text-[#e28350] text-[20px]'}`}>{fixEncoding(v.file.slice(projectName.length + 15, -5))}</p>
                            ))}
                        </div>
                    </div>

                    <div className={`fixed inset-0 h-full overflow-hidden z-[49] bg-[#00000080] ${isContactOpen ? 'slide-up' : 'slide-down'}`}>
                        <div className='w-[1700px] h-[1700px] rounded-full bg-[#e2835033] blur-[200px] absolute bottom-[-850px]' />
                    </div>
                </>

            )}
        </>

    )
}

export default ProjectViewer