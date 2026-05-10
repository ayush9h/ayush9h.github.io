import Image from "next/image";
import {
  SectionDivider,
  SectionHeader,
  SectionWrapper,
} from "../elements/compstruct";
import { Accordion } from "@base-ui/react";
import { PlusIcon, CodeIcon } from "@radix-ui/react-icons";

export default function About() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="About" id="about" />
      </SectionWrapper>

      <SectionWrapper>
        <ul className="list-disc p-4 pl-[35px] space-y-3 font-mont text-justify">
          <li>
            Backend engineer building{" "}
            <span className="font-semibold">agentic systems</span>,
            <span className="font-semibold"> RAG pipelines</span>, and
            <span className="font-semibold"> backend services</span> with a
            strong focus on performance, and reliability.
          </li>
          <li>
            Experienced with{" "}
            <span className="font-semibold">
              Python, FastAPI, LangGraph, LangChain, Redis,
            </span>{" "}
            and <span className="font-semibold">PostgreSQL</span>, designing
            agentic workflows for enterprise teams for automation.
          </li>
          <li>
            Currently contributing to an{" "}
            <span className="font-semibold">
              enterprise agentic AI assistant
            </span>{" "}
            under the Office of the CIO, enabling workflow automation and CXO
            analytics for
            <span className="font-semibold"> Finance, HR,</span> and
            <span className="font-semibold"> Legal</span> teams.
          </li>
          <li>
            Passionate about{" "}
            <span className="font-semibold">
              transforming ideas into impactful products
            </span>{" "}
            through continuous learning, experimentation, and hands-on
            engineering.
          </li>
        </ul>
      </SectionWrapper>

      <SectionDivider />

      <SectionWrapper>
        <SectionHeader title="Work Experience" id="experience" />
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
            <Accordion.Trigger className="group flex w-full items-center justify-between text-left font-mont pl-[9px] cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-md border border-stone-300 bg-stone-200">
                  <CodeIcon className="h-3 w-3 text-stone-600" />
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

            <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-black transition-[height] ease-out text-justify">
              <ul className="list-disc pl-[60px] font-mont mt-4 space-y-2">
                <li>
                  Contributing to development and migration of monolithic
                  services into{" "}
                  <span className="font-semibold">
                    microservices architecture
                  </span>{" "}
                  integrating{" "}
                  <span className="font-semibold">Azure Service Bus</span> for
                  streaming and queue based request orchestration. Building
                  enterprise{" "}
                  <span className="font-semibold">agentic AI workflows</span>{" "}
                  for Legal, HR and Finance teams. Optimizing{" "}
                  <span className="font-semibold">
                    stateful multi-agent workflows
                  </span>
                  , reducing average response latency from{" "}
                  <span className="font-semibold">20s to 8s</span> and improving{" "}
                  <span className="font-semibold">traceability</span>.
                </li>

                <li>
                  Developed <span className="font-semibold">HR Agent</span> by
                  implementing{" "}
                  <span className="font-semibold">
                    semantic similarity search
                  </span>{" "}
                  combined with{" "}
                  <span className="font-semibold">
                    metadata-aware reranking
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold">filter-based retrieval</span>{" "}
                  through <span className="font-semibold">Azure Search</span>.
                  Integrated <span className="font-semibold">Redis</span> to
                  optimize repeated policy queries, reducing{" "}
                  <span className="font-semibold">response time</span>.
                </li>

                <li>
                  Built <span className="font-semibold">NDA Agent</span> for
                  Legal teams to automate the process of reviewing NDA documents
                  by highlighting{" "}
                  <span className="font-semibold">vulnerable clauses</span> and
                  applying <span className="font-semibold">track changes</span>{" "}
                  according to Legal Playbook. This reduced review time from{" "}
                  <span className="font-semibold">2 hours to 30 minutes</span>.
                </li>

                <li>
                  Built{" "}
                  <span className="font-semibold">
                    Earnings Call Automation
                  </span>
                  , analyzing quarterly results through audio recordings for{" "}
                  <span className="font-semibold">10+ peer companies</span> and
                  providing{" "}
                  <span className="font-semibold">
                    structured summarization
                  </span>
                  . Integrated{" "}
                  <span className="font-semibold">Power Automate</span> to
                  deliver summaries through emails to CXOs. Reduced manual
                  review time from{" "}
                  <span className="font-semibold">1 hour to 15 minutes</span>.
                </li>

                <li>
                  Built{" "}
                  <span className="font-semibold">
                    end-to-end forecasting pipelines
                  </span>{" "}
                  for multiple forecastable VDUs using{" "}
                  <span className="font-semibold">XGBoost</span>, achieving
                  approximately <span className="font-semibold">2% MAPE</span>.
                  Deployed models through{" "}
                  <span className="font-semibold">Azure ML Studio</span> and
                  developed interactive{" "}
                  <span className="font-semibold">Power BI dashboards</span> for
                  real-time financial visibility and reporting.
                </li>

                <li>
                  Developed a{" "}
                  <span className="font-semibold">
                    data-driven spend analytics solution
                  </span>{" "}
                  to identify{" "}
                  <span className="font-semibold">price inconsistencies</span>{" "}
                  across purchase orders and varying payment terms. Performed{" "}
                  <span className="font-semibold">
                    historical vendor and pricing analysis
                  </span>{" "}
                  to detect{" "}
                  <span className="font-semibold">PO-level anomalies</span>,
                  generate detailed analytical reports, and recommend{" "}
                  <span className="font-semibold">
                    optimal pricing benchmarks
                  </span>{" "}
                  based on historical trends, payment structures, and vendor
                  performance history, improving{" "}
                  <span className="font-semibold">cost visibility</span> and{" "}
                  <span className="font-semibold">
                    procurement decision-making
                  </span>
                  .
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
                    "Dramatiq",
                    "Azure Kubernetes Services",
                    "Azure Service Bus",
                    "Azure ML Studio",
                    "Azure Search",
                    "Power Automate",
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
          <Image
            src="/image/centific.png"
            height={40}
            width={40}
            alt="Centific logo"
          />
          <h2 className="text-base font-mont flex items-center gap-2">
            Centific Global Technologies
          </h2>
        </div>

        <Accordion.Root className="text-black p-4">
          <Accordion.Item>
            <Accordion.Trigger className="group flex w-full items-center justify-between text-left font-mont pl-[9px] cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-md border border-stone-300 bg-stone-200">
                  <CodeIcon className="h-3 w-3 text-stone-600" />
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

            <Accordion.Panel className="h-[var(--accordion-panel-height)] overflow-hidden text-base text-black transition-[height] ease-out text-justify">
              <ul className="list-disc pl-[60px] font-mont mt-4 space-y-2">
                <li>
                  Designed and deployed a scalable, queue-based application
                  logging and monitoring framework using the ELK stack
                  (Elasticsearch, Logstash) to capture logs across AI services,
                  scheduler jobs, and modular pipelines. Implemented structured
                  JSON logging, log level standardization, and optimized shard
                  allocation strategies for efficient log ingestion and
                  retrieval. Built interactive user interface dashboards for
                  stakeholders to monitor{" "}
                  <span className="font-semibold">service-level metrics</span>,{" "}
                  <span className="font-semibold">user activity</span>,{" "}
                  <span className="font-semibold">error trends</span>, and{" "}
                  <span className="font-semibold">performance bottlenecks</span>{" "}
                  in real time.
                </li>

                <li>
                  Designed and produced{" "}
                  <span className="font-semibold">
                    10 Retrieval-Augmented Generation (RAG) pipelines
                  </span>{" "}
                  for diverse stakeholders, integrating multiple vector
                  databases with dynamic storage selection (
                  <span className="font-semibold">Pinecone, ChromaDB</span>{" "}
                  etc.) based on use-case requirements. Designed efficient{" "}
                  <span className="font-semibold">indexing strategies</span>,{" "}
                  <span className="font-semibold">chunking mechanisms</span>,
                  and{" "}
                  <span className="font-semibold">
                    hybrid retrieval workflows
                  </span>{" "}
                  to support ingestion and contextual retrieval of IT governance
                  and data privacy documentation.
                </li>

                <li>
                  Developed and productionized{" "}
                  <span className="font-semibold">35 RESTful APIs</span>{" "}
                  powering AI backend services as well as core application
                  modules, including pipeline graph visualization, pipeline
                  creation, editing and deletion workflows, and real-time
                  metrics dashboards. Ensured{" "}
                  <span className="font-semibold">modular architecture</span>,{" "}
                  <span className="font-semibold">scalability</span>, and{" "}
                  <span className="font-semibold">
                    clean service abstractions
                  </span>
                  . Maintained over{" "}
                  <span className="font-semibold">90% code coverage</span>{" "}
                  through comprehensive unit and integration testing using
                  PyTest.
                </li>

                <li>
                  Fine-tuned large language models including{" "}
                  <span className="font-semibold">
                    Amazon Nova series via Amazon Bedrock
                  </span>
                  , and additionally fine-tuned{" "}
                  <span className="font-semibold">DeepSeek-Coder-6.7B</span> and{" "}
                  <span className="font-semibold">CodeLlama-Instruct</span>{" "}
                  models using RunPod based on internal guidelines for coding
                  standards, enabling more accurate{" "}
                  <span className="font-semibold">
                    domain-aligned code generation
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold">
                    automated debugging support
                  </span>{" "}
                  for enterprise development teams.
                </li>
              </ul>
              <div className="mt-4 px-4">
                <div className="flex flex-wrap gap-1">
                  {[
                    "Python",
                    "Flask",
                    "PostgreSQL",
                    "Amazon Web Services",
                    "Amazon Nova",
                    "HuggingFace",
                    "LangChain",
                    "LangGraph",
                    "Pinecone",
                    "Milvus",
                    "ChromaDB",
                    "Elasticsearch",
                    "Logstash",
                    "Kibana",
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

      <SectionWrapper>
        <SectionHeader title="Accolades & Certifications" id="accolades" />
      </SectionWrapper>

      <SectionWrapper className="border-b border-stone-200/50">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-stone-200/50">
          {/* MLH */}
          <div className="flex flex-col min-h-[200px] border-b border-stone-200/50">
            <div className="flex-1 flex items-center justify-center border-b border-stone-200/50">
              <Image
                alt="MLH"
                src="/image/mlh.png"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-mont text-base leading-snug text-stone-950">
                MLH&apos;23 Hackhound Winner
              </h3>

              <p className="font-mont text-base text-stone-500 mt-2">
                AI/ML Category
              </p>
            </div>
          </div>

          {/* Centific */}
          <div className="flex flex-col min-h-[200px] border-b border-stone-200/50">
            <div className="flex-1 flex items-center justify-center border-b border-stone-200/50">
              <Image
                alt="Centific"
                src="/image/centific.jpg"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-mont text-base leading-snug text-stone-950">
                Application Engineer Intern Selection
              </h3>

              <p className="font-mont text-base text-stone-500 mt-2">
                Selected after a two-week hackathon
              </p>
            </div>
          </div>

          {/* Docker */}
          <div className="flex flex-col min-h-[200px]">
            <div className="flex-1 flex items-center justify-center border-b border-stone-200/50">
              <Image
                alt="Docker"
                src="/image/docker-logo.png"
                width={75}
                height={75}
                className="object-contain rounded-md"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-mont text-base leading-snug text-stone-950">
                Docker Certification
              </h3>

              <p className="font-mont text-base text-stone-500 mt-2">
                Containerization & Deployment
              </p>
            </div>
          </div>

          {/* DeepLearning.AI */}
          <div className="flex flex-col min-h-[200px]">
            <div className="flex-1 flex items-center justify-center border-b border-stone-200/50">
              <Image
                alt="DeepLearning.AI"
                src="/image/deeplearningai.png"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-mont text-base leading-snug text-stone-950">
                Agentic AI Certification
              </h3>

              <p className="font-mont text-base text-stone-500 mt-2">
                DeepLearning.AI
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionDivider />
    </>
  );
}
