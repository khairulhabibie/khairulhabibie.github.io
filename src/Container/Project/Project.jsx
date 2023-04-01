import React from "react";
import CardOne from "../../Component/CardOne/CardOne";
import dbProjects from "../../Utils/dbProjects";
// style
import "./Project.scss";

const Project = () => {
  return (
    <div id="projects" className="projects">
      <section>
        <h1>Simple Projects</h1>
        <div className="container">
          {dbProjects.map((dbProject) => (
            <CardOne key={dbProject.id} {...dbProject} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
