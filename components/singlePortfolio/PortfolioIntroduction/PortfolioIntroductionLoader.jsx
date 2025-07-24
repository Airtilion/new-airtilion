import React from 'react'

const PortfolioIntroductionLoader = () => {
    return (
        <section className='w-[1240px] mx-auto max-2xl:w-[1180px] max-xl:w-[960px] max-sm:w-[90%]'>
            <article className='flex gap-16 mb-16 items-center'>
                <h2 className='heading-gradient-gray text-[30px] max-2xl:text-[25px] max-sm:text-[20px] w-fit'>Opis projektu</h2>
                <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] flex-1 blur-[10px] animate-pulse'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id rutrum odio. Nullam ultricies ex nec volutpat rutrum. Aliquam euismod auctor odio, vel malesuada est tincidunt nec. Sed id viverra risus, non imperdiet libero. Nunc eget urna non eros venenatis feugiat. Fusce faucibus sollicitudin viverra. Ut eget condimentum sapien, sed vulputate lectus. Vivamus faucibus libero et enim aliquet, id elementum sapien sagittis. Nunc eget sapien facilisis lorem tincidunt iaculis in in odio. Nullam cursus augue quis volutpat eleifend.
                </p>
            </article>

            <article className='w-full flex flex-wrap gap-4'>
                <div className='relative w-[400px] h-[400px] overflow-hidden bg-[#000000] flex justify-center items-center blur-[10px] animate-pulse'>
                    <div className='w-[120px] h-[80px] bg-white'></div>
                    <div className='absolute w-[500px] h-[500px] top-[-250px] left-[-250px] bg-[#e28350a0] z-[1] rounded-full blur-[80px]'></div>
                </div>

                {Array(4).fill().map((_, i) => (
                    <div key={i} className='relative w-[400px] h-[400px] overflow-hidden bg-[#000000] flex justify-center items-center blur-[10px] animate-pulse'>
                        <div className='absolute w-[500px] h-[500px] top-[-250px] left-[-250px] bg-[#e28350a0] z-[1] rounded-full blur-[80px]'></div>
                    </div>
                ))}

                <div className='relative w-[400px] h-[400px] bg-[#e28350] overflow-hidden flex flex-col justify-end items-center px-16 py-8 blur-[10px] animate-pulse'>
                    <button className='z-[2] text-[18px] absolute top-[50%] translate-y-[-50%]'>Wyświetl pełną wizualizację</button>
                    <p className='relative z-[2] text-center text-[16px] font-light'>Kliknij aby zobaczyć pełną wizuwalizację strony internetowej</p>
                    <div className='absolute w-[800px] h-[800px] top-[-370px] left-[-370px] bg-[#000000] z-[1] rounded-full blur-[80px]'></div>
                </div>
            </article>
        </section>
    )
}

export default PortfolioIntroductionLoader