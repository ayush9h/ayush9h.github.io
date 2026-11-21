"use client";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import About from "./components/about";
import Projects from "./components/projects";
import Stack from "./components/stack";
import Connect from "./components/connect";
import CommandMenu from "./components/terminal";

export default function Home() {
  return (
    <>
      <CommandMenu />
      <Navbar />
      <main className="pt-12">
        <Landing />
        <About />
        <Stack />
        <Projects />
        <Connect />
      </main>
    </>
  );
}
