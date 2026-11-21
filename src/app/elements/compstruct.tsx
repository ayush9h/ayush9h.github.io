"use client";
import { ReactNode } from "react";
import { Tooltip } from "@base-ui/react/tooltip";

export function SectionWrapper({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-24 md:grid-cols-12 mx-auto bg-white dark:bg-black  ${className}`}
    >
      <div className="col-span-1 md:col-span-2 border border-stone-200/50 dark:border-stone-900"></div>

      <div className="col-span-22 md:col-span-8 border-t border-b border-stone-200/50 dark:border-stone-900 bg-white dark:bg-black ">
        {children}
      </div>

      <div className="col-span-1 md:col-span-2 border border-stone-200/50 dark:border-stone-900"></div>
    </div>
  );
}

export function SectionHeader({
  title,
  id,
  className = "",
}: {
  title: string | ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <h1
      className={`text-2xl text-stone-950 dark:text-stone-100 font-medium font-mont px-4 py-2 ${className}`}
      id={id}
    >
      {title}
    </h1>
  );
}

export function SectionDivider() {
  return (
    <div className="grid grid-cols-24 md:grid-cols-12 mx-auto bg-white dark:bg-black">
      <div
        className=" col-span-1 md:col-span-2 border border-stone-200/50 dark:border-stone-900 bg-[image:var(--bg-background-light)] dark:bg-[image:var(--bg-background-dark)]
        "
      ></div>

      <div
        className=" col-span-22 md:col-span-8 h-10 border-t border-b border-stone-200/50 dark:border-stone-900 bg-[image:var(--bg-background-light)] dark:bg-[image:var(--bg-background-dark)]
        "
      ></div>

      <div
        className="col-span-1 md:col-span-2 border border-stone-200/50 dark:border-stone-900 bg-[image:var(--bg-background-light)] dark:bg-[image:var(--bg-background-dark)]
        "
      ></div>
    </div>
  );
}

export function Tip({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger render={<span className={`inline-flex ${className}`} />}>
        {children}
      </Tooltip.Trigger>

      <Tooltip.Portal>
        <Tooltip.Positioner sideOffset={8}>
          <Tooltip.Popup className="rounded-md border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 px-2 py-1 font-mont text-xs text-stone-600 dark:text-stone-300 shadow-sm">
            {label}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
