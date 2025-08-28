"use client"
import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import TargetCursor from '../elements/magnet'
import { ArrowRight, ArrowUp } from "lucide-react"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Connect() {
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    linkRefs.current.forEach((el, i) => {
      if (!el) return
      const arrow = el.querySelector(".arrow")
      gsap.set(arrow, { x: -10, autoAlpha: 0 })
      el.addEventListener("mouseenter", () => {
        gsap.to(arrow, { x: 0, autoAlpha: 1, duration: 0.1, ease: "power3.out" })
      })
      el.addEventListener("mouseleave", () => {
        gsap.to(arrow, { x: -10, autoAlpha: 0, duration: 0.1, ease: "power3.in" })
      })
      
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const links = [
    { name: "Github", url: "https://github.com/ayush9h" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/ayush-kumar-88b883239/" },
    { name: "LeetCode", url: "https://leetcode.com/u/ayukr_2002/" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      id="connect"
      ref={sectionRef}
      className="mt-30 relative bg-zinc-900 min-h-screen flex flex-col items-center justify-center space-y-12"
    >
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <div
        onClick={scrollToTop}
        className="flex flex-col items-center cursor-pointer group"
      >
        <div className="w-12 h-12 flex items-center justify-center border-2 border-white rounded-xl group-hover:bg-white transition-all duration-300">
          <ArrowUp className="w-6 h-6 text-white group-hover:text-black transition-all duration-300" />
        </div>
        <span className="mt-2 text-sm text-white font-mont uppercase group-hover:text-gray-300 transition-all">
          Back to top
        </span>
      </div>

      <h1
        className="text-[5rem] md:text-[15rem] font-bebas text-center 
                   bg-gradient-to-t from-white to-white/30 bg-clip-text text-transparent leading-none"
      >
        Let&apos;s Connect
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl h-20 items-center">
        {links.map((link, i) => (
          <a
            key={i}
            ref={(el) => { linkRefs.current[i] = el }}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-full cursor-target 
                       hover:bg-white hover:text-black 
                       transition-all duration-300 
                       text-zinc-500 font-mont space-x-2 rounded-md px-4"
          >
            <span className="font-mont uppercase font-bold">{link.name}</span>
            <ArrowRight className="arrow w-5 h-5 text-black" />
          </a>
        ))}
      </div>
    </div>
  )
}
