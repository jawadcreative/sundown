import { useState } from 'react'

const Sundown = () => {
  const data = [
    {
      title: 'Design',
      para:
        'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.',
      img: 'https://sundown-ivory.vercel.app/page4-1.webp',
    },
    {
      title: 'Project',
      para:
        'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production.',
      img: 'https://sundown-ivory.vercel.app/page4-2.webp',
    },
    {
      title: 'Execution',
      para:
        'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion.',
      img: 'https://sundown-ivory.vercel.app/page4-3.webp',
    },
  ]

  // Track active item
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="h-screen w-full p-4">
      <div className="h-full w-full rounded-4xl flex sm:flex-row flex-col overflow-hidden">
        <div className="sm:h-full h-[50vh] sm:w-1/2 w-full flex justify-center sm:pt-48 bg-gray-200 sm:p-0 p-4 dark:bg-gray-900">
          <div className="sm:h-54 h-20 w-0.75 relative bg-gray-500">
            <div style={{ top: `${activeIndex * 33.33}%` }} className="absolute left-0 bg-[#e91d1d] sm:h-18 h-[26.5px] w-full transition-all duration-500"></div>
          </div>
          <div className="max-w-xl">
            {data.map((item, i) => (
              <h1
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`sm:text-7xl text-3xl font-gilroy leading-none uppercase cursor-pointer w-fit ml-4 transition-all duration-500
                  ${activeIndex === i ? 'ml-10' : 'text-gray-400'}
                `}
              >
                {item.title}
              </h1>
            ))}
            <div className="h-20">
              <p className="mt-6 text-sm font-regular font-extrabold sm:tracking-widest leading-none text-black dark:text-white">
                {data[activeIndex].para}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="sm:h-full h-[50vh] sm:w-1/2 w-full flex items-center justify-center">
          <img
            src={data[activeIndex].img}
            alt={data[activeIndex].title}
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}

export default Sundown
