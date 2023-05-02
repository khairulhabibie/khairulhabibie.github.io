import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";

const Home = () => {
  return (
    <>
      <section className="h-screen w-full flex flex-col justify-center">
        <div className="mx-4 md:mx-24 md:-mt-32 ">
          <div className="">
            <div className="mb-5 font-bold">
              <h2 className="text-xl md:text-3xl">Hi!</h2>
              <h1 className=" text-2xl md:text-4xl">
                You can call me Khairul Habibie
              </h1>
            </div>
            <p className="text-lg md:w-5/6 w-full">
              I work with React Ecosystem, and write to remember how to rebuild
              and redefine fundamental concepts through mental models.
            </p>
          </div>
          <ul className="my-8 font-bold flex flex-wrap gap-4">
            <li className="rounded-md px-4 py-2 text-lg border border-gray-300 hover:bg-gray-600 ">
              Read the blog
            </li>
            <li className="rounded-md px-4 py-2 text-lg border border-gray-300 hover:bg-gray-600 ">
              <Link to="/about">Learn more about me</Link>
            </li>
          </ul>

          <ul className="flex flex-wrap gap-3">
            <li className="flex items-center space-x-1">
              <MdContactPage /> <p>Resume</p>
            </li>
            <li className="flex items-center space-x-1">
              <FaGithub />
              <p>khairulhabibie</p>
            </li>
            <li className="flex items-center space-x-1">
              <FaTwitter />
              <p>khairulhabibie</p>
            </li>
          </ul>
        </div>
      </section>
      {/* <div className="relative bottom-28 left-0 right-0 text-center">
        Down Arrow
      </div> */}
    </>
  );
};

export default Home;
