"use client"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)
export default function Navbar(){

    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null)

    useGSAP(()=>{
        gsap.from(navRef.current,{
            y:-20,
            opacity:0,
            duration: 1,
            ease: "power3.out"
        })


        if(linksRef.current){
            gsap.fromTo(linksRef.current.children,{
                x:40,
                opacity:0,
                autoAlpha:0
            },{x:0, autoAlpha:1, opacity:1, duration:0.6, ease:"power2.out",stagger:0.2, delay:0.5})
        }
    },[])

    return(
    <>
      <nav ref={navRef} className="w-full border-b border-b-border-muted p-2 flex justify-around items-center content-center">
        
        <div className="text-md font-bebas font-bold">
            <h1>AYUAR</h1>
        </div>

        <div ref={linksRef} className="font-mont">
             <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="text-xs p-2 cursor-pointer mr-6 uppercase">About</button>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="text-xs p-2 cursor-pointer mr-6 uppercase">Projects</button>
            <button onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })} className="text-xs p-2 cursor-pointer mr-6 uppercase">Connect</button>

        </div>

      </nav>
        
    </>
    )
    
}