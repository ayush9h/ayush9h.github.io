import { ReactNode } from "react";

export function SectionWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-12 mx-auto bg-white dark:bg-black  ${className}`}
    >
      <div className="col-span-2 border border-stone-200/50 dark:border-stone-900"></div>

      <div className="col-span-8 border-t border-b border-stone-200/50 dark:border-stone-900 bg-white dark:bg-black ">
        {children}
      </div>

      <div className="col-span-2 border border-stone-200/50 dark:border-stone-900"></div>
    </div>
  );
}

export function SectionHeader({
  title,
  id,
}: {
  title: string | ReactNode;
  id: string;
}) {
  return (
    <h1
      className="text-2xl text-stone-950 dark:text-stone-100 font-medium font-mont px-4 py-2 "
      id={id}
    >
      {title}
    </h1>
  );
}

export function SectionDivider() {
  return (
    <div className="grid grid-cols-12 mx-auto bg-white dark:bg-black">
      <div
        className=" col-span-2 border border-stone-200/50 dark:border-stone-900 bg-[image:var(--bg-background-light)] dark:bg-[image:var(--bg-background-dark)]
        "
      ></div>

      <div
        className=" col-span-8 h-10 border-t border-b border-stone-200/50 dark:border-stone-900 bg-[image:var(--bg-background-light)] dark:bg-[image:var(--bg-background-dark)]
        "
      ></div>

      <div
        className="col-span-2 border border-stone-200/50 dark:border-stone-900 bg-[image:var(--bg-background-light)] dark:bg-[image:var(--bg-background-dark)]
        "
      ></div>
    </div>
  );
}
