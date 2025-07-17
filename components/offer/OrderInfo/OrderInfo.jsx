import React from 'react'
import TextSlider from './components/TextSlider'
import OfferCallToAction from './components/OfferCallToAction'
import PricingIntroduction from './components/PricingIntroduction'
import IntersectionListener from '@components/IntersectionListener'

const OrderInfo = ({dict}) => {
  return (
    <section id="pricing-section" className='w-full overflow-hidden relative pricing-hidden'>
        <IntersectionListener selector="#pricing-section" visibleClass="pricing-visible" hiddenClass="pricing-hidden" threshold="0.2" rootMargin='0px 0px -100px 0px'/>
        
        <PricingIntroduction dict={dict.pricingIntro}/>
        <OfferCallToAction dict={dict.cta}/>
    </section>
  )
}

export default OrderInfo