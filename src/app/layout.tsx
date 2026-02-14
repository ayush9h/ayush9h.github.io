import type { Metadata } from "next";
import "./globals.css";
import {Geist} from 'next/font/google'
import ArrowUp from "./elements/arrow";

const funnel_display = Geist({subsets:['latin'], weight:'400'})

export const metadata: Metadata = {
  title:{
    "default":"Ayush Kumar - Portfolio",
    "template":"%s - Portfolio"
  },
  description: "Ayush Kumar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${funnel_display.className}`}
      >
        <ArrowUp/>
        {children}
      </body>
    </html>
  );
}
