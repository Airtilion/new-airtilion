'use client'

import React from 'react'

const CustomContactToggle = ({text, classes}) => {
  return (
    <>
        <button onClick={() => window.dispatchEvent(new CustomEvent('openContact'))} className={classes}>{text}</button>
    </>
  )
}

export default CustomContactToggle