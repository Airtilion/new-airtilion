import React from 'react'

const test = ['UX', "WORDPRESS", "OPTYMALIZACJA", "NEXTJS", "INDYWIDUALIZAM", "REACTJS", "INNOWACYJNOŚĆ", "HEADLESS", "WOOCOMMERCE", "PROFESJONALIZM", 'UX', "WORDPRESS", "OPTYMALIZACJA", "NEXTJS", "INDYWIDUALIZAM", "REACTJS", "INNOWACYJNOŚĆ", "HEADLESS", "WOOCOMMERCE", "PROFESJONALIZM"]
const testRemix = ["INDYWIDUALIZAM", 'UX', "WORDPRESS", "OPTYMALIZACJA", "HEADLESS", "INNOWACYJNOŚĆ", "WOOCOMMERCE", "NEXTJS", "PROFESJONALIZM", "REACTJS", "INDYWIDUALIZAM", 'UX', "WORDPRESS", "OPTYMALIZACJA", "HEADLESS", "INNOWACYJNOŚĆ", "WOOCOMMERCE", "NEXTJS", "PROFESJONALIZM", "REACTJS"]

const TextSlider = () => {
  return (
    <div className='absolute left-0 top-0 gradient-transparency w-full overflow-hidden rotate-[-2deg]'>
        <div className='flex gap-8 animate-scroll w-fit' style={{animationDuration: '150s'}}>{test.map((p, idx) => <p key={idx} className='text-[100px] !font-extrabold leading-none !text-[#E28350]'>{p}</p>)}</div>
        <div className='flex gap-8 animate-scroll-r w-fit' style={{animationDuration: '150s'}}>{test.map((p, idx) => <p key={idx} className='text-[100px] !font-extrabold leading-none !text-[#E28350]'>{p}</p>)}</div>
        <div className='flex gap-8 animate-scroll w-fit' style={{animationDuration: '150s'}}>{testRemix.map((p, idx) => <p key={idx} className='text-[100px] !font-extrabold leading-none !text-[#E28350]'>{p}</p>)}</div>
    </div>
  )
}

export default TextSlider