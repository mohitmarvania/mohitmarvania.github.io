import { NavBar } from "@/components/helper/NavBar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Publications } from "@/components/sections/Publications";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-6 md:px-8 lg:px-10 px-5 overflow-x-clip">
      <div>
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Publications />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
