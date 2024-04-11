import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

const Projects = () => {
  return (
    <section>
      <div className="w-full flex justify-center items-center mb-4">
        <SectionHeading>Projects</SectionHeading>
      </div>
      <div>
        {projectsData.map((project, i) => (
          <Project
            key={i}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
