"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Spheres from "../elements/pit"

export default function Landing() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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
  }, [])

  return (
    <>
      <h1 ref={headingRef} className="mt-14 text-6xl uppercase text-center font-bebas font-bold">
        Passionate Developer
      </h1>
      <div
        ref={containerRef}
        className="mt-10 h-[27rem] max-w-7xl rounded-xl border border-slate-300 mx-auto shadow bg-black overflow-clip"
      >
        <Spheres containerRef={containerRef}
        />
      </div>
    </>
  )
}
