import React from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className="flex flex-col">
      <div className="mb-5 font-bold">
        <h2 className="text-xl md:text-3xl">Hi!</h2>
        <h1 className="text-2xl md:text-4xl">You can call me Khairul</h1>
      </div>
      <p className="w-full text-lg md:w-5/6">
        I work with React Ecosystem, and write to remember how to rebuild and
        redefine fundamental concepts through mental models.
      </p>
      <ul className="flex flex-wrap gap-4 my-8">
        <li>
          <Link to="/project">
            <p className="rounded-lg btn">Read the Project</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p className="rounded-lg btn">Learn more about me</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
