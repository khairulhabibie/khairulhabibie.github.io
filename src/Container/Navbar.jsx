import * as React from "react";
import { Link } from "react-router-dom";
// import dbContacts from "../Utils/dbContacts.json";

const Navbar = () => {
  return (
    <>
      <div className="h-2 w-full bg-yellow-400"></div>
      <nav className="flex flex-row justify-between relative top-10 left-0 right-0 md:mx-24 mx-4">
        <ul className="flex felx-row justify-between space-x-4">
          <li className="hover:bg-gray-700 rounded-md px-1">
            <Link to="/.">Home</Link>
          </li>
          {/* <li className="hover:bg-gray-700 rounded-md px-1">
          <Link to="/blog">Blog</Link>
        </li> */}
          <li className="hover:bg-gray-700 rounded-md px-1">
            <Link to="/projects">Project</Link>
          </li>
          {/* <li className="hover:bg-gray-700 rounded-md px-1">
          <Link to="/library">Library</Link>
        </li> */}
          <li className="hover:bg-gray-700 rounded-md px-1">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-gray-700 rounded-md px-1">
            <Link to="/message">Message</Link>
          </li>
        </ul>
        <button></button>
      </nav>
    </>
  );
};

export default Navbar;
