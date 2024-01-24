import Image from 'next/image'
import React from 'react'
import couchImage from '../public/images/sofa2.png'
import couchImage2 from '../public/images/image11.png'
import productOne from '../public/images/image10.png'
import productTwo from '../public/images/image8.png'
import productThree from '../public/images/image9.png'
import productFour from '../public/images/image7.png'
import star from '../public/images/Star.png'
import avatar from '../public/images/avatar.jpg'
import './styles/about.css'

export default function about() {
  return (
    <div className='sm:mt-30 sm:space-y-[150px]'>
        {/* first section */}
        <div id="aboutPage"  className='px-10 sm:mt-[80px] sm:space-y-0 space-y-8 sm:mx-14'>
            <h1 className='py-4 hidden sm:block text-neutral-700 text-2xl font-medium'>Why choosing us</h1>
            <div className=' sm:flex text-xs sm:space-x-10 pr-3 pl-3 space-y-5 pb-5'>
                <div className='text-neutral-700 space-y-3 rounded-3 border-full shadow-light-orange'>
                    <div className=' bg-slate-200 rounded-full w-10 h-10 flex items-center justify-center'>
                        <svg className='text-light-orange' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F79489" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                    </div>
                    <h3 className='font-semibold'>professionalism </h3>
                    <p>
                        We deliver the final work with great professional way.
                    </p>
                </div>
                <div className='text-neutral-700 space-y-3'>
                    <div className=' bg-slate-200 rounded-full w-10 h-10 flex items-center justify-center'>
                        <svg className='text-light-orange' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F79489" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                        </svg>
                    </div>
                    <h3 className='font-semibold'>Smooth workflow </h3>
                    <p>
                        We provide the most easy smoth workflow of interior design.
                    </p>
                </div>
                <div className='text-neutral-700 space-y-3'>
                    <div className=' bg-slate-200 rounded-full w-10 h-10 flex items-center justify-center'>
                        <svg className='text-light-orange' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F79489" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>
                    </div>
                    <h3 className='font-semibold'>Trusted platform</h3>
                    <p>
                        People trust us since we openend the company
                    </p>
                </div>
                <div className='text-neutral-700 space-y-3'>
                    <div className=' bg-slate-200 rounded-full w-10 h-10 flex items-center justify-center'>
                        <svg className='text-light-orange' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F79489" class="w-7 h-">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                        </svg>
                    </div>
                    <h3 className='font-semibold'>Qualified employee</h3>
                    <p>
                        Our employees are the best of the field from the city
                    </p>
                </div>
            </div>
        </div>

        {/* second section */}

        <div className='space-y-5 mx-14'>
            
            <div className=' sm:flex sm:space-x-10'>
                <div  className='py-4 sm:hidden shrink-0'>
                    <Image src={couchImage} />
                </div>
                <div className='sm:space-y-5 py-7 space-y-6'>
                    <div className='text-neutral-700 sm:text-2xl text-xl font-medium'>Visualize your ideas with us</div>
                    
                    <div className='text-xs overflow-y-scroll h-full sm:h-[300px] w-full space-y-5'>
                        <p>
                            We are ready to help you build and also realize the room design that you dream of, 
                            with our experts and also the best category recommendations from us
                            
                        </p>

                        <div className='space-y-5'>
                            
                            <div>
                                <div className='flex justify-between mb-3'>
                                    <h6> Modern </h6>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F79489" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <p>
                                    Modern design is a term in the design world that refers to a house with a clean design, 
                                    simple color choices, the use of materials including metal, glass, and steel, and is usually accompanied by clean lines.
                                </p>
                            </div>
                       
                        
                            <div className='flex justify-between'>
                                <h6>Contemporary</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F79489" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>

                            </div>
                            <div className='flex justify-between'>
                            <h6>Minimals</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F79489" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <div className='flex justify-between'>
                            <h6>Industrial</h6>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F79489" class="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>

                            <div className='text-light-orange'>
                                See more category
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* palour image design */}
                <div className='sm:flex hidden'>
                    <Image src={couchImage} />
                </div>
            </div>
        </div>

        {/* third section(featured products) */}
        <div className='space-y-10 mx-14'>
            <h2 className='text-center text-2xl text-neutral-700 font-medium tracking-wide'>Featured product</h2>
            <div className='grid grid-cols-2 gap-2 w-full sm:grid sm:grid-cols-4 sm:gap-3 w-full'>
                <div className='w-full'>
                    <div className=' bg-slate-50 py-10 '>
                        <Image src={productOne} height={200} className='mx-auto' />
                    </div>
                    <div className='space-y-3'>
                        <p className='text-xs'>Product</p>
                        <p className='text-xs text-neutral-400 font-light'>category</p>
                        <div className='w-3 sm:w-10 flex space-x-1'>
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                        </div>
                        <p className='text-xs'>IDR 795.000</p>
                    </div>
                </div>
                <div className='w-full'>
                    <div className=' bg-slate-50 py-10 '> 
                        <Image src={productTwo}  height={200} className='mx-auto' /> 
                    </div>
                    <div className='space-y-3'>
                        <p className='text-xs'>Product</p>
                        <p className='text-xs text-neutral-400 font-light'>category</p>
                        <div className=' w-3 sm:w-10 flex space-x-1'>
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                        </div>
                        <p className='text-xs'>IDR 595.000</p>
                    </div>
                </div>    
                
                <div className='w-full'>
                    <div className='  bg-slate-50 py-10 '>
                        <Image src={productThree} height={200} className='mx-auto' />
                    </div>
                    <div className='space-y-3'>
                        <p className='text-xs'>Product</p>
                        <p className='text-xs text-neutral-400 font-light'>category</p>
                        <div className='w-3 sm:w-10 flex space-x-1'>
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                        </div>
                        <p className='text-xs'>IDR 2555.000</p>
                    </div>
                </div>

                <div className='w-full'>
                    <div className=' bg-slate-50 py-10 '>
                        <Image src={productFour}   height={200} className='mx-auto' />
                    </div>
                    <div className='space-y-3'>
                        <p className='text-xs'>Product</p>
                        <p className='text-xs text-neutral-400 font-light'>category</p>
                        <div className='w-3 sm:w-10 flex space-x-1'>
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                            <Image src={star} />
                        </div>
                        <p className='text-xs'>IDR 1500.000</p>
                    </div>
                </div>
            </div>
            
        </div>

        {/* about us */}
        <div className='bg-gradient-to-r from-secondary to-primary sm:h-[400px] mt-4 py-10 sm:mt-0 sm:py-7 space-y-[70px] px-14' id='about'>
            <h2 className='text-center text-neutral-700 font-medium text-2xl'>What they say about our services</h2>
            <div className='sm:grid sm:grid-cols-3 sm:gap-4 text-left space-y-10'>
                <div className='text-xs space-y-3'>
                    <h5 className='font-semibold'>Best planning service</h5>
                    <p className='leading-5'>I had fantastic experience at shady rhymes with pax planner, 
                        shady rhymes was so helpful and friendly and went above and 
                        beyond to help me configure my perfect walk in wardobe room.
                    </p>
                    <div className='flex space-x-3'>
                        <div className='rounded-full'>
                            <Image src={avatar} width={40} height={40} />
                        </div>
                        <div className='leading-5'>
                            <p>john doe</p>
                            <p>Project manager of cupalo</p>
                        </div>
                    </div>
                </div>
                <div className='text-xs space-y-3'>
                    <h5 className='font-semibold'>Flexible and reliable</h5>
                    <p className='leading-5'>
                    Terrific work from beginning to end can work any angle from minimal
                    help to complete project handling professional without a doubt!  Love!
                    </p>
                    <div className='flex space-x-3 pt-5'>
                        <div className='rounded-full'>
                            <Image src={avatar} width={40} height={40} />
                        </div>
                        <div className='leading-5'>
                            <p>woods moniq</p>
                            <p>Freelancer</p>
                        </div>
                    </div>
                </div>
                <div className='text-xs space-y-3'>
                    <h5 className='font-semibold'>solution innovative</h5>
                    <p className='leading-5'>
                    "I loved working with Darla shady rhymes for about 2 years and highly 
                    recommend anyone looking for an interior designer agency who brings 
                    creativity but designs something that fits YOU and your style.
                    </p>
                    <div className='flex space-x-3'>
                        <div className='rounded-full'>
                            <Image src={avatar} width={40} height={40} />
                        </div>
                        <div className='leading-5'>
                            <p>denis rara</p>
                            <p>Architect at BPPLU</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/* fourth section */}

    <div className='space-y-5 mx-14'>
            
            <div className='sm:flex sm:space-x-10 py-5 sm:py-0'>
                  {/* palour image design */}
                  <div>
                    <Image src={couchImage2} />
                </div>
                <div className='space-y-5'>
                    <div className='text-neutral-700 text-lg sm:text-2xl font-medium'>Make your room feel homey</div>                    
                    <div className='text-xs shrink-0 w-full sm:w-[600px] sm:text-sm leading-7 space-y-4'>
                        <p >
                            We help people not only to make the room at home better, 
                            but we help people to feel a more homey and comfortable room, 
                            you don't have to worry about the result because of these interiors 
                            are made by people who are professionals in their dields with an elegant and lucuriois 
                            style and with premium quality materials
                        </p>
                        <p>Contact us if you are interested in working with us</p>
                    </div>
                    
                    <div className='rounded-full w-full h-[4vh] sm:w-[250px] sm:h-[40px] border-light-orange-[1px] bg-light-orange flex items-center justify-between'>
                        <input className='text-xs ml-2 bg-transparent text-faded outline-none' placeholder='Insert your email address' />
                        <div className='bg-faint-orange rounded-full h-3 w-3 sm:w-6 sm:h-6 mr-2 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F79489" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>

    </div>
  )
}
