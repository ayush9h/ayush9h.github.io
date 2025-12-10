"use client"
import { useEffect } from "react"
import Navbar from "./components/navbar"
import Landing from "./components/landing"
import About from "./components/about"
import Projects from "./components/projects"
import Connect from "./components/connect"
import Lenis from "lenis"

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  const actions = [
      {
        id: "blog",
        name: "Blog",
        shortcut: ["b"],
        keywords: "writing words",
        perform: () => (window.location.pathname = "blog"),
      },
      {
        id: "contact",
        name: "Contact",
        shortcut: ["c"],
        keywords: "email",
        perform: () => (window.location.pathname = "contact"),
      },
    ]

  return (


    
    <>

      <Navbar />
      <Landing />
      <About />
      <Projects />
      
      <Connect />
    </>
  )
}
