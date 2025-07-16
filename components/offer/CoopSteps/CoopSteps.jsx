import Image from 'next/image'
import React from 'react'
import Step from './components/Step'
import coop1 from '@assets/images/offer/coop-1.webp'
import coop2 from '@assets/images/offer/coop-2.webp'
import IntersectionListener from '@components/IntersectionListener'

const CoopSteps = ({dict}) => {
  return (
    <section id="coop-section" className='w-full relative pb-8 coop-hidden'>
        <IntersectionListener selector="#coop-section" visibleClass="coop-visible" hiddenClass="coop-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

        <article className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto flex flex-col gap-4'>
            <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray w-fit selt-start animation-bottom transition-all duration-1000 ease-in-out'>{dict.title}</h2>
            <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] animation-bottom transition-all duration-1000 ease-in-out mb-12'>{dict.content}</p>
            <div className='flex gap-8 animation-right transition-all duration-1000 ease-in-out  max-md:flex-col'>
                <Image quality={100} src={coop1} width={600} height={400} alt={dict.alts[0]} className='max-xl:h-auto max-xl:object-cover object-right max-xl:w-[400px] max-lg:w-[300px] max-md:w-full max-md:h-[250px]'/>
                <div className='flex flex-col gap-8 flex-1'>
                    {dict.steps.slice(3).map((step, idx) => <Step key={idx} title={step.title} desc={step.desc} def={true} number={idx}/>)}
                </div>
            </div>

            <div className='w-[60%] h-[1px] radial-line mx-auto my-8'></div>

            <div className='flex gap-8 animation-left transition-all duration-1000 ease-in-out max-md:flex-col-reverse'>
                <div className='flex flex-col gap-8 flex-1'>
                    {dict.steps.slice(3).map((step, idx) => <Step key={idx} title={step.title} desc={step.desc} def={false} number={idx + 3}/>)}
                </div>
                <Image quality={100} src={coop2} width={600} height={400} alt={dict.alts[1]} className='max-xl:h-auto max-xl:object-cover object-right max-xl:w-[400px] max-lg:w-[300px] max-md:w-full max-md:h-[250px]'/>
            </div>

            <p className='text-center w-[80%] mx-auto animation-bottom transition-all duration-1000 ease-in-out max-2xl:text-[15px] max-sm:text-[14px] mt-12 max-sm:w-[90%]'>{dict.ending}</p>
        </article>

        <div className='absolute right-[-20%] top-[50%] translate-y-[-50%] rounded-full bg-[#e2835080] blur-[200px] w-[700px] h-[500px] z-[-1] max-xl:w-[500px] max-lg:w-[400px] max-lg:h-[400px] max-lg:top-[20%] max-md:blur-[120px]'></div>
        <div className='absolute left-[-20%] top-[50%] translate-y-[-50%] rounded-full bg-[#e2835080] blur-[200px] w-[700px] h-[500px] z-[-1] max-xl:w-[500px] max-lg:w-[400px] max-lg:h-[400px] max-lg:top-auto max-lg:bottom-[10%] max-md:blur-[120px] max-sm:left-[-70%]'></div>
    </section>
  )
}

export default CoopSteps