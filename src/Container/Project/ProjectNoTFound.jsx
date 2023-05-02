import React from "react";
import { Link } from "react-router-dom";

const ProjectNoTFound = () => {
  return (
    <div className="text-center space-y-5">
      <div className="mt-28 mx-24 text-5xl">Project NoT Found...</div>
      <div className="text-blue-300">
        <Link to="/projects">{`<< `}Back to Projects !</Link>
      </div>
    </div>
  );
};

export default ProjectNoTFound;
