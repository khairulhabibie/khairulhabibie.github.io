import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter } from 'react-icons/fa';
// import { MdContactPage } from 'react-icons/md';

function Home() {
  return (
    <>
      <section className="flex flex-col justify-center w-full h-screen">
        <div className="mx-4 md:mx-24 md:-mt-32 ">
          <div className="">
            <div className="mb-5 font-bold">
              <h2 className="text-xl md:text-3xl">Hi!</h2>
              <h1 className="text-2xl md:text-4xl">
                You can call me Khairul Habibie
              </h1>
            </div>
            <p className="w-full text-lg md:w-5/6">
              I work with React Ecosystem, and write to remember how to rebuild
              and redefine fundamental concepts through mental models.
            </p>
          </div>
          <ul className="flex flex-wrap gap-4 my-8 font-bold">
            <li className="px-4 py-2 text-lg border border-gray-300 rounded-md hover:bg-gray-600 ">
              <Link to="/projects">
                <p>Read the Project</p>
              </Link>
            </li>
            <li className="px-4 py-2 text-lg border border-gray-300 rounded-md hover:bg-gray-600 ">
              <Link to="/about">
                <p>Learn more about me</p>
              </Link>
            </li>
          </ul>

          <ul className="flex flex-wrap gap-3">
            {/* <li className="flex items-center space-x-1">
              <MdContactPage />
              <p>Resume</p>
            </li> */}
            <li className="flex items-center space-x-1">
              <FaGithub />
              <a href="https://github.com/khairulhabibie" target="__blank">
                <p>khairulhabibie</p>
              </a>
            </li>
            <li className="flex items-center space-x-1">
              <FaTwitter />
              <a href="https://twitter.com/khekhairul" target="__blank">
                <p>khairulhabibie</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* <div className="relative left-0 right-0 text-center bottom-28">
        Down Arrow
      </div> */}
    </>
  );
}

export default Home;
