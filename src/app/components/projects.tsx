"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Sparkle } from "lucide-react"

export default function Projects() {
  const marqueeRef = useRef(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return



    gsap.to(marquee, {
      x: -5000,
      duration: 20, 
      ease: "linear",
      repeat: -1
    })
  }, [])

  return (
    <div className="mt-24 max-w-7xl mx-auto overflow-hidden">
      <div ref={marqueeRef} className="flex w-max">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex whitespace-nowrap items-center">
            {Array(6).fill(0).map((_, j) => (
              <div key={j} className="flex items-center mr-4">
                <h1 className="font-bebas text-8xl">ABOUT ME</h1>
                <Sparkle className="w-12 h-12 ml-2" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <p className="mt-16 font-mont text-3xl">
        I'm Ayush Kumar, a Computer Science Engineer passionate about AI, full-stack development, and solving problems with elegant solutions.
      </p>


      <h1 className="mt-10 font-mont text-md uppercase">
        What i do
      </h1>
      <div className="gap-6 mt-10">
  <div className="group cursor-pointer p-8 hover:bg-black transition-colors duration-300 border-b border-text-muted">
    <h1 className="text-4xl font-mont font-bold transition-colors duration-300 group-hover:text-white uppercase">
      <span>Web</span> <span>Development</span>
    </h1>
  </div>

  <div className="group cursor-pointer p-8  hover:bg-black transition-colors duration-300 border-b border-text-muted">
    <h1 className="text-4xl font-mont font-bold transition-colors duration-300 group-hover:text-white uppercase">
      <span>Generative</span> <span>AI</span>
    </h1>
  </div>

  <div className="group cursor-pointer p-8 hover:bg-black transition-colors duration-300 border-b border-text-muted">
    <h1 className="text-4xl font-mont font-bold transition-colors duration-300 group-hover:text-white uppercase">
      3D
    </h1>
  </div>
</div>

    </div>
  )
}
