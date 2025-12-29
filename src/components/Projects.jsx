import gsap from "gsap";
import { useState } from "react";
import PageTop from "./PageTop";

const Projects = () => {
  const data = [
    {title: 'Play New Kidvision', company: 'NIKE', categ: 'Enviroment', img: '/img/pro1.webp'},
    {title: 'SOHO NYC', company: "ARC'TERYX", categ: 'Enviroment', img: '/img/pro2.webp'},
    {title: 'Makers Studio HOI', company: "NIKE", categ: 'Enviroment', img: '/img/pro3.webp'},
    {title: 'SOHO 2023', company: "CONVERSE", categ: 'Enviroment', img: '/img/pro4.webp'},
    {title: 'NYFW Popup', company: "AFTERPAY", categ: 'Experiencal', img: '/img/pro5.webp'},
    {title: '50th Anniversary', company: 'NIKE', categ: 'Enviroment', img: '/img/pro6.webp'},
  ]
  const [activeIndex, setActiveIndex] = useState(0);
  const handleMouseEnter = () => {
    const boxx = document.querySelector('.boxx');
    gsap.to(boxx, {opacity: 1, duration: 0.3});
  }
  const handleMouseLeave = () => {
    const boxx = document.querySelector('.boxx');
    gsap.to(boxx, {opacity: 0, duration: 0.3});
  }
  return (
    <section className='sm:h-[110vh] h-full w-full px-[2vw]'>
      <div className="boxx fixed top-[19%] h-[65vh] w-[25vw] z-10 left-[50%] rounded-2xl overflow-hidden opacity-0">
        <img className="h-full w-full object-center object-cover" src={data[activeIndex].img} alt="" />
      </div>
      <PageTop title='Featured Projects'/>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="max-sm:hidden mt-8 flex flex-col">
        {data.map((item, i) => (
          <div onMouseEnter={()=>{setActiveIndex(i)}} key={i} className="flex relative h-[15vh] justify-between w-full border-b border-gray-400 items-center after:content-[''] after:absolute after:-top-full after:left-0 after:bg-[#FF9831] after:h-full after:w-full after:-z-10 hover:after:top-0 after:transition-all after:duration-200 overflow-hidden cursor-pointer">
            <h1 className="font-gilroy text-[3vw]">{item.title}</h1>
            <div className="flex flex-col items-end">
              <p className="font-gilroy font-extrabold text-xs">{item.company}</p>
              <p className="font-regular font-extrabold text-xs">{item.categ}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="">
        {data.map((item, i) => (
          <div className="flex flex-col gap-y-4 mb-8 sm:hidden mt-8" key={i}>
            <div className="h-[40vh] w-full overflow-hidden rounded-xl">
              <img className="h-full w-full object-center object-cover" src={item.img} alt="projects" />
            </div>
            <h1 className="font-gilroy text-4xl">{item.title}</h1>
            <div className="flex flex-col leading-none">
              <p className="font-gilroy">{item.company}</p>
              <p className="font-regular font-extrabold">{item.categ}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects