import * as React from "react";
import Navbar from "../Container/Navbar";
import Projects from "../Container/Projects";
import Footer from "../Container/Footer";

// data
import { getProjects } from "../Utils/projects-data";

const ProjectPage = () => {
  const [projects] = React.useState(() => getProjects());

  return (
    <>
      <Navbar />
      <Projects projects={projects} />
      <Footer />
    </>
  );
};

export default ProjectPage;
