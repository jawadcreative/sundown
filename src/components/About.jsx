import React from 'react'

const About = () => {
  return (
    <section className='sm:h-screen h-[50vh] w-full relative'>
        <div className="absolute z-20 p-[2vw] h-full w-full">
            <video autoPlay muted loop className='rounded-3xl h-full w-full object-center object-cover' src="/videos/video.mp4"></video>
        </div>
    </section>
  )
}

export default About