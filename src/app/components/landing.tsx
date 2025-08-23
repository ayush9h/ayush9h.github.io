"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Spheres from "../elements/pit"
import { Plus, ChevronDown } from "lucide-react"

export default function Landing() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    tl.from(containerRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }, "-=0.5")
    tl.from(iconsRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }, "-=0.3")
  }, [])

  return (
    <>
     <h1
       ref={headingRef}
       className="mt-10 text-5xl text-center font-mont tracking-tight ">
       Debugging Code, One <span className="italic font-bold">BUG</span> at a Time
     </h1>


      <div
        ref={containerRef}
        className="mt-10 h-[27rem] max-w-7xl rounded-xl border border-slate-300 mx-auto shadow bg-black overflow-clip"
      >
        <Spheres containerRef={containerRef} />
      </div>


      <div
        ref={iconsRef}
        className="mt-2 flex justify-around items-center text-black"
      >
        <Plus className="w-7 h-7 transition-colors" />
        <Plus className="w-7 h-7 transition-colors" />


        <div>
          <span className="text-sm flex justify-center text-center items-center font-bebas text-black uppercase font-semibold tracking-wide">Scroll to explore</span>
        </div>

        <Plus className="w-7 h-7 transition-colors" />
        <Plus className="w-7 h-7 transition-colors" />
      </div>
    </>
  )
}
