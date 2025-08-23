"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/all"

export default function About() {
  const marqueeRef = useRef(null)
  const aboutRef = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {

    
    if (marqueeRef.current) {
      const split = new SplitText(marqueeRef.current, { type: "chars" })
      gsap.from(split.chars, {
        duration: 1,
        y: -50,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power3.out"
      })
    }


    if (aboutRef.current) {
      const splitAbout = new SplitText(aboutRef.current, { type: "words" })
      gsap.from(splitAbout.words, {
        duration: 1,
        x: -50,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.5
      })
    }


    itemsRef.current.forEach((item, i) => {
      if (!item) return
      const splitItem = new SplitText(item, { type: "words" })
      gsap.from(splitItem.words, {
        duration: 1,
        y: 50,
        autoAlpha: 0,
        stagger: 0.05,
        delay: 1 + i * 0.3, 
        ease: "power3.out"
      })
    })
  }, [])

  return (
    <div id="about" className="mt-30">


      <h1 ref={marqueeRef} className="text-9xl font-bebas">
        About
      </h1>


      <p ref={aboutRef} className="mt-10 font-mont text-3xl">
        I'm Ayush Kumar, a Computer Science Engineer passionate about AI,
        full-stack development, and solving problems with elegant solutions.
      </p>


      <h1 className="mt-10 font-mont text-md uppercase">What I do</h1>

      <div className="gap-6 mt-10">
        {["Web Development", "Generative AI", "3D"].map((text, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="group cursor-pointer p-8 hover:bg-black transition-colors duration-300 border-b border-text-muted"
          >
            <h1 className="text-4xl font-mont font-bold transition-colors duration-300 group-hover:text-white uppercase">
              {text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}
