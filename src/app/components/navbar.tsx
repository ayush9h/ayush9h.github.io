import { MagnifyingGlassIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "../elements/compstruct";
import { useTheme } from "../providers/theme-provider";
export default function Navbar() {
  const { theme, changeTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <SectionWrapper className="fixed top-0 left-0 w-full z-10 bg-white dark:bg-black border-b border-stone-200 dark:border-stone-900">
      <div className="flex justify-between items-center p-2">
        <h1 className="text-md font-mont font-bold text-stone-900 dark:text-stone-100">
          AYUAR
        </h1>

        <div className="flex items-center justify-between gap-1">
          <div
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                ctrlKey: true,
                metaKey: true,
              });

              document.dispatchEvent(event);
            }}
            className="
              flex items-center justify-center gap-1 rounded-full border border-stone-200 dark:border-stone-800 bg-stone-80/10 dark:bg-black/60 backdrop-blur-md px-1.5 py-1 shadow-sm hover:border-stone-300 dark:hover:border-stone-700 cursor-pointer
            "
          >
            <MagnifyingGlassIcon
              className="
                h-4 w-4
                text-stone-500 dark:text-stone-400
              "
            />

            <div className="flex gap-1">
              <kbd
                className="flex justify-center min-w-[20px] rounded-md border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-900 px-1 text-xs text-stone-500 dark:text-stone-400 shadow-sm
                "
              >
                {typeof window !== "undefined" &&
                navigator.platform.toLowerCase().includes("mac")
                  ? "⌘"
                  : "Ctrl"}
              </kbd>

              <kbd className="flex  justify-center min-w-[20px] rounded-md border border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-900 px-1 text-xs text-stone-500 dark:text-stone-400 shadow-sm">
                K
              </kbd>
            </div>
          </div>

          <Link
            href="https://github.com/ayush9h"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            <GitHubLogoIcon className="text-stone-900 dark:text-stone-100 h-4 w-4" />
          </Link>

          <button
            onClick={() => changeTheme(theme === "dark" ? "light" : "dark")}
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
