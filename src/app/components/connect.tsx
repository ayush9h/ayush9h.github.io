"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import TargetCursor from '../elements/magnet'
import { ArrowRight } from "lucide-react"

export default function Connect() {
  const linkRefs = useRef([])

  useEffect(() => {
    linkRefs.current.forEach((el) => {
      if (!el) return
      const arrow = el.querySelector(".arrow")
      gsap.set(arrow, { x: -10, autoAlpha: 0 })
      el.addEventListener("mouseenter", () => {
        gsap.to(arrow, { x: 0, autoAlpha: 1, duration: 0.3, ease: "power3.out" })
      })
      el.addEventListener("mouseleave", () => {
        gsap.to(arrow, { x: -10, autoAlpha: 0, duration: 0.3, ease: "power3.in" })
      })
    })
  }, [])

  const links = [
    { name: "Github", url: "https://github.com/ayush9h" },
    { name: "Linkedin", url: "hhttps://www.linkedin.com/in/ayush-kumar-88b883239/" },
    { name: "LeetCode", url: "https://leetcode.com/u/ayukr_2002/" }
  ]

  return (
    <div
  id="connect"
  className="mt-30 bg-black rounded-tl-4xl rounded-tr-4xl min-h-screen flex flex-col items-center justify-center"
>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <h1 className="text-white text-9xl font-bebas text-center mb-12">
        Let's Connect
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl h-20 items-center">
        {links.map((link, i) => (
          <a
            key={i}
            ref={(el) => (linkRefs.current[i] = el)}
            href={link.url}
            className="flex items-center justify-center h-full cursor-target hover:bg-white hover:text-black transition-all text-white font-mont space-x-2 rounded-md px-4"
          >
            <span>{link.name}</span>
            <ArrowRight className="arrow w-5 h-5 text-black" />
          </a>
        ))}
      </div>
    </div>
  )
}
