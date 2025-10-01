"use client"
import { useRef } from "react"
import gsap from "gsap"
import Spheres from "../elements/pit"
import { Plus, BugPlay } from "lucide-react"


export default function Landing() {
 

  return (
    <>

    
    {/* Intro */}
    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50"></div>

      <div className="h-[20rem] flex justify-center items-center text-center col-span-8 border-t border-b border-slate-200/50 bg-white bg-[image:var(--bg-hero)]">
        <h1 className="text-8xl  text-zinc-950 font-medium font-mont py-2">
          AYUAR
        </h1>
      </div>

      <div className="col-span-2 border border-slate-200/50"></div>
    </div>
    {/* Interactive Spheres */}
    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50"></div>

      <div className="h-[28rem] col-span-8 border-t border-b border-slate-200/50">
         
        <Spheres/>
   
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
