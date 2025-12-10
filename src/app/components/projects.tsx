"use client"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

export default function Projects() {
 
  const projects = [
    { img: "/la.png", tech: "ReactJs, AutoGen, Redis, Celery ",  title: "LinkedIn Post Automator", link:"https://github.com/ayush9h/linkedin-post-automater" },
    { img: "/stable.svg", tech: "Python, StableDiffusion, SAM, Streamlit UI",  title: "Stable SAM", link:"https://github.com/sankadash/StableSAM" },
    { img: "/legal.svg", tech: "Python, NLTK, LLM, Data Visualization, Streamlit UI",  title: "Legal Digest", link:"https://github.com/ayush9h/LegalDigest" }
  ]

  return (
    <>
    
    <div className="grid grid-cols-12 mx-auto" id="projects">
      <div className="col-span-2 border border-slate-100"></div>

      <div className="col-span-8 border-t border-b border-slate-100 bg-white">
        <h1 className="text-3xl text-zinc-950 font-medium font-mont p-4">
          Projects
        </h1>
      </div>
      <div className="col-span-2 border border-slate-100"></div>
    </div>


    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50"></div>

      <div className="col-span-8 border-t  border-slate-200/50 bg-white">

        <div className="border-r border-slate-200/50">
            {projects.map((item,i) =>(

              <div key={i} className="space-y-2 p-2 md:p-8 border-b border-slate-200">
                <div
                  className="overflow-hidden rounded-xl border border-slate-200 shadow-sm"
                >
                  <Image alt="project" src={item.img} title={item.title} width={500} height={100} className="w-full h-[22rem] object-cover" />
                </div>
                <p className="font-mont text-lg text-gray-500">{item.tech}</p>
                <div
                  className="flex items-center gap-2 cursor-pointer hover:underline"
                >
                  <ArrowRight className="arrow w-5 h-5 text-black" />
                  <a target="_blank" href={item.link} className="link-text font-mont text-xl font-semibold">
                    {item.title}
                  </a>
                </div>
                
              </div>        
            ))}
            <div className="border-b border-slate-200 flex justify-center items-center text-center">
              <a
                href="https://github.com/ayush9h"
                target="_blank"
                className="mt-2 mb-2 mx-auto w-[10rem] p-2 rounded-full flex justify-center items-center text-center font-mont 
                           bg-gradient-to-b from-black via-zinc-800 to-gray-700 
                           hover:from-gray-800 hover:via-black hover:to-zinc-900
                           shadow-md hover:shadow-xl transition-all duration-300
                           text-sm text-slate-200 uppercase"
              >
                see all projects
              </a>
            </div>

         </div>
       
       </div>
      <div className="col-span-2 border border-slate-200/50"></div>
    </div>
    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50 bg-[image:var(--bg-background)]"></div>

      <div className="h-10 col-span-8  border-t border-b border-slate-200/50 bg-[image:var(--bg-background)]">
      </div>

      <div className="col-span-2 border border-slate-200/50 bg-[image:var(--bg-background)]"></div>
    </div>

    </>
  )
}
