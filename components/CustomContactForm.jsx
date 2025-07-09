'use client'

import React, { useState } from 'react'
import Link from 'next/link';

const CustomContactForm = ({ isContactOpen }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [checkboxValue, setCheckboxValue] = useState({
        privacy_policy: false,
        personal_data_processing: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setCheckboxValue((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !number || !text) {
            setError('Wypełnij wszystkie pola!');
            return;
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            setError('Podaj poprawny adres email!');
            setIsSubmitting(false);
            return;
        }

        if (!checkboxValue.privacy_policy || !checkboxValue.personal_data_processing) {
            setError('Musisz zaakceptować politykę prywatności i zgodę na przetwarzanie danych.');
            setIsSubmitting(false);
            return;
        }

        setIsSubmitting(true);

        try {
            const date = new Date().toISOString();

            const response = await fetch('/api/contact/', {
                method: 'POST',
                body: JSON.stringify({
                    Name: name,
                    Email: email,
                    Number: number,
                    Text: text,
                    Date: date,
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setName('');
                setEmail('');
                setNumber('');
                setText('');
                setCheckboxValue({
                    privacy_policy: false,
                    personal_data_processing: false
                });
                setError('');
            }
        } catch (error) {
            setError('Wystąpił nieoczekiwany błąd.');
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className={`w-[600px] mx-auto flex flex-col ${isContactOpen ? 'form-enter' : ''} sm:w-[100%]`}>
            {error && <span className='text-red-500 font-light'>{error}</span>}
            <form onSubmit={handleSubmit} className='mt-[16px] flex flex-col gap-[20px] lg:gap-[15px] contactForm'>
                <input name="Name" value={name} onChange={(e) => setName(e.target.value)} type="text" className='animate-field xxl:text-[20px] bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px] duration-500 focus:border-b-[#E2B350] sm:text-[15px]' placeholder='Imię i Nazwisko' />
                <input name="Email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='animate-field xxl:text-[20px] bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px] duration-500 focus:border-b-[#E2B350] sm:text-[15px]' placeholder='Adres e-mail' />
                <input name="Number" value={number} onChange={(e) => setNumber(e.target.value)} type="text" className='animate-field xxl:text-[20px] bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px] duration-500 focus:border-b-[#E2B350] sm:text-[15px]' placeholder='Numer telefonu' />
                <textarea name="Text" value={text} onChange={(e) => setText(e.target.value)} className='animate-field xxl:text-[20px] bg-transparent outline-none border-b-[1px] border-b-[#FFF] py-[10px] resize-none h-[150px] duration-500 focus:border-b-[#E2B350] sm:text-[15px]' placeholder='Wiadomość' />

                <div className='animate-field w-full flex gap-[5px] mt-[15px] sm:items-center sm:flex-col sm:text-[15px]'>
                    <input type="checkbox" id="privacy_policy" checked={checkboxValue.privacy_policy} onChange={handleCheckboxChange} className='hidden peer' />
                    <label htmlFor="privacy_policy" className='flex items-center cursor-pointer'>
                        <span className='quadBefore flex items-center font-light'>Akceptuję</span>
                    </label>
                    <Link href="/assets/files/polityka_prywatnosci_Airtilion.pdf" aria-label="Przejdź do Polityki prywatności" target="_blank" rel="noopener noreferrer" className="text-[#E2B350] text-center">politykę prywatności</Link>
                </div>

                <div className='animate-field w-full flex gap-[5px] sm:items-center sm:flex-col sm:text-[15px]'>
                    <input type="checkbox" id="personal_data_processing" checked={checkboxValue.personal_data_processing} onChange={handleCheckboxChange} className='hidden peer' />
                    <label htmlFor="personal_data_processing" className='flex items-center cursor-pointer'>
                        <span className='quadBefore flex items-center font-light'>Wyrażam zgodę na</span>
                    </label>
                    <Link href="/" aria-label="Przejdź do ochrony danych osobowych" target="_blank" rel="noopener noreferrer" className="text-[#E2B350] sm:text-center">przetwarzanie danych osobowych</Link>
                </div>

                <div className='mt-[12px] animate-field flex justify-end sm:justify-center'>
                    <button type="submit" disabled={isSubmitting} className='text-[16px] text-black tracking-[1px] font-medium z-10 bg-[#E2B350] shadow-[3px_3px_10px_0px_rgba(245,203,134,0.25)] px-[50px] py-[12.5px] rounded-[10px] duration-500 hover:bg-[#EFD8A7] sm:text-[15px]'>{isSubmitting ? 'Przesyłanie...' : `Wyślij`}</button>
                </div>
            </form>
        </div>
    )
}

export default CustomContactForm