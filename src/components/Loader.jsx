import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Loader = () => {
  useGSAP(() => {
    let tl = gsap.timeline()
    tl.fromTo('.heads', {
      opacity: 0,
    }, { opacity: 1, stagger: .5 }, 'a')
    tl.to('.heads', {
      opacity: 0,
      stagger: .5,
    }, 'a+=.4')

  })
  return (
    <div className='h-screen w-full flex items-center justify-center bg-black'>
      <div className="relative h-24 w-150 flex justify-center items-center">
        {['Enviroment', 'Context', 'Experiences'].map((item, i) => (
          <h1 key={i} id={`head${i}`} className='heads font-gilroy text-8xl uppercase absolute bg-linear-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent opacity-0'>{item}</h1>
        ))}
      </div>
    </div>
  )
}

export default Loader