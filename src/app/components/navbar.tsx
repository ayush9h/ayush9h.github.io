import {MagnifyingGlassIcon, GitHubLogoIcon, SunIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { SectionWrapper } from "./compstruct"
export default function Navbar() {
  

  return (

    <SectionWrapper className="fixed top-0 left-0 w-full bg-white">
      
      <div className="flex justify-around items-center p-2">
        <h1 className="text-md font-mont font-bold text-black">AYUAR</h1>

        <div className="flex items-center justify-around">

          <div
            onClick={() => {
              const event = new KeyboardEvent("keydown", {
                key: "k",
                ctrlKey: true,
              })
              document.dispatchEvent(event)
            }}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white shadow-sm cursor-pointer transition-all"
          >
            <MagnifyingGlassIcon  className="text-black" />
            <div className="flex items-center gap-1">
              <kbd className="hidden sm:inline-flex px-1.5 py-0.5 rounded border border-slate-300 bg-zinc-100 text-xs font-mont shadow-md  text-black">
                Ctrl
              </kbd>
              <kbd className="hidden sm:inline-flex px-1.5 py-0.5 rounded border border-slate-300 bg-zinc-100 text-xs font-mont shadow-md text-black">
                K
              </kbd>
            </div>
          </div>

       
          <Link
            href="https://github.com/ayush9h"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full border border-slate-300 bg-white shadow-sm cursor-pointer transition-all"
          >
            <GitHubLogoIcon className="text-black" />
          </Link>

          <SunIcon/>

        </div>
      </div>

      
    </SectionWrapper>
  )
}
