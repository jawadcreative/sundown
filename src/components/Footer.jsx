const Footer = () => {
    return (
        <section className='fixed bottom-0 left-0 h-screen w-full -z-20 pt-14 pointer-events-auto flex flex-col justify-around'>
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
        </section>
    )
}

export default Footer