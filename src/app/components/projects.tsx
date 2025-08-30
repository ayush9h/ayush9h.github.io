"use client"
import { useRef } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export default function Projects() {
  const marqueeRef = useRef(null)
  const linkRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    if (marqueeRef.current) {
      const splitAbout = new SplitText(marqueeRef.current, { type: "chars" })
      gsap.from(splitAbout.chars, {
        duration: 1,
        x: -50,
        autoAlpha: 0,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
    }

    linkRefs.current.forEach((el) => {
      if (!el) return
      const arrow = el.querySelector(".arrow")
      const text = el.querySelector(".link-text")
      gsap.set(arrow, { x: -20, autoAlpha: 0 })
      gsap.set(text, { x: 0 })
      el.addEventListener("mouseenter", () => {
        gsap.to(arrow, { x: 0, autoAlpha: 1, duration: 0.3, ease: "power3.out" })
        gsap.to(text, { x: 10, wordSpacing: 2, duration: 0.3, ease: "power3.out" })
      })
      el.addEventListener("mouseleave", () => {
        gsap.to(arrow, { x: -20, autoAlpha: 0, duration: 0.3, ease: "power3.in" })
        gsap.to(text, { x: 0, wordSpacing: 0, duration: 0.3, ease: "power3.in" })
      })
    })

    cardRefs.current.forEach((card, i) => {
      if (!card) return
      gsap.fromTo(card,
        { 
          y: 100,
          autoAlpha: 0,
          rotateX: 15,
          rotateY: i % 2 === 0 ? -10 : 10,
          transformPerspective: 1000
        },
        {
          y: 0,
          autoAlpha: 1,
          rotateX: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const projects = [
    { img: "/pj-001.png", tech: "NextJs, Express, Tailwind, MongoDB", title: "CMS-DWM Daily Tracking System", link:"https://github.com/ayush9h/Ticket-Generator" },
    { img: "/la.png", tech: "ReactJs, AutoGen, Redis, Celery ",  title: "LinkedIn Post Automator", link:"https://github.com/ayush9h/linkedin-post-automater" },
    { img: "/stable.svg", tech: "Python, StableDiffusion, SAM, Streamlit UI",  title: "Stable SAM", link:"https://github.com/sankadash/StableSAM" },
    { img: "/legal.svg", tech: "Python, NLTK, LLM, Data Visualization, Streamlit UI",  title: "Legal Digest", link:"https://github.com/ayush9h/LegalDigest" }
  ]

  return (
    <div id="projects" className="mt-30 max-w-7xl mx-auto">
      <h1 ref={marqueeRef} className="text-9xl font-bebas mb-20">Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {projects.map((p, i) => (
          <div key={i} className="space-y-4">
            <div
              ref={(el) => { cardRefs.current[i] = el }}
              className="overflow-hidden shadow-xl rounded-2xl will-change-transform"
            >
              <Image alt="project" src={p.img} title={p.title} width={720} height={720} className="object-cover" />
            </div>
            <p className="font-mont text-lg text-gray-500">{p.tech}</p>
            <div
              ref={(el) => {(linkRefs.current[i] = el)}}
              className="flex items-center gap-2 cursor-pointer hover:underline"
            >
              <ArrowRight className="arrow w-5 h-5 text-black" />
              <a target="_blank" href={p.link} className="link-text font-mont text-xl font-semibold">
                {p.title}
              </a>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/ayush9h" target="_blank" className="mx-auto w-[12rem] p-2 rounded-full shadow-md mt-10 flex justify-center items-center text-center font-mont bg-white hover:shadow-xl transition-all text-md">SEE ALL PROJECTS</a>
    </div>
  )
}
