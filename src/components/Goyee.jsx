import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Goyee = () => {
    useGSAP(() => {
        gsap.to('.goyee', {
            xPercent: -80,
            ease: 'none',
            duration: 17,
            repeat: -1,
        })
    })
    return (
        <section className='sm:h-[20vh] h-[10vh] w-full flex items-center px-[2vw]'>
            <div className="scroll w-full overflow-x-auto">
                <div className="goyee flex whitespace-nowrap min-w-fit sm:gap-x-16 gap-x-8">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex whitespace-nowrap items-center sm:gap-x-16 gap-x-8">
                            <h1 className="text-[7vw] font-gilroy">EXPERIENCES</h1>
                            <div className="h-[5vw] w-[5vw] bg-[#FE390E] rounded-full"></div>
                            <h1 className="text-[7vw] font-gilroy">CONTENTS</h1>
                            <div className="h-[5vw] w-[5vw] bg-[#FE390E] rounded-full"></div>
                            <h1 className="text-[7vw] font-gilroy">ENVIRONMENTS</h1>
                            <div className="h-[5vw] w-[5vw] bg-[#FE390E] rounded-full"></div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Goyee