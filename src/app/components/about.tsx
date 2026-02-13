import Image from "next/image"
import { SectionDivider, SectionHeader, SectionWrapper } from "./compstruct"
import { Accordion } from "@base-ui/react"
import { PlusIcon, CodeIcon } from "@radix-ui/react-icons"

export default function About() {
  return (
    <>

      <SectionWrapper>
        <SectionHeader title="About" id="about" />
      </SectionWrapper>

      <SectionWrapper>

       <ul className="list-disc p-4 pl-[35px] space-y-3 font-mont text-justify">
          <li>
            Backend engineer building <span className="font-semibold">agentic systems</span>,
            <span className="font-semibold"> RAG pipelines</span>, and
            <span className="font-semibold"> backend services</span> with a strong focus on performance, and reliability.
          </li>
          <li>
            Experienced with <span className="font-semibold">Python, FastAPI, LangGraph, LangChain, Redis,</span> and <span className="font-semibold">PostgreSQL</span>, designing
            workflow-driven architectures.
          </li>
          <li>
            Currently contributing to an <span className="font-semibold">enterprise AI assistant</span> under the Office of the CIO, enabling automation and analytics for
            <span className="font-semibold"> Finance, HR,</span> and
            <span className="font-semibold"> Legal</span> teams.
          </li>
          <li>
            Passionate about <span className="font-semibold">transforming ideas into impactful products</span> through continuous learning, experimentation, and hands-on engineering.
          </li>
        </ul>

      </SectionWrapper>

      <SectionDivider />

      <SectionWrapper>
        <SectionHeader title="Experience" id="experience" />
      </SectionWrapper>


      <SectionWrapper>
        <div className="flex items-center p-4">
          <Image src="/lt.jpg" height={40} width={40} alt="L&T logo" />
          <h2 className="text-base font-mont flex items-center gap-2">
            Larsen & Toubro Technology Services
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
          </h2>
        </div>

        <Accordion.Root className="text-black p-4">
          <Accordion.Item>
            <Accordion.Trigger className="group flex w-full items-center justify-between text-left font-mont pl-[9px]">

              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-md border border-slate-300 bg-slate-200">
                  <CodeIcon className="h-3 w-3 text-slate-600" />
                </div>


                  <p className="text-base">
                    Backend Developer
                    <span className="ml-2 text-sm text-gray-400">
                      | 06.2025 – Present
                    </span>
                  </p>

              </div>

              <PlusIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[panel-open]:rotate-45" />
            </Accordion.Trigger>

           <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-black transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
           <ul className="list-disc pl-[60px] font-mont mt-4 space-y-2">
             <li>
               Developing <span className="font-semibold">agentic workflows</span> for <span className="font-semibold">Finance</span> and <span className="font-semibold">Legal</span> teams.
             </li>
             <li>
               Designed a <span className="font-semibold">scheduled workflow system</span> for Investor Relations quarterly conference call analysis and insights generation.
             </li>
             <li>
               Integrated <span className="font-semibold">Semantic Redis caching</span> across tools to optimize response latency and token usage.
             </li>
             <li>
               Implemented <span className="font-semibold">token usage tracking</span> and
               tool-level restrictions to support dashboard-driven analytics.
             </li>
             <li>
               Delivered additional platform capabilities including file upload integration and response streaming.
             </li>
           </ul>

           <div className="mt-4 px-4">
            <div className="flex flex-wrap gap-1">
              {[
                "Python",
                "Langgraph",
                "Langchain",
                "FastAPI",
                "PostgreSQL",
                "Redis",
                "Playwright",
                "APScheduler",
                "Azure Services",
                "Agile",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-300 px-3 py-1 text-sm font-mont text-gray-700 bg-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
         </Accordion.Panel>

          </Accordion.Item>
        </Accordion.Root>
      </SectionWrapper>

      <SectionWrapper>
        <div className="flex items-center p-4">
          <Image src="/centific.png" height={40} width={40} alt="L&T logo" />
          <h2 className="text-base font-mont flex items-center gap-2">
            Centific Global Technologies
          </h2>
        </div>

        <Accordion.Root className="text-black p-4">
          <Accordion.Item>
            <Accordion.Trigger className="group flex w-full items-center justify-between text-left font-mont pl-[9px]">

              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-md border border-slate-300 bg-slate-200">
                  <CodeIcon className="h-3 w-3 text-slate-600" />
                </div>


                  <p className="text-base">
                    Associate Application Engineer Intern
                    <span className="ml-2 text-sm text-gray-400">
                      | 10.2024 – 05.2025
                    </span>
                  </p>

              </div>

              <PlusIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[panel-open]:rotate-45" />
            </Accordion.Trigger>

           <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-black transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0">
            <ul className="list-disc pl-[60px] font-mont mt-4 space-y-2">
              <li>
                Developed <span className="font-semibold"> application logging system</span> using the ELK stack to
                monitor user activity and identify performance bottlenecks.
              </li>
              <li>
                Optimized <span className="font-semibold">log ingestion, retrieval, and analysis</span> pipelines for
                observability and system diagnostics.
              </li>
              <li>
                Implemented and deployed <span className="font-semibold">multiple RAG-based services</span> to support platform
                features and intelligent data access.
              </li>
              <li>
                Designed and developed <span className="font-semibold">RESTful APIs</span> for various application modules,
                ensuring scalability and maintainability.
              </li>
              <li>
                Maintained code quality with <span className="font-semibold">~90% test coverage</span> through
                comprehensive testing using PyTest.
              </li>
            </ul>


            <div className="mt-4 px-4">
                <div className="flex flex-wrap gap-1">
                  {[
                    "Python",
                    "Flask",
                    "PostgreSQL",
                    "ELK Stack",
                    "Docker",
                    "PyTest",
                    "REST APIs",
                    "RAG Architectures",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-300 px-3 py-1 text-sm font-mont text-gray-700 bg-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Accordion.Panel>

          </Accordion.Item>
        </Accordion.Root>
      </SectionWrapper>

      <SectionDivider />

      <SectionWrapper>
        <SectionHeader title="Accolades" id="accolades" />
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid grid-cols-2 items-center gap-4 px-4 py-3">
          <p className="text-base font-mont">
            MLH&apos;23 Hackhound Winner (AI/ML Category)
          </p>
          <Image
            alt="MLH"
            src="/mlh.png"
            width={90}
            height={90}
            className="mx-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-2 items-center gap-4 px-4 py-3">
          <p className="text-base font-mont">
            Selected as Application Engineer after a two-week hackathon
          </p>
          <Image
            alt="Centific"
            src="/centific.jpg"
            width={110}
            height={110}
            className="mx-auto object-contain"
          />
        </div>
      </SectionWrapper>

      <SectionDivider />
    </>
  )
}
