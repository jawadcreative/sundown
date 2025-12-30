import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Footer = () => {
    useGSAP(()=>{
        gsap.fromTo('.bGoyee',{rotate: 45},{rotate: -45, duration: 10, ease: "none", repeat: -1, yoyo: true})
    })
    return (
        <section className='fixed bottom-0 left-0 h-screen w-full -z-20 pt-14 pointer-events-auto overflow-hidden'>
            <div className="absolute h-screen w-full">
                <div className="bGoyee h-[60vh] w-[30%] bg-[#FE390E] absolute bottom-0 left-1/2 -translate-1/2 origin-bottom-right rounded-full blur-3xl"></div>
            </div>
            <div className="h-full w-full flex flex-col justify-around absolute z-20">
                <div className="w-full flex sm:flex-row flex-col sm:justify-between sm:items-center items-start px-[5vw] pointer-events-auto">
                    <div className="flex flex-col">
                        {['Work', 'Studio', 'COntact'].map((item, index) => (
                            <h1 key={index} className="sm:text-[2vw] text-2xl leading-none font-gilroy uppercase">{item}</h1>
                        ))}
                    </div>
                    <div className="sm:w-[30%] w-full">
                        <p className='font-regular text-[20px] font-extrabold'>Get industry insights and creative inspiration straight to your inbox.</p>
                        <input className='border-b outline-none mt-4 w-full' type="email" name="email" id="email" placeholder='Email Address' />
                    </div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <h1 className="text-[23vw] font-gilroy leading-none">Sundown</h1>
                    <div className="flex w-full justify-between border-t border-gray-300 px-[2vw]">
                        {['Copyright © 2024 Sundown Studio', 'Brooklyn, NY', 'Instagram', 'Linkedin'].map((item, index) => (
                            <p key={index} className='font-regular text-[14px] font-extrabold'>{item}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer