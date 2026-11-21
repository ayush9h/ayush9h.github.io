import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { SectionDivider, SectionHeader, SectionWrapper } from "../elements/compstruct";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects: {
    img: string;
    w: number;
    h: number;
    tech: string;
    title: string;
    link: string;
    demo?: string;
  }[] = [
    {
      img: "/projects/aletheia.jpg",
      w: 687,
      h: 1031,
      tech: "Next.js, FastAPI, LangGraph, Groq, PostgreSQL",
      title: "Aletheia",
      link: "https://github.com/ayush9h/aletheia",
      demo: "https://www.ayuar.dev/aletheia",
    },
    {
      img: "/projects/finance-mcp.jpg",
      w: 2400,
      h: 960,
      tech: "TypeScript, Go, Model Context Protocol, Web Scraping",
      title: "Finance MCP",
      link: "https://github.com/ayush9h/finance-mcp",
      demo: "https://financemcp-theta.vercel.app/",
    },
    {
      img: "/projects/legal.jpg",
      w: 1600,
      h: 1066,
      tech: "Python, NLTK, LLM, Data Visualization, Streamlit UI",
      title: "Legal Digest",
      link: "https://github.com/ayush9h/LegalDigest",
    },
  ];

  return (
    <>
      <SectionWrapper>
        <SectionHeader title="Projects" id="projects" />
      </SectionWrapper>

      <SectionWrapper>
        <div className="border-r border-stone-200/50 dark:border-stone-900">
          {projects.map((item, i) => (
            <div
              key={i}
              className="group border-b border-stone-200/50 dark:border-stone-900 bg-white dark:bg-black"
            >
              <div className="border-b border-stone-200/50 dark:border-stone-900 bg-stone-50 dark:bg-stone-950">
                <Image
                  alt={item.title}
                  src={item.img}
                  title={item.title}
                  width={item.w}
                  height={item.h}
                  quality={90}
                  sizes="(max-width: 768px) 92vw, 67vw"
                  className="w-full h-[22rem] object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                />
              </div>

              <div className="p-4 space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <div className="flex items-center gap-2 cursor-pointer hover:underline">
                    <ArrowRightIcon className="w-5 h-5 text-stone-900 dark:text-stone-100" />

                    <a
                      target="_blank"
                      href={item.link}
                      className="font-mont text-xl font-semibold text-stone-900 dark:text-stone-100"
                    >
                      {item.title}
                    </a>
                  </div>

                  {item.demo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.demo}
                      className="flex items-center gap-1 font-mont text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:underline"
                    >
                      Live Demo
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <p className="font-mont text-sm text-stone-500 dark:text-stone-400">
                  {item.tech}
                </p>
              </div>
            </div>
          ))}

          <div className="flex justify-center items-center text-center bg-white dark:bg-black ">
            <Link
              href="https://github.com/ayush9h"
              target="_blank"
              className="
                mt-2 mb-2 mx-auto
                w-[10rem]
                p-2
                rounded-full
                flex justify-center items-center text-center
                font-mont
                bg-gradient-to-b
                from-stone-900 via-stone-800 to-gray-700
                dark:from-stone-100 dark:via-stone-300 dark:to-white
                hover:from-gray-800 hover:via-stone-900 hover:to-stone-900
                dark:hover:from-stone-300 dark:hover:via-stone-100 dark:hover:to-white
                shadow-md hover:shadow-xl
                 duration-300
                text-sm
                text-stone-200 dark:text-stone-900
                uppercase
              "
            >
              see all projects
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionDivider />
    </>
  );
}
