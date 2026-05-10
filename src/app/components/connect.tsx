import {
  SectionHeader,
  SectionWrapper,
  SectionDivider,
} from "../elements/compstruct";

import Link from "next/link";

export default function Connect() {
  const links = [
    { name: "Github", url: "https://github.com/ayush9h" },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/ayush-kumar-88b883239/",
    },
    { name: "LeetCode", url: "https://leetcode.com/u/ayukr_2002/" },
    { name: "Codeforces", url: "https://codeforces.com/profile/ayush2025/" },
  ];

  return (
    <>
      <SectionWrapper>
        <SectionHeader title="Connect" id="connect" />
      </SectionWrapper>

      <SectionWrapper>
        <h1 className="text-2xl md:text-8xl text-center uppercase text-stone-900 dark:text-stone-100 font-medium font-mont p-4 ">
          Ayush Kumar
        </h1>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 p-2">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                md:text-sm
                flex items-center justify-center
                h-full
                px-4 py-3
                rounded-md
                font-mont
                space-x-2
                 duration-300
                text-stone-500 dark:text-stone-300
                hover:bg-stone-100 dark:hover:bg-black
                hover:text-stone-900 dark:hover:text-stone-100
                hover:underline
              "
            >
              <span className="font-mont uppercase font-bold">{link.name}</span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h1 className="text-md text-center text-slate-400/65 dark:text-stone-500 font-mont p-4 ">
          Inspired by chanhdai.com & tailwindcss.com
        </h1>
      </SectionWrapper>

      <SectionDivider />
    </>
  );
}
