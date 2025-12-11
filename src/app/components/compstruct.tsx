"use client";

import { ReactNode } from "react";

export function SectionWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-12 mx-auto ${className}`}>
      <div className="col-span-2 border border-slate-200/50"></div>
      <div className="col-span-8 border-t border-b border-slate-200/50 bg-white">
        {children}
      </div>
      <div className="col-span-2 border border-slate-200/50"></div>
    </div>
  );
}

export function SectionHeader({ title, id }: { title: string | ReactNode, id:string  }) {
  return (
    <h1 className="text-3xl text-zinc-950 font-medium font-mont p-4" id={id}>
      {title}
    </h1>
  );
}

export function SectionDivider() {
  return (
    <div className="grid grid-cols-12 mx-auto">
      <div className="col-span-2 border border-slate-200/50 bg-[image:var(--bg-background)]"></div>
      <div className="col-span-8 h-10 border-t border-b border-slate-200/50 bg-[image:var(--bg-background)]"></div>
      <div className="col-span-2 border border-slate-200/50 bg-[image:var(--bg-background)]"></div>
    </div>
  );
}
