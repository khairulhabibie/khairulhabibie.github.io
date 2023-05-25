import * as React from 'react';
import { Link } from 'react-router-dom';

function ProjectNoTFound() {
  return (
    <div className="space-y-5 text-center">
      <div className="mx-24 text-5xl mt-28">Project NoT Found...</div>
      <div className="text-blue-300">
        <Link to="/projects">
          {'<< '}
          Back to Projects !
        </Link>
      </div>
    </div>
  );
}

export default ProjectNoTFound;
