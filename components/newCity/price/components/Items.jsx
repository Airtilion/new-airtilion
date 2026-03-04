import React from 'react'
import ListItem from './ListItem';
import IntersectionListener from '@components/IntersectionListener';

const Items = ({ dict }) => {
    const midPoint = Math.ceil(dict.elements.length / 2);
    const leftColumn = dict.elements.slice(0, midPoint);
    const rightColumn = dict.elements.slice(midPoint);

    return (
        <section id='items-city' className='mt-48 relative overflow-x-clip text-paragraph items-city-hidden'>
            <IntersectionListener selector="#items-city" visibleClass="items-city-visible" hiddenClass="items-city-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className="section-style-small">
                <p className='text-[18px] text-center animation-left transition-all duration-1000 ease-in-out max-xl:text-[16px] max-sm:text-[14px]' dangerouslySetInnerHTML={{ __html: dict.introTxt }} />

                <div className='mt-8 grid grid-cols-1 gap-x-16 lg:grid-cols-2'>
                    <ul className='list-none space-y-8'>
                        {leftColumn.map((el, idx) => (
                            <ListItem key={`left-${idx}`} item={el} idx={idx} />
                        ))}
                    </ul>

                    <ul className="list-none space-y-8 max-lg:mt-8">
                        {rightColumn.map((el, idx) => (
                            <ListItem key={`right-${idx}`} item={el} idx={idx} />
                        ))}
                    </ul>
                </div>
            </div>

            <div className='absolute right-[-20%] top-[50%] translate-y-[-50%] rounded-full bg-[#e2835080] blur-[200px] w-[760px] h-[500px] z-[-1] max-xl:w-[500px] max-lg:w-[400px] max-lg:h-[400px] max-lg:top-[20%] max-md:blur-[120px] max-sm:w-[250px]'></div>
        </section>
    )
}

export default Items