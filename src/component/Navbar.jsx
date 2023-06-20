import * as React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="w-full h-2 bg-sky-400">-</div>
      <nav className="relative left-0 right-0 flex flex-row justify-between mx-4 top-10 md:mx-24">
        <ul className="flex justify-between space-x-4 felx-row">
          <li className="px-1 rounded-md hover:bg-gray-700">
            <Link to="/.">Home</Link>
          </li>
          <li className="px-1 rounded-md hover:bg-gray-700">
            <Link to="/projects">Project</Link>
          </li>
          <li className="px-1 rounded-md hover:bg-gray-700">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
