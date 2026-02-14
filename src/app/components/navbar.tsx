import {MagnifyingGlassIcon, GitHubLogoIcon, SunIcon, MoonIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { SectionWrapper } from "../elements/compstruct"

export default function Navbar() {


  return (

    <SectionWrapper className="fixed top-0 left-0 w-full bg-white">
      
      <div className="flex justify-between items-center p-2">
        <h1 className="text-md font-mont font-bold text-black ">AYUAR</h1>

        <div className="flex items-center justify-between gap-3">

          <div
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                ctrlKey: true,
              })
              document.dispatchEvent(event)
            }}
            className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-slate-300 shadow-sm cursor-pointer transition-all"
          >
            <MagnifyingGlassIcon  className="text-black" />
            <div className="flex items-center gap-1">
              <kbd className="sm:inline-flex rounded px-1 border border-slate-300 bg-slate-100 text-xs font-mont shadow-sm">
                Ctrl
              </kbd>
              <kbd className="sm:inline-flex rounded px-1 border border-slate-300 bg-slate-100 text-xs font-mont shadow-sm">
                K
              </kbd>
            </div>
          </div>

       
          <Link
            href="https://github.com/ayush9h"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 cursor-pointer transition-all"
          >
            <GitHubLogoIcon className="text-black h-4 w-4" />
          </Link>
          

        </div>
      </div>
    </SectionWrapper>
  )
}
