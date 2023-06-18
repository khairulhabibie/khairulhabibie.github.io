import * as React from 'react';
import ProjectList from '../container/ProjectList';

// data
import { getProjects } from '../utils/projects-data';

function ProjectPage() {
  const [projects] = React.useState(() => getProjects());

  return <ProjectList projects={projects} />;
}

export default ProjectPage;
