import Image from "next/image"
import { SectionDivider, SectionHeader, SectionWrapper} from '../elements/compstruct'
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

{/* L&T */}
<SectionWrapper>
  <div className="flex items-center p-4">
    <Image src="/image/lt.jpg" height={40} width={40} alt="L&T logo" />
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
              | 07.2025 – Present
            </span>
          </p>
        </div>

        <PlusIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[panel-open]:rotate-45" />
      </Accordion.Trigger>

      <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-black transition-[height] ease-out">
        <ul className="list-disc pl-[60px] font-mont mt-4 space-y-2">
          <li>
            Building enterprise <span className="font-semibold">agentic AI systems</span> with microservices architecture and async orchestration via Azure Service Bus.
          </li>
          <li>
            Designed <span className="font-semibold">stateful multi-agent workflows</span> reducing latency from 20s → 8s.
          </li>
          <li>
            Developed <span className="font-semibold">HR policy retrieval system</span> using semantic search, OCR ingestion, and Redis caching.
          </li>
          <li>
            Built <span className="font-semibold">NDA redlining agent</span> reducing manual review time from 2h → 30m.
          </li>
          <li>
            Engineered <span className="font-semibold">earnings call automation pipeline</span> reducing analysis time by 75%.
          </li>
          <li>
            Developed <span className="font-semibold">forecasting models (XGBoost)</span> with ~2% MAPE and Power BI dashboards.
          </li>
          <li>
            Built <span className="font-semibold">spend analytics system</span> for pricing anomaly detection and vendor benchmarking.
          </li>
        </ul>

        <div className="mt-4 px-4">
          <div className="flex flex-wrap gap-1">
            {[
              "Python",
              "FastAPI",
              "LangGraph",
              "LangChain",
              "Redis",
              "PostgreSQL",
              "Docker",
              "AKS",
              "Azure ML",
              "Power BI",
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

{/* Centific */}
<SectionWrapper>
  <div className="flex items-center p-4">
    <Image src="/image/centific.png" height={40} width={40} alt="Centific logo" />
    <h2 className="text-base font-mont flex items-center gap-2">
      Centific
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
              | 10.2024 – 06.2025
            </span>
          </p>
        </div>

        <PlusIcon className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[panel-open]:rotate-45" />
      </Accordion.Trigger>

      <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-black transition-[height] ease-out">
        <ul className="list-disc pl-[60px] font-mont mt-4 space-y-2">
          <li>
            Built <span className="font-semibold">ELK-based logging system</span> for AI services with structured logging and monitoring dashboards.
          </li>
          <li>
            Developed <span className="font-semibold">10+ RAG pipelines</span> with dynamic vector DB selection (Pinecone, ChromaDB).
          </li>
          <li>
            Productionized <span className="font-semibold">35+ REST APIs</span> for backend services and dashboards.
          </li>
          <li>
            Maintained <span className="font-semibold">90%+ test coverage</span> using PyTest.
          </li>
          <li>
            Fine-tuned <span className="font-semibold">LLMs</span> (Amazon Nova, DeepSeek, CodeLlama) for enterprise use-cases.
          </li>
        </ul>

        <div className="mt-4 px-4">
          <div className="flex flex-wrap gap-1">
            {[
              "Python",
              "Flask",
              "PostgreSQL",
              "AWS",
              "LangChain",
              "LangGraph",
              "ELK Stack",
              "Docker",
              "PyTest",
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
    </>
  )
}
