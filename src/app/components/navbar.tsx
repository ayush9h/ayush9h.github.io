"use client"
export default function Navbar(){


    return(
      
<div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-100"></div>
      <nav 
        className="fixed top-0 left-0 w-full border-b border-slate-100 p-2 flex justify-around items-center bg-white z-50"
      >
        <div className="text-md font-bebas font-bold">
            <h1>AYUAR</h1>
        </div>

        <div className="text-xs font-mont cursor-pointer font-semibold text-slate-700">
            
        </div>
      </nav>
     
      <div className="col-span-2 border border-slate-100"></div>
    </div>
     
    )
}
