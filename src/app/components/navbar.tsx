"use client"

export default function Navbar(){


    return(
      <nav 
        className="fixed top-0 left-0 w-full border-b border-zinc-300 p-2 flex justify-around items-center bg-white z-50"
      >
        <div className="text-md font-bebas font-bold">
            <h1>AYUAR</h1>
        </div>

        <div className="text-xs font-mont cursor-pointer font-semibold text-slate-700">
            <button 
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} 
              className="uppercase p-2 mr-6 hover:underline transition-all"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} 
              className="uppercase p-2 mr-6 hover:underline transition-all"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })} 
              className="uppercase p-2 mr-6 hover:underline transition-all"
            >
              Connect
            </button>
        </div>
      </nav>
    )
}
