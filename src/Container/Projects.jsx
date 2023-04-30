import React from "react";

const Projects = ({ projects }) => {
  return (
    <div className="mt-28 mx-24">
      {projects.map((project) => {
        return console.log(project.id);
      })}
    </div>
  );
};
export default Projects;
