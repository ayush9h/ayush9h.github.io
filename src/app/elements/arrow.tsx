'use client'
import { ArrowUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export default function ArrowUp() {

  const [visible, setVisible] = useState(false);
  useEffect(()=>{

    const handleScroll = () =>{
        setVisible(window.scrollY > 300);
    }

    window.addEventListener('scroll',handleScroll);

    return ()=>window.removeEventListener('scroll', handleScroll)

  },[])

  if(!visible) return null;

  return (
    <div onClick={()=> window.scrollTo({top:0, behavior:'smooth'})} className="fixed bottom-10 right-10 z-50 p-2 rounded-md cursor-pointer hover:bg-slate-200/60 hover:text-black group">
      <ArrowUpIcon className="h-5 w-5 text-slate-400 group-hover:text-black" />
    </div>
  );
}
