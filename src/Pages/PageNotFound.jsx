import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="text-center">
      <div className="mt-28 mx-24 text-5xl mb-5">Page Not Found</div>
      <div className="text-blue-300">
        <Link to="/">{`<< `}Back to Home !</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
