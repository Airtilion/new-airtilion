import React from 'react'

const CustomCheckbox = ({checkboxRef, text, id}) => {
    return (
        <div className={`flex gap-3 items-center max-lg:w-full max-lg:mb-[14px] w-full pl-2`}>
            <input ref={checkboxRef} type="checkbox" id={id} required className='peer opacity-0 absolute h-0 w-0' />
            <label htmlFor={id} className="w-5 h-5 border-1 border-[#E28350] rounded-[2px] flex items-center justify-center cursor-pointer peer-checked:bg-[#E28350] peer-checked:border-[#E28350] transition-all duration-200">
                <span className="hidden peer-checked:block text-white">✓</span>
            </label>

            <p className='text-[14px] !text-white leading-[14px] max-xs:!text-[9px] custom-link w-fit max-sm:text-[12px]' dangerouslySetInnerHTML={{__html: text}}></p>
        </div>
    )
}

export default CustomCheckbox