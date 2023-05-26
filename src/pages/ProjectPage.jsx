import * as React from 'react';
import Navbar from '../container/Navbar';
import Projects from '../container/Projects';
import Footer from '../container/Footer';

// data
import { getProjects } from '../utils/projects-data';

function ProjectPage() {
  const [projects] = React.useState(() => getProjects());

  return (
    <>
      <Navbar />
      <Projects projects={projects} />
      <Footer />
    </>
  );
}

export default ProjectPage;
