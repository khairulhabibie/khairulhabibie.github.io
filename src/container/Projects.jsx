import * as React from 'react';
import ProjectItem from './ProjectItem';

function Projects({ projects }) {
  return (
    <div className="container mx-4 mt-28 md:mx-24">
      <div className="mb-4">
        <h1 className="mb-1 text-3xl font-bold">Projects</h1>
        <p>Showcase of my works on frontend development.</p>
      </div>
      <div className="w-full gap-3 mx-auto md:columns-3 sm:columns-2">
        {projects.map((project) => {
          return <ProjectItem key={project.id} id={project.id} {...project} />;
        })}
      </div>
    </div>
  );
}
export default Projects;