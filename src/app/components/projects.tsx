import { ArrowRightIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import { SectionDivider, SectionHeader, SectionWrapper } from "./compstruct"
export default function Projects() {
 
  const projects = [
    { img: '/image/la.png', tech: "ReactJs, AutoGen, Redis, Celery ",  title: "LinkedIn Post Automator", link:"https://github.com/ayush9h/linkedin-post-automater" },
    { img: "/image/stable.svg", tech: "Python, StableDiffusion, SAM, Streamlit UI",  title: "Stable SAM", link:"https://github.com/sankadash/StableSAM" },
    { img: "/image/legal.svg", tech: "Python, NLTK, LLM, Data Visualization, Streamlit UI",  title: "Legal Digest", link:"https://github.com/ayush9h/LegalDigest" }
  ]

  return (
    <>
    
    <SectionWrapper>
      <SectionHeader title="Projects" id="projects"></SectionHeader>
    </SectionWrapper>


    <SectionWrapper>

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
                  <ArrowRightIcon className="arrow w-5 h-5 text-black" />
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
       
      </SectionWrapper>
    
    <SectionDivider/>

    </>
  )
}
