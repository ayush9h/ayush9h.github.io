import { Command, CommandSeparator } from "cmdk";
import { useEffect, useState } from "react";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { User, Folder, Award, BriefcaseBusinessIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

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

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollbarGutter = "stable";

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

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

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-start justify-center
        pt-32
        bg-black/10 dark:bg-black/40
        backdrop-blur-sm
         duration-300
      "
      onClick={() => setOpen(false)}
    >
      <Command
        label="Command Menu"
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-md
          rounded-xl
          bg-white dark:bg-stone-950
          border border-stone-300 dark:border-stone-900
          shadow-[0_25px_60px_rgba(0,0,0,0.22),0_-12px_30px_rgba(0,0,0,0.12)]
          overflow-hidden
          
        "
      >
        <Command.Input
          autoFocus
          placeholder="Type a command or search..."
          className="
            w-full p-3
            border-b border-stone-300 dark:border-stone-900
            bg-white dark:bg-stone-950
            text-sm
            outline-none
            placeholder:text-stone-400 dark:placeholder:text-stone-500
            font-mont
            text-stone-900 dark:text-stone-100
            
          "
        />

        <Command.List
          onWheel={(e) => e.stopPropagation()}
          className="
            p-2
            max-h-80
            overflow-y-auto
            space-y-6
            bg-white dark:bg-stone-950
            
          "
        >
          <Command.Empty className="p-2 text-sm font-mono text-stone-900 dark:text-stone-100">
            No results found.
          </Command.Empty>

          <Command.Group
            heading={
              <span className="mt-4 mb-2 font-mont text-xs text-stone-400 dark:text-stone-500 block px-3">
                Menu
              </span>
            }
          >
            <Command.Item
              onSelect={() => goTo("about")}
              className="
                flex items-center gap-3
                px-3 py-2
                rounded-md
                text-sm
                font-mont
                text-stone-900 dark:text-stone-100
                data-[selected=true]:bg-stone-100
                dark:data-[selected=true]:bg-black
                 duration-200
                cursor-pointer
              "
            >
              <User size={16} />
              About
            </Command.Item>

            <Command.Item
              onSelect={() => goTo("experience")}
              className="
                flex items-center gap-3
                px-3 py-2
                rounded-md
                text-sm
                font-mont
                text-stone-900 dark:text-stone-100
                data-[selected=true]:bg-stone-100
                dark:data-[selected=true]:bg-black
                 duration-200
                cursor-pointer
              "
            >
              <BriefcaseBusinessIcon size={16} />
              Work Experience
            </Command.Item>

            <Command.Item
              onSelect={() => goTo("accolades")}
              className="
                flex items-center gap-3
                px-3 py-2
                rounded-md
                text-sm
                font-mont
                text-stone-900 dark:text-stone-100
                data-[selected=true]:bg-stone-100
                dark:data-[selected=true]:bg-black
                 duration-200
                cursor-pointer
              "
            >
              <Award size={16} />
              Accolades & Certifications
            </Command.Item>

            <Command.Item
              onSelect={() => goTo("projects")}
              className="
                flex items-center gap-3
                px-3 py-2
                rounded-md
                text-sm
                font-mont
                text-stone-900 dark:text-stone-100
                data-[selected=true]:bg-stone-100
                dark:data-[selected=true]:bg-black
                 duration-200
                cursor-pointer
              "
            >
              <Folder size={16} />
              Projects
            </Command.Item>

            <Command.Item
              onSelect={() => goTo("connect")}
              className="
                flex items-center gap-3
                px-3 py-2
                rounded-md
                text-sm
                font-mont
                text-stone-900 dark:text-stone-100
                data-[selected=true]:bg-stone-100
                dark:data-[selected=true]:bg-black
                 duration-200
                cursor-pointer
              "
            >
              <GlobeIcon />
              Connect
            </Command.Item>
          </Command.Group>

          <CommandSeparator className="h-px bg-stone-200 dark:bg-stone-800" />

          <Command.Group
            heading={
              <span className="font-mont text-xs text-stone-400 dark:text-stone-500 block px-3 mt-4 mb-2">
                Social Links
              </span>
            }
          >
            <Command.Item
              className="
                flex items-center gap-3
                px-3 py-2
                rounded-md
                text-sm
                font-mont
                text-stone-900 dark:text-stone-100
                data-[selected=true]:bg-stone-100
                dark:data-[selected=true]:bg-black
                 duration-200
                cursor-pointer
              "
            >
              <LinkedInLogoIcon className="text-blue-500" />

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/ayush-kumar-88b883239/"
              >
                Linkedin
              </Link>
            </Command.Item>

            <Command.Item
              className="
                flex items-center gap-3
                px-3 py-2
                rounded-md
                text-sm
                font-mont
                text-stone-900 dark:text-stone-100
                data-[selected=true]:bg-stone-100
                dark:data-[selected=true]:bg-black
                 duration-200
                cursor-pointer
              "
            >
              <GitHubLogoIcon />

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ayush9h"
              >
                Github
              </Link>
            </Command.Item>

            <Command.Item
              className="
                flex items-center gap-3
                px-3 py-2
                rounded-md
                text-sm
                font-mont
                text-stone-900 dark:text-stone-100
                data-[selected=true]:bg-stone-100
                dark:data-[selected=true]:bg-black
                 duration-200
                cursor-pointer
              "
            >
              <Image
                src="/image/leetcode.png"
                height={15}
                width={15}
                alt="Coding Profile Image"
              />

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://leetcode.com/u/ayukr_2002"
              >
                Leetcode
              </Link>
            </Command.Item>

            <Command.Item
              className="
                flex items-center gap-3
                px-3 py-2
                rounded-md
                text-sm
                font-mont
                text-stone-900 dark:text-stone-100
                data-[selected=true]:bg-stone-100
                dark:data-[selected=true]:bg-black
                 duration-200
                cursor-pointer
              "
            >
              <Image
                src="/image/codeforces.png"
                height={15}
                width={15}
                alt="Coding Profile Image"
              />

              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://codeforces.com/profile/ayush2025"
              >
                Codeforces
              </Link>
            </Command.Item>
          </Command.Group>

          <CommandSeparator className="h-px bg-stone-200 dark:bg-stone-800" />
        </Command.List>

        <div
          className="
            relative
            flex items-center justify-end gap-2
            p-3 mt-2
            border-t border-t-stone-300 dark:border-t-stone-800
            bg-white dark:bg-stone-950
            
          "
        >
          <span className="text-xs font-semibold font-mont text-stone-400 dark:text-stone-500">
            Exit
          </span>

          <kbd
            className="
              px-2 py-0.5
              rounded-md
              border border-stone-300 dark:border-stone-700
              bg-stone-100 dark:bg-black
              text-xs
              font-mont
              shadow-md
              text-stone-900 dark:text-stone-100
              
            "
          >
            Esc
          </kbd>
        </div>
      </Command>
    </div>
  );
}
