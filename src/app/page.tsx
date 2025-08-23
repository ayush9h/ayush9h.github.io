import Navbar from "./components/navbar";
import Landing from "./components/landing";
import About from "./components/about"
import Projects from "./components/projects";
export default function Home() {
  return (
   <>
      <Navbar/>
      <Landing/>
      <About/>
      <Projects/>
   </>
  );
}
