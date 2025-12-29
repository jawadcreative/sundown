import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const Dets = () => {
  useGSAP(()=>{
    gsap.to('.detsGoyee', {
      skewX: 10,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 2,
      top: '30%',
    })
  })
  return (
    <section className='sm:h-screen h-[64vh] w-full relative'>
      <div className="absolute z-10 detsGoyee left-[26%] top-[35%] h-[40vw] w-[40vw] bg-[#FE390E] rounded-full blur-3xl"></div>
      <div className="absolute z-20 px-[6vw] h-full w-full flex sm:flex-row flex-col gap-y-7">
        <div className="sm:h-full flex items-center sm:w-[65%] w-full">
          <h1 className='text-[4vw] font-gilroy leading-none'>We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.</h1>
        </div>
        <div className="flex flex-col sm:w-[35%] justify-end items-end pb-16 gap-y-4">
          <img className='h-[30vh] sm:w-[70%] w-full rounded-xl object-cover object-center' src="/img/dets.webp" alt="dets" />
          <p className='font-regular sm:w-[70%] mt-[2vw] font-extrabold leading-none'>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
        </div>
      </div>
    </section>
  )
}

export default Dets