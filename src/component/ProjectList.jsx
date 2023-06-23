import * as React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <div className="w-full gap-3 mx-auto md:columns-3 sm:columns-2">
      {projects.map((project) => {
        return <ProjectItem key={project.id} id={project.id} {...project} />;
      })}
    </div>
  );
}

export default ProjectList;
