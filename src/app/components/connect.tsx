import {
  SectionHeader,
  SectionWrapper,
  SectionDivider,
} from "../elements/compstruct";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { ArrowUpRight } from "lucide-react";

export default function Connect() {
  // simple-icons draws with currentColor, so these follow the text in both themes
  const links = [
    {
      name: "GitHub",
      icon: "simple-icons:github",
      url: "https://github.com/ayush9h",
    },
    {
      name: "LinkedIn",
      icon: "simple-icons:linkedin",
      url: "https://www.linkedin.com/in/ayush-kumar-88b883239/",
    },
    {
      name: "LeetCode",
      icon: "simple-icons:leetcode",
      url: "https://leetcode.com/u/ayukr_2002/",
    },
    {
      name: "Codeforces",
      icon: "simple-icons:codeforces",
      url: "https://codeforces.com/profile/ayush2025/",
    },
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
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-stone-200/50 dark:divide-stone-900">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 px-4 py-3 font-mont text-sm text-stone-900 dark:text-stone-100 hover:bg-stone-50 dark:hover:bg-stone-950"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950">
                  <Icon icon={link.icon} aria-hidden="true" className="h-4 w-4" />
                </span>

                {link.name}
              </span>

              <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-stone-400 dark:text-stone-600 group-hover:text-stone-900 dark:group-hover:text-stone-100" />
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
