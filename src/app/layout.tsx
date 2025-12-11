import type { Metadata } from "next";
import "./globals.css";

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
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
