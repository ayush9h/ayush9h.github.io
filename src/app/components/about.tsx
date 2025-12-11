"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useGSAP } from "@gsap/react"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger, useGSAP)
export default function About() {

  return (
    

    <>
     <div className="grid grid-cols-12 mx-auto" id="about">
      <div className="col-span-2 border border-slate-200/50"></div>

      <div className="col-span-8 border-t border-b border-slate-200/50 bg-white">
        <h1 className="text-3xl text-zinc-950 font-medium font-mont p-4">
          About
        </h1>
      </div>

      <div className="col-span-2 border border-slate-200/50"></div>
    </div>

    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50"></div>

      <div className="col-span-8 border-t border-b border-slate-200/50 bg-white">
        <p className="text-md p-4 text-black font-mont">
          I&apos;m Ayush Kumar, a Computer Science Engineer with an interest in development, and creating solutions that balance innovation with simplicity. Exploring how technology can transform ideas into impactful products. My goal is to build solutions to complex scenarios while continuously learning and experiementing.
        </p>
      </div>

      <div className="col-span-2 border border-slate-200/50"></div>
    </div>

    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50 bg-[image:var(--bg-background)]"></div>

      <div className="h-10 col-span-8  border-t border-b border-slate-200/50 bg-[image:var(--bg-background)]">
      </div>

      <div className="col-span-2 border border-slate-200/50 bg-[image:var(--bg-background)]"></div>
    </div>

    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50"></div>

      <div className="col-span-8 border-t border-b border-slate-200/50 bg-white">
        <h1 className="text-3xl text-zinc-950 font-medium font-mont p-4">
          What I do
        </h1>
      </div>

      <div className="col-span-2 border border-slate-200/50"></div>
    </div>


    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50"></div>

      <div className="col-span-8 border-t border-b border-slate-200/50 bg-white">
       <div className="grid grid-cols-2">
        <div className="border-r border-slate-200/50 p-4"><h1 className="text-md font-mont">01. Backend Development</h1></div>
        <div className="p-4"><h1 className="text-md font-mont">02. Frontend Development</h1></div>
       </div>
      </div>
      <div className="col-span-2 border border-slate-200/50"></div>
    </div>


    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50"></div>

      <div className="col-span-8 border-t border-b border-slate-200/50 bg-white">
       <div className="grid grid-cols-2">
        <div className="border-r border-slate-200/50 p-4"><h1 className="text-md font-mont">03. Generative AI</h1></div>
        <div className="p-4"><h1 className="text-md font-mont">04. 3D</h1></div>
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


    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50"></div>

      <div className="col-span-8 border-t border-b border-slate-200/50 bg-white">
        <h1 className="text-3xl text-zinc-950 font-medium font-mont p-4">
          Accolades
        </h1>
      </div>

      <div className="col-span-2 border border-slate-200/50"></div>
    </div>


    <div className="grid grid-cols-12 mx-auto" id="accolades">
  <div className="col-span-2 border border-slate-200/50"></div>

  <div className="col-span-8 border-t border-b border-slate-200/50 bg-white">


    <div className="grid grid-cols-2 items-center">
      <h1 className="text-md p-4 font-mont">MLH&apos;23 Hackhound Winner in AI/ML Category</h1>
            
        <Image
        alt="MLH Image"
        src="/mlh.png"
        width={90}
        height={90}
        className="mx-auto object-contain "
      />


    </div>

    <div className="grid grid-cols-2 items-center">
      <h1 className="text-md p-4 font-mont">
        Selected as Application Engineer Following a Two-Week Hackathon
      </h1>

      <Image
        alt="centific Image"
        src="/centific.jpg"
        width={110}
        height={110}
        className="mx-auto object-contain"
      />
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
