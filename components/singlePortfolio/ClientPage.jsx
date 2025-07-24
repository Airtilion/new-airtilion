'use client'

// import Footer from '@components/Footer'
import Header from '@components/Header'
import React, { useEffect, useState } from 'react'
import PortfolioIntroduction from './PortfolioIntroduction/PortfolioIntroduction'
import PortfolioIntroductionLoader from './PortfolioIntroduction/PortfolioIntroductionLoader'

const ClientPage = ({ id }) => {
    const [project, setProject] = useState({})
    const [loading, setLoading] = useState(false)

    const getLink = (element) => {
        return `${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/${project.Client}/${element?.replace(/\\/g, '/')}`;
    };

    const getData = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/projects/getSingle', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: id })
            });

            const data = await res.json()
            console.log(data)
            setProject(data)
            setLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Header title={project.Name} content={'Default Content'} bg={getLink(project.Background?.file)} base={true} base64={project.Background?.base64}/>
            <main className='flex flex-col gap-[192px] mt-[192px] pb-32 overflow-hidden max-sm:mt-[128px] relative'>
                {loading ? 
                    <PortfolioIntroductionLoader/>
                :
                    <PortfolioIntroduction desc={project.Description} logo={project.Logo?.file} screens={project.Screens} convertLink={getLink} />
                }
            </main>
            {/* <Footer dict={dict.footer} /> */}
            <div className='gradient-transparency-v absolute w-[800px] h-[calc(100%-550px)] bg-linear-to-r from-[#00000000] via-[#e283504D] to-[#00000000] z-[-3] top-0 left-[50%] translate-x-[-50%] max-lg:w-[500px] max-sm:w-[80%]'></div>
        </>
    )
}

export default ClientPage