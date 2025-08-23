import Navbar from "./components/navbar";
import Landing from "./components/landing";
import About from "./components/about"
import Projects from "./components/projects";
export default function Home() {
  return (
   <>
      <Navbar/>
      <div className="max-w-7xl mx-auto">
      <Landing/>
      <About/>
      <Projects/>
      </div>
   </>
  );
}
