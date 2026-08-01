"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { LinkedInLogoIcon, GitHubLogoIcon, GlobeIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { Award, BriefcaseBusinessIcon, FileText, Folder, Monitor, Moon, Sun, User } from "lucide-react";
import { useTheme } from "../providers/theme-provider";

const itemClass =
  "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-mont text-stone-900 dark:text-stone-100 data-[selected=true]:bg-stone-100 dark:data-[selected=true]:bg-stone-800 cursor-pointer";

const headingClass = "mt-4 mb-2 block px-3 text-xs font-mont text-stone-400 dark:text-stone-500";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  const { theme, changeTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  const menuItems = [
    {
      label: "About",
      icon: <User size={16} />,
      action: () => goTo("about"),
    },
    {
      label: "Work Experience",
      icon: <BriefcaseBusinessIcon size={16} />,
      action: () => goTo("experience"),
    },
    {
      label: "Accolades & Certifications",
      icon: <Award size={16} />,
      action: () => goTo("accolades"),
    },
    {
      label: "Projects",
      icon: <Folder size={16} />,
      action: () => goTo("projects"),
    },
    {
      label: "Connect",
      icon: <GlobeIcon />,
      action: () => goTo("connect"),
    },
  ];

  const socialItems = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-kumar-88b883239/",
      icon: <LinkedInLogoIcon className="text-blue-500" />,
    },
    {
      label: "GitHub",
      href: "https://github.com/ayush9h",
      icon: <GitHubLogoIcon />,
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/ayukr_2002",
      icon: <Image src="/profiles/leet.png" height={15} width={15} alt="LeetCode" />,
    },
    {
      label: "Codeforces",
      href: "https://codeforces.com/profile/ayush2025",
      icon: <Image src="/profiles/codeforces.png" height={15} width={15} alt="Codeforces" />,
    },
  ];

  const themeItems = [
    {
      label: "System",
      value: "system",
      icon: <Monitor size={16} />,
    },
    {
      label: "Light",
      value: "light",
      icon: <Sun size={16} />,
    },
    {
      label: "Dark",
      value: "dark",
      icon: <Moon size={16} />,
    },
  ] as const;

  const otherItems = [
    {
      label: "llms.txt",
      href: "/llms.txt",
      icon: <FileText size={16} />,
    },
  ];

  if (!open) return null;

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-50 flex items-start justify-center pt-32 bg-stone-950/10 dark:bg-stone-950/40 backdrop-blur-xs"
    >
      <Command
        label="Command Menu"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[30rem] overflow-hidden rounded-xl border border-stone-300 bg-white dark:border-stone-900 dark:bg-stone-950"
      >
        <div className="relative border-b border-stone-300 dark:border-stone-900">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400 dark:text-stone-500" />

          <Command.Input
            autoFocus
            placeholder="Type a command or search..."
            className="w-full bg-white py-3 pl-10 pr-3 text-sm font-mont text-stone-900 outline-none placeholder:text-stone-400 dark:bg-stone-950 dark:text-stone-100 dark:placeholder:text-stone-500"
          />
        </div>

        <Command.List
          onWheel={(e) => e.stopPropagation()}
          className="max-h-80 space-y-6 overflow-y-auto bg-white p-2 [scrollbar-width:none] [-ms-overflow-style:none] dark:bg-stone-950 [&::-webkit-scrollbar]:hidden"
        >
          <Command.Empty className="p-2 text-sm font-mono text-stone-900 dark:text-stone-100">
            No results found.
          </Command.Empty>

          <Command.Group heading={<span className={headingClass}>Menu</span>}>
            {menuItems.map((item) => (
              <Command.Item key={item.label} onSelect={item.action} className={itemClass}>
                {item.icon}
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={<span className={headingClass}>Social Links</span>}>
            {socialItems.map((item) => (
              <Link href={item.href} target="_blank" rel="noopener noreferrer" key={item.label}>
                <Command.Item className={itemClass}>
                  {item.icon}

                  {item.label}
                </Command.Item>
              </Link>
            ))}
          </Command.Group>

          <Command.Group heading={<span className={headingClass}>Theme</span>}>
            {themeItems.map((item) => (
              <Command.Item
                key={item.value}
                onSelect={() => changeTheme(item.value)}
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-mont text-stone-900 data-[selected=true]:bg-stone-100 dark:text-stone-100 dark:data-[selected=true]:bg-stone-800 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {item.label}
                </div>

                {theme === item.value && <div className="h-2 w-2 rounded-full bg-stone-900 dark:bg-stone-100" />}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading={<span className={headingClass}>Others</span>}>
            {otherItems.map((item) => (
              <Link href={item.href} target="_blank" rel="noopener noreferrer" key={item.label}>
                <Command.Item className={itemClass}>
                  {item.icon}

                  {item.label}
                </Command.Item>
              </Link>
            ))}
          </Command.Group>
        </Command.List>

        <div className="flex items-center justify-end gap-2 border-t border-t-stone-300 bg-white p-3 shadow-xl dark:border-t-stone-800 dark:bg-stone-950">
          <span className="text-xs font-semibold font-mont text-stone-400 dark:text-stone-500">Exit</span>

          <kbd className="rounded-md border border-stone-300 bg-stone-100 px-2 py-0.5 text-xs font-mont text-stone-900 shadow-md dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100">
            Esc
          </kbd>
        </div>
      </Command>
    </div>
  );
}
