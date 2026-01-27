import React from 'react'

const Toggle = ({ label, desc, active, onClick }) => (
    <div className='flex items-center justify-between p-4 border border-[#E28350B3] rounded-xl hover:border-[#E28350] transition-colors'>
        <div className='pr-4'>
            <p className='text-sm !font-medium !text-white'>{label}</p>
            <p className='text-[14px] !text-white'>{desc}</p>
        </div>
        <button onClick={onClick} className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors cursor-pointer ${active ? 'bg-white' : 'bg-gray-400'}`}>
            <div className={`w-4 h-4 bg-black rounded-full transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`} />
        </button>
    </div>
);

export default Toggle;