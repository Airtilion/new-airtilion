import Image from 'next/image'
import lionImg from '@assets/images/lion-cta.webp'
import IntersectionListener from '@components/IntersectionListener'
import CustomContactToggle from '@components/CustomContactToggle'
const CallToAction = ({ dict }) => {
  return (
    <section id="cta-section" className='w-full relative flex flex-col justify-center items-center gap-8 min-h-[350px] overflow-hidden max-2xl:gap-6 element-hidden-opacity transition-all duration-1000 ease-in-out'>
      <IntersectionListener selector="#cta-section" visibleClass="element-visible-opacity" hiddenClass="element-hidden-opacity" threshold="0.1" rootMargin='0px 0px -50px 0px' />
      <h2 className='text-[40px] max-2xl:text-[30px] max-lg:text-[25px] max-sm:text-[20px] heading-gradient-gray'>{dict.title}</h2>
      <p className='max-w-[1240px] text-[16px] max-2xl:text-[15px] max-sm:text-[14px] text-center max-2xl:max-w-[960px] max-xl:max-w-[90%]'>{dict.content}</p>
      <CustomContactToggle text={dict.button} classes="h-[50px] px-16 primary-gradient rounded-full max-2xl:mt-4 max-lg:text-[14px] max-lg:h-[45px] max-lg:px-12"/>
      <Image src={lionImg} width={1920} height={350} alt={dict.alt} quality={100} className='object-cover brightness-50 object-[0px_-280px] absolute z-[-1] h-full max-2xl:object-[0px_-200px] max-xl:object-[0px_-100px] max-md:object-center max-md:h-full' />
    </section>
  )
}
export default CallToAction
