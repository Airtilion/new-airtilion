"use client"
import React, { useRef, useState } from 'react'
import CustomCheckbox from './CustomCheckbox'

const ContactForm = ({ text }) => {
  const chRef = useRef();
  const ch2Ref = useRef();
  const [currentError, setCurrentError] = useState(0)
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({ name: "", email: "", phone: "", message: "", additional: "" })

  const changeData = (e, type) => setData({ ...data, [type]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()

    setSuccess(false)
    const { name, email, phone, message, additional } = data


    //walidacja
    if (additional.trim()) return setCurrentError(9)
    if (!name.trim()) return setCurrentError(1)
    if (!email.trim()) return setCurrentError(3)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setCurrentError(2)
    if (!phone.trim()) return setCurrentError(4)
    if (!/^(?:\+48\s?)?(?:\d{3}\s?\d{3}\s?\d{3})$/.test(phone)) return setCurrentError(5)
    if (!message.trim()) return setCurrentError(6)
    if (!chRef.current.checked) return setCurrentError(7)
    if (!ch2Ref.current.checked) return setCurrentError(8)

  

    //wysyłanie
    console.log({ name, email, phone, message, privacyConsent: chRef.current.checked, marketingConsent: ch2Ref.current.checked })

    try{
      const res = fetch('/api/contact/set', {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message, privacyConsent: chRef.current.checked, marketingConsent: ch2Ref.current.checked })
      })

        setCurrentError(0)
        setSuccess(true)

        setTimeout(() => setSuccess(false), 5000)

        chRef.current.checked = false;
        ch2Ref.current.checked = false
        setData({ name: "", email: "", phone: "", message: "", additional: "" })
    }
    catch(err){
      console.error(err)
      setCurrentError(10)
    }
  }


  return (
    <form className='flex flex-col gap-3 mt-3 relative max-sm:mt-6' onSubmit={handleSubmit} noValidate>

      <p className='absolute right-0 top-[-20px] !text-red-400 text-[12px] max-sm:top-[-30px]'>{currentError !== 0 && text.errors[currentError]}</p>
      <p className='absolute right-0 top-[-20px] !text-green-400 text-[12px]'>{success && text.success}</p>

      <div className="relative w-full">
        <input type="text" id="name" name="name" className="w-full h-[50px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] outline-none px-4 max-lg:text-[15px] max-sm:text-[14px] max-sm:h-[45px]" value={data.name} onChange={e => changeData(e, "name")} required />
        <label htmlFor="name" className={`absolute left-4 text-[#696969] transition-all duration-300 pointer-events-none ${data.name ? "top-[-10px] text-[12px] text-[#444] bg-[#000000] px-2" : "top-[15px] text-[16px] max-lg:text-[15px] max-sm:text-[14px]"} peer-focus:top-[-10px] peer-focus:text-[12px] peer-focus:text-[#444] `}>{text.fields[0]}</label>
      </div>

      <div className="relative w-full">
        <input type="email" id="email" name="email" className="w-full h-[50px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] outline-none px-4 max-lg:text-[15px] max-sm:text-[14px] max-sm:h-[45px]" value={data.email} onChange={e => changeData(e, "email")} required />
        <label htmlFor="email" className={`absolute left-4 text-[#696969] transition-all duration-300 pointer-events-none ${data.email ? "top-[-10px] text-[12px] text-[#444] bg-[#000000] px-2" : "top-[15px] text-[16px] max-lg:text-[15px] max-sm:text-[14px]"} peer-focus:top-[-10px] peer-focus:text-[12px] peer-focus:text-[#444] `}>{text.fields[1]}</label>
      </div>

      <div className="relative w-full"> 
        <input type="text" id="phone" name="phone" className="w-full h-[50px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] outline-none px-4 max-lg:text-[15px] max-sm:text-[14px] max-sm:h-[45px]" value={data.phone} onChange={e => changeData(e, "phone")} required />
        <label htmlFor="phone" className={`absolute left-4 text-[#696969] transition-all duration-300 pointer-events-none ${data.phone ? "top-[-10px] text-[12px] text-[#444] bg-[#000000] px-2" : "top-[15px] text-[16px] max-lg:text-[15px] max-sm:text-[14px]"} peer-focus:top-[-10px] peer-focus:text-[12px] peer-focus:text-[#444] `}>{text.fields[2]}</label>
      </div>

      <div className="relative w-full">
        <textarea id="message" name="message" className="w-full h-[190px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] resize-none px-4 py-4 outline-none max-lg:text-[15px] max-sm:text-[14px]" value={data.message} onChange={e => changeData(e, "message")} required />
        <label htmlFor="message" className={`absolute left-4 text-[#696969] transition-all duration-300 pointer-events-none ${data.message ? "top-[-10px] text-[12px] text-[#444] bg-[#000000] px-2" : "top-[17px] text-[16px] max-lg:text-[15px] max-sm:text-[14px]"} peer-focus:top-[-10px] peer-focus:text-[12px] peer-focus:text-[#444]`}>{text.fields[3]}</label>
      </div>

      <input type="text" name="additional" className="hidden" value={data.additional} onChange={e => changeData(e, "additional")} />

      <CustomCheckbox checkboxRef={chRef} id="rulebook3" text={text.condition[0]} />
      <CustomCheckbox checkboxRef={ch2Ref} id="rulebook4" text={text.condition[1]} />

      <button type="submit" className="primary-gradient h-[50px] rounded-[5px] mt-3 max-lg:text-[15px] max-sm:text-[14px] max-sm:h-[45px]">{text.button}</button>
    </form>
  )
}

export default ContactForm
