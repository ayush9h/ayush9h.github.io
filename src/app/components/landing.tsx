"use client"
import { useRef } from "react"
import gsap from "gsap"
import Spheres from "../elements/pit"
import { Plus, BugPlay } from "lucide-react"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export default function Landing() {
  const headingRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({paused:true})
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

    const onready = ()=> tl.play()
    containerRef.current?.addEventListener("ready", onready)
    return ()=>containerRef.current?.removeEventListener("ready", onready)

  }, [])

  return (
    <>
    <div className="mt-23">
     <h1
       ref={headingRef}
       className="text-5xl text-center font-mont">
       Debugging Code, One{" "}
      <span className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 rounded-lg font-bold group cursor-pointer hover:tracking-widest transition-all">
        BUG
        <BugPlay className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45 " />
      </span>{" "}
      at a Time.
    </h1>


      <div
        ref={containerRef}
        className="mt-7 h-[28rem] max-w-7xl border border-slate-300 mx-auto shadow bg-zinc-900 overflow-clip"
      >
        <Spheres containerRef={containerRef} />
      </div>


      <div
        ref={iconsRef}
        className="mt-2 flex justify-between items-center text-black"
      >
        <Plus className="w-5 h-5 transition-colors" />
        <Plus className="w-5 h-5 transition-colors" />


        <div>
          <span className="text-md flex justify-center text-center items-center font-mont text-black uppercase tracking-wide">Scroll to explore</span>
        </div>

        <Plus className="w-5 h-5 transition-colors" />
        <Plus className="w-5 h-5 transition-colors" />
      </div>
      </div>
    </>
  )
}
