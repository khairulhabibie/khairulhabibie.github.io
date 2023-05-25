import * as React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="text-center">
      <div className="mx-24 mb-5 text-5xl mt-28">Page Not Found</div>
      <div className="text-blue-300">
        <Link to="/">
          {'<< '}
          Back to Home !
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
