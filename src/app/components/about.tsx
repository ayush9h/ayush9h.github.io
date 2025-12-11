"use client"
import Image from "next/image"
import { SectionDivider, SectionHeader, SectionWrapper } from "./compstruct"

export default function About() {

  return (
    <>
    <SectionWrapper>
    <SectionHeader title="About" id="about"></SectionHeader>
    </SectionWrapper>


    <SectionWrapper>
        <p className="text-md p-4 text-black font-mont">
          I&apos;m Ayush Kumar, a Computer Science Engineer with an interest in development, and creating solutions that balance innovation with simplicity. Exploring how technology can transform ideas into impactful products. My goal is to build solutions to complex scenarios while continuously learning and experiementing.
        </p>
    </SectionWrapper>

    <SectionDivider/>

  
    <SectionWrapper>
      <SectionHeader title="What I do" id="What I do"/>
    </SectionWrapper>

    <SectionWrapper>
       <div className="grid grid-cols-2">
        <div className="border-r border-slate-200/50 p-4"><h1 className="text-md font-mont">01. Backend Development</h1></div>
        <div className="p-4"><h1 className="text-md font-mont">02. Frontend Development</h1></div>
       </div>
    </SectionWrapper>


    <SectionWrapper>
       <div className="grid grid-cols-2">
        <div className="border-r border-slate-200/50 p-4"><h1 className="text-md font-mont">03. Generative AI</h1></div>
        <div className="p-4"><h1 className="text-md font-mont">04. 3D</h1></div>
       </div>
    </SectionWrapper>

    <SectionDivider/>
    

    <SectionWrapper>
      <SectionHeader title="Accolades" id="accolades"></SectionHeader>
    </SectionWrapper>


    <SectionWrapper>
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
  
  </SectionWrapper>

    <SectionDivider/>
    
    </>

  )
}
