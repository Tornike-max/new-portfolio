"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" className="scroll-mt-28 z-50">
      <div ref={ref} className="w-full flex justify-center items-center mb-10">
        <SectionHeading>Projects</SectionHeading>
      </div>
      <div>
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <Project
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
