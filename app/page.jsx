import Image from 'next/image'
import React from 'react'
import About from './about'

export default function page() {
  return (
        <div id='landing-page' className='leading-2 space-y-[3vh] sm:leading-22 sm:space-y-[55px] '>
        <h1 className='text-primary font-semibold mt-[5vh] text-[5vw] sm:text-3xl tracking-wide text-center mx-auto w-[60vw] sm:w-[500px] mt-5 sm:mt-20'> Make Your Interior More Minimaistic & Modern</h1>
        <p className='text-light text-center mx-auto w-[90vw] sm:w-[380px] sm:text-[1vw] text-[4vw]'>Bringing interiors to life, understanding the person or people living in a home is far greater need in design.</p>
        {/* search bar */}
        <div className='rounded-full w-[43vw] sm:w-[250px] h-[5vh] sm:h-[40px] mx-auto border-white-[1px] bg-light-bg grid grid-cols-2 gap-4 sm:flex items-center sm:justify-between'>
            <input className='text-[1.5vh] sm:text-xs ml-2 bg-transparent text-primary outline-none' placeholder='search funiture' />
            <div className='bg-primary rounded-full w-5 h-5 sm:w-6 sm:h-6 sm:mr-2 flex ml-[12vw] items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
    </div>
    
  )
}
