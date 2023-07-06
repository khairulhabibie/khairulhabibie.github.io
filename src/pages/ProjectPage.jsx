import { useState } from 'react';
import ProjectList from '../component/ProjectList';

// data
import { getProjects } from '../utils/projects-data';

function ProjectPage() {
  const [projects] = useState(() => getProjects());
  return (
    <div className="container h-screen mx-4 mt-12 md:mx-24">
      <h1 className="mb-1 text-3xl font-bold">PROJECTS</h1>
      <p className="mb-4">Showcase of my works on frontend development.</p>
      <ProjectList projects={projects} />;
    </div>
  );
}

export default ProjectPage;
