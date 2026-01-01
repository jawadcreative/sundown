import { useGSAP } from '@gsap/react'
import { About, Design, Dets, Footer, FooterCover, Goyee, Hero, Loader, Projects, Scroller } from './components'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

const App = () => {
  useGSAP(() => {
    let tl = gsap.timeline()
    tl.from('.box', {
      width: '43vw',
      repeat: -1,
      // borderRadius: '50%',
      yoyo: true,
      duration: 4,
      skewX: 20
    }, 'a')
    tl.to('.box1', {
      top: '20vh',
      left: '-10vh',
      duration: 3,
      yoyo: true,
      repeat: -1
    }, 'a')
  })
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate actual loading (API, images, bundles etc.)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <main className='h-full w-full relative overflow-hidden'>
      <div className="bg-[#EFEAE3] dark:bg-black">
        <Hero />
        <About />
        <Goyee />
        <Dets />
        <Projects />
        <Design />
        <Scroller />
      </div>
      <Footer />
      <FooterCover />
    </main>
  )
}

export default App