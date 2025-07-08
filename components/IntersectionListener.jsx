'use client'

import { useEffect } from 'react'

export default function IntersectionListener({ selector, visibleClass, hiddenClass, rootMargin = '0px', threshold = 0.1 }) {
  useEffect(() => {
    const el = document.querySelector(selector)
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry], o) => {
        if (entry.isIntersecting) {
          el.classList.add(visibleClass)
          hiddenClass && el.classList.remove(hiddenClass)
          o.disconnect()
        }
      },
      { rootMargin, threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [selector, visibleClass, rootMargin, threshold])

  return null
}
