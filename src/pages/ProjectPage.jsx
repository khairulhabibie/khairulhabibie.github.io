import * as React from 'react';
import Projects from '../container/Projects';

// data
import { getProjects } from '../utils/projects-data';

function ProjectPage() {
  const [projects] = React.useState(() => getProjects());

  return <Projects projects={projects} />;
}

export default ProjectPage;
