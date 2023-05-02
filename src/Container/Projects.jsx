import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = ({ projects }) => {
  return (
    <div className="mt-28 md:mx-24 mx-4">
      <div className="mb-4">
        <h1 className="font-bold text-3xl mb-1">Projects</h1>
        <p>Showcase of my works on frontend development.</p>
      </div>
      <div className="flex flex-wrap md:justify-between justify-center gap-y-12 gap-x-1 w-full container">
        {projects.map((project) => {
          return <ProjectItem key={project.id} id={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
