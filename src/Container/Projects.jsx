import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = ({ projects }) => {
  return (
    <div className="mt-28 mx-24 ">
      <div className="mb-4">
        <h1 className="text-3xl mb-1">Projects</h1>
        <p>Showcase of my works on frontend development.</p>
      </div>
      <div className="flex flex-wrap justify-between">
        {projects.map((project) => {
          return <ProjectItem key={project.id} id={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};
export default Projects;
