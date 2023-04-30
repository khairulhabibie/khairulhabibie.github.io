import React from "react";
import { Link } from "react-router-dom";
// import dbContacts from "../Utils/dbContacts.json";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between relative top-10 left-0 right-0 mx-24">
      <ul className="flex felx-row justify-between space-x-4">
        <li>
          <Link to="/.">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/Library">Library</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button>X</button>
    </nav>
  );
};

export default Navbar;
