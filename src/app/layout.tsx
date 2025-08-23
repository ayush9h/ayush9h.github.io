import type { Metadata } from "next";
import "./globals.css";




export const metadata: Metadata = {
  title: "Portfolio",
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
