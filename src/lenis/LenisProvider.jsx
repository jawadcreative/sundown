import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

const LenisProvider = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return children
}

export default LenisProvider
