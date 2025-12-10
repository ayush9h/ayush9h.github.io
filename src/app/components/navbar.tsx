"use client"

import { Search } from "lucide-react"

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 w-full bg-white border-b border-slate-100 p-2 flex justify-around items-center z-50"
    >
      <div className="text-md font-bebas font-bold">
        <h1>AYUAR</h1>
      </div>

      <div className="text-xs font-mont font-semibold text-slate-700">
        <div
          onClick={() => {
            const event = new KeyboardEvent("keydown", {
              key: "k",
              ctrlKey: true,
              metaKey: false,
            })
            document.dispatchEvent(event)
          }}
          className=" flex items-center gap-2 px-2 sm:py-2 rounded-full border border-slate-200 bg-white shadow-sm transition-all cursor-pointer active:scale-95
          "
        >
          <Search size={16} />

          <div className="flex items-center gap-1">
            <kbd
              className=" hidden sm:inline-flex px-1.5 py-0.5 rounded border border-slate-300 bg-white text-[10px] font-mono text-slate-600
              "
            >
              Ctrl
            </kbd>
            <kbd
              className=" hidden sm:inline-flex px-1.5 py-0.5 rounded border border-slate-300 bg-white text-[10px] font-mono text-slate-600
              "
            >
              K
            </kbd>
          </div>
        </div>
      </div>
    </nav>
  )
}
