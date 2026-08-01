import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { SectionDivider, SectionHeader, SectionWrapper } from "../elements/compstruct";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      img: "/projects/linkauto.png",
      tech: "ReactJs, AutoGen, Redis, Celery",
      title: "LinkedIn Post Automator",
      link: "https://github.com/ayush9h/linkedin-post-automater",
    },
    {
      img: "/projects/stable.svg",
      tech: "Python, StableDiffusion, SAM, Streamlit UI",
      title: "Stable SAM",
      link: "https://github.com/sankadash/StableSAM",
    },
    {
      img: "/projects/legal.svg",
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
              className="space-y-2 p-2 md:p-8 border-b border-stone-200 dark:border-stone-900 bg-white dark:bg-black "
            >
              <div className="overflow-hidden rounded-xl border border-stone-200 dark:border-stone-900 shadow-sm bg-white dark:bg-stone-950 ">
                <Image
                  alt="project"
                  src={item.img}
                  title={item.title}
                  width={500}
                  height={100}
                  className="w-full h-[22rem] object-cover"
                />
              </div>

              <p className="font-mont text-lg text-gray-500 dark:text-stone-400 ">{item.tech}</p>

              <div className="flex items-center gap-2 cursor-pointer hover:underline">
                <ArrowRightIcon className="arrow w-5 h-5 text-stone-900 dark:text-stone-100 " />

                <a
                  target="_blank"
                  href={item.link}
                  className="link-text font-mont text-xl font-semibold text-stone-900 dark:text-stone-100 "
                >
                  {item.title}
                </a>
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
