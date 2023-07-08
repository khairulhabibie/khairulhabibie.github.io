import React, { useState } from 'react';
import ProjectList from '../component/ProjectList';

// data
import { getProjects } from '../utils/projects-data';

function ProjectPage() {
  const [projects] = useState(() => getProjects());
  return (
    <>
      <h1 className="mb-1 text-3xl font-bold">PROJECTS</h1>
      <p className="mb-4">Showcase of my works on frontend development.</p>
      <ProjectList projects={projects} />
    </>
  );
}

export default ProjectPage;
