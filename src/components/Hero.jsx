import Navbar from './Navbar'

const Hero = () => {
  
  return (
    <section className='sm:h-screen h-[60vh] w-full relative'>
      <div className="box absolute z-10 top-125 -right-[10%] h-[40vw] w-[50vw] bg-[#FE390E] blur-3xl rounded-full">
        <div className="absolute -top-10 left-52 rounded-full box1 h-50 w-50 bg-[#FE390E]"></div>
      </div>
      <div className="absolute z-20 h-full w-full px-[2vw] pt-[3vw] flex flex-col justify-between">
        <Navbar />
        <div className="sm:h-[65vh] h-[40vh] w-full border-b flex sm:flex-row flex-col-reverse items-center sm:justify-between justify-center">
          <p className='font-gilroy sm:text-[2.5vw] sm:w-[40%] w-[80%] leading-none'>Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</p>
          <div className="">
            {['SPACES', 'THAT', 'INSPIRE'].map((item, i) => (
              <h1 key={i} className='text-end sm:text-[10vw] text-[60px] leading-none font-gilroy'>{item}</h1>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero