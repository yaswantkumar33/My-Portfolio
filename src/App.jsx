import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Techonoliges from "./Components/Techonoliges";
import Experience from "./Components/experience";
import Projects from "./Components/Projects";
import Contact from "./Components/contact";
import StarsCanvas from "./Components/canvas/Stars";
import Education from "./Components/Education";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300  antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className=" fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-20 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Nav />
        <Hero />
        <About />
        <Techonoliges />
        <Experience />
        <Education />
        <Projects />
        <div className=" relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
};

export default App;
