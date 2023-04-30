import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center">
        <div className="mx-24 -mt-32">
          <div className="">
            <div className="mb-5 font-bold">
              <h2 className="text-3xl">Hi!</h2>
              <h1 className="text-4xl">You can call me Khairul Habibie</h1>
            </div>
            <p className="text-lg w-5/6">
              I work with React Ecosystem, and write to remember how to rebuild
              and redefine fundamental concepts through mental models.
            </p>
          </div>
          <div className="flex my-8 font-bold space-x-4">
            <div className="rounded-md px-4 py-2 text-lg border border-gray-300 hover:bg-blue-700">
              Read the blog
            </div>
            <div className="rounded-md px-4 py-2 text-lg border border-gray-300 hover:bg-blue-700">
              <Link to="/about">Learn more about me</Link>
            </div>
          </div>
          <div className="flex space-x-6">
            <div>Resume</div>
            <div>khairulhabibie</div>
            <div>khairulhabibie</div>
          </div>
        </div>
      </div>
      <div className="relative bottom-28 left-0 right-0 text-center">
        Down Arrow
      </div>
    </>
  );
};

export default Home;
