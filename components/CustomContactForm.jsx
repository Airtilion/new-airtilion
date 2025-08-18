'use client'

import React, { useRef, useState } from 'react'
import CustomCheckbox from './home/Contact/components/CustomCheckbox';
import CustomSelect from './home/CustomSelect';

const CustomContactForm = ({ isContactOpen, setIsContactOpen, dict, lang }) => {
    const chRef = useRef();
    const ch2Ref = useRef();
    const [currentError, setCurrentError] = useState(0)
    const [success, setSuccess] = useState(false)
    const [data, setData] = useState({ name: "", email: "", phone: "", contact_from: "10:00", contact_to: "16:00", type: "landing", message: "", additional: "" })

    const changeData = (e, type) => {
        const value = type === 'type' ? e : e.target.value
        setData({ ...data, [type]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSuccess(false)
        const { name, email, phone, message, contact_from, contact_to, type } = data

        if (data.additional.trim()) return setCurrentError(9)
        if (!name.trim()) return setCurrentError(1)
        if (!email.trim()) return setCurrentError(3)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setCurrentError(2)
        if (!phone.trim()) return setCurrentError(4)
        if (!/^(?:\+48\s?)?(?:\d{3}\s?\d{3}\s?\d{3})$/.test(phone)) return setCurrentError(5)
        if (!message.trim()) return setCurrentError(6)
        if (!chRef.current.checked) return setCurrentError(7)
        if (!ch2Ref.current.checked) return setCurrentError(8)

        try {
            const res = await fetch('/api/contact/setPricing', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, phone, contactHours: `${contact_from}-${contact_to}`, type, message, privacyConsent: chRef.current.checked, marketingConsent: ch2Ref.current.checked })
            })

            const result = await res.json()
            if (!res.ok) throw new Error(result.error || 'Server error')
            
            setCurrentError(0)
            setData({ name: "", email: "", phone: "", contact_from: "10:00", contact_to: "16:00", type: "landing", message: "", additional: "" })
            setSuccess(true)
            setTimeout(() => {setSuccess(false); setIsContactOpen(false)}, 3000)
        } catch (err) {
            console.error(err)
            setCurrentError(10)
        }
    }


    return (
        <form className='flex flex-col gap-6 mt-3 relative max-sm:mt-6 translate-y-animation' onSubmit={handleSubmit} noValidate>

            {currentError !== 0 && (
                <p className='absolute right-0 top-[-20px] !text-red-400 text-[12px] max-sm:top-[-30px]'>
                    {dict?.errors[currentError]}
                </p>
            )}
            {success && (
                <p className='absolute right-0 top-[-20px] !text-green-400 text-[12px]'>
                    {dict?.success}
                </p>
            )}

            <div className="relative w-full">
                <input type="text" id="name" name="name" className="w-full h-[50px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] outline-none px-4 max-sm:text-[14px]" value={data.name} onChange={e => changeData(e, 'name')} required />
                <label htmlFor="name" className={`absolute left-4 transition-all duration-300 pointer-events-none max-sm:text-[14px] ${data.name ? 'top-[-18px] text-[12px] px-2 text-[#444]' : 'top-[15px] text-[16px] text-[#696969]'}`}>{dict?.fields[0]}</label>
            </div>

            <div className="relative w-full">
                <input type="email" id="email" name="email" className="w-full h-[50px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] outline-none px-4 max-sm:text-[14px]" value={data.email} onChange={e => changeData(e, 'email')} required />
                <label htmlFor="email" className={`absolute left-4 transition-all duration-300 pointer-events-none max-sm:text-[14px] ${data.email ? 'top-[-18px] text-[12px] px-2 text-[#444]' : 'top-[15px] text-[16px] text-[#696969]'}`}>{dict?.fields[1]}</label>
            </div>

            <div className="relative w-full">
                <input type="text" id="phone" name="phone" className="w-full h-[50px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] outline-none px-4 max-sm:text-[14px]" value={data.phone} onChange={e => changeData(e, 'phone')} required />
                <label htmlFor="phone" className={`absolute left-4 transition-all duration-300 pointer-events-none max-sm:text-[14px] ${data.phone ? 'top-[-18px] text-[12px] px-2 text-[#444]' : 'top-[15px] text-[16px] text-[#696969]'}`}>{dict?.fields[2]}</label>
            </div>

            <div className="w-full flex gap-4 items-center max-sm:flex-col max-sm:items-start">
                <p className='flex-1 !text-[#8f8f8f] text-[14px]'>{dict?.fields[3]}</p>
                <div className="relative w-[160px] max-sm:w-full">
                    <input type="time" id="contact_from" name="contact_from" value={data.contact_from} onClick={e => e.target.showPicker()} onChange={e => changeData(e, 'contact_from')} required className="peer w-full h-[50px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] outline-none px-4 pl-16" />
                    <label htmlFor="contact_from" className="absolute left-4 top-[15px] text-[16px] text-[#696969] pointer-events-none max-sm:text-[14px]">Od</label>
                </div>
                <div className="relative w-[160px] max-sm:w-full">
                    <input type="time" id="contact_to" name="contact_to" value={data.contact_to} onClick={e => e.target.showPicker()} onChange={e => changeData(e, 'contact_to')} required className="peer w-full h-[50px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] outline-none px-4 pl-16" />
                    <label htmlFor="contact_to" className="absolute left-4 top-[15px] text-[16px] text-[#696969] pointer-events-none max-sm:text-[14px]">Do</label>
                </div>
            </div>

            <CustomSelect updateData={changeData} data={data.type} lang={lang} name={dict?.fields[4]} />

            <div className="relative w-full">
                <textarea id="message" name="message" className="w-full h-[190px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] resize-none px-4 py-4 outline-none max-sm:text-[14px]" value={data.message} onChange={e => changeData(e, 'message')} required />
                <label htmlFor="message" className={`absolute left-4 transition-all duration-300 pointer-events-none max-sm:text-[14px] ${data.message ? 'top-[-18px] text-[12px] px-2 text-[#444]' : 'top-[17px] text-[16px] text-[#696969]'}`}>{dict?.fields[5]}</label>
            </div>

            <input type="text" name="additional" className="hidden" value={data.additional} onChange={e => changeData(e, 'additional')} />

            <CustomCheckbox checkboxRef={chRef} id="rulebook1" text={dict?.condition[0]} />
            <CustomCheckbox checkboxRef={ch2Ref} id="rulebook2" text={dict?.condition[1]} />

            <button type="submit" className="primary-gradient h-[50px] rounded-[5px] mt-3">{dict?.button}</button>
        </form>
    )
}

export default CustomContactForm;
