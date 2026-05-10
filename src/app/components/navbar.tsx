"use client";

import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "../elements/compstruct";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    clickAudioRef.current = new Audio("/click.mp3");
    clickAudioRef.current.volume = 0.35;

    setMounted(true);

    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (storedTheme) {
      setTheme(storedTheme);

      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      return;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const playClick = () => {
    if (!clickAudioRef.current) return;

    clickAudioRef.current.currentTime = 0;

    clickAudioRef.current
      .play()
      .catch(() => {});
  };

  const toggleTheme = () => {
    playClick();

    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <SectionWrapper className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black border-b border-stone-200 dark:border-stone-900">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-md font-mont font-bold text-stone-900 dark:text-stone-100">
          AYUAR
        </h1>

        <div className="flex items-center justify-between gap-2">
          <div
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                ctrlKey: true,
              });

              document.dispatchEvent(event);
            }}
            className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-black shadow-sm cursor-pointer"
          >
            <MagnifyingGlassIcon className="text-stone-900 dark:text-stone-100" />

            <div className="flex items-center gap-1">
              <kbd className="rounded px-1 border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-black text-xs font-mont shadow-sm text-stone-900 dark:text-stone-100">
                Ctrl
              </kbd>

              <kbd className="rounded px-1 border border-stone-300 dark:border-stone-700 bg-stone-100 dark:bg-black text-xs font-mont shadow-sm text-stone-900 dark:text-stone-100">
                K
              </kbd>
            </div>
          </div>

          <Link
            href="https://github.com/ayush9h"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            <GitHubLogoIcon className="text-stone-900 dark:text-stone-100 h-4 w-4" />
          </Link>

           <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
          >
            {theme === "light" ? (
              <Sun className="h-4 w-4 text-stone-900" />
            ) : (
              <Moon className="h-4 w-4 text-stone-100" />
            )}
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}