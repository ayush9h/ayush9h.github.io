import type { Metadata } from "next";
import "./globals.css";

import {Funnel_Display} from 'next/font/google'

const funnel_display = Funnel_Display({subsets:['latin'], weight:'400'})

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
        {children}
      </body>
    </html>
  );
}
