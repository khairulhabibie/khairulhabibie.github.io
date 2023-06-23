import * as React from 'react';
import ProjectList from '../component/ProjectList';

// data
import { getProjects } from '../utils/projects-data';

function ProjectPage() {
  const [projects] = React.useState(() => getProjects());
  return (
    <div className="container mx-4 mt-28 md:mx-24">
      <h1 className="mb-1 text-3xl font-bold">Projects</h1>
      <p className="mb-4">Showcase of my works on frontend development.</p>
      <ProjectList projects={projects} />;
    </div>
  );
}

export default ProjectPage;
