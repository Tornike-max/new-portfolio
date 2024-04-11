import Intro from "@/components/Intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import React from "react";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
    </main>
  );
};

export default Home;
