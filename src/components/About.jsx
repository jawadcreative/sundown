import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const videoRef = useRef(null)
  useGSAP(()=>{
    gsap.fromTo(videoRef.current, 
    {scale: .2}, 
    {scale: 1, opacity: 1, duration: 1, ease: 'power2.out',
      scrollTrigger: {
        trigger: '.video-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true
      }
    })
  })
  return (
    <section className='video-container sm:h-screen h-[50vh] w-full relative'>
        <div ref={videoRef} className="absolute z-20 p-[2vw] h-full w-full">
            <video autoPlay muted loop className='rounded-3xl h-full w-full object-center object-cover' src="/videos/video.mp4"></video>
        </div>
    </section>
  )
}

export default About