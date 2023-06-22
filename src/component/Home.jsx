import * as React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { title, description, inLink } from '../utils/translate/home';
// import { MdContactPage } from 'react-icons/md';

function Home() {
  return (
    <>
      <section className="flex flex-col justify-center w-full h-screen">
        <div className="mx-4 md:mx-24 md:-mt-32 ">
          <div className="">
            <div className="mb-5 font-bold">
              <h2 className="text-xl md:text-3xl">Hi!</h2>
              {title.map((text) => (
                <h1 key={text.id} className="text-2xl md:text-4xl">
                  {text.EN}
                </h1>
              ))}
            </div>
            {description.map((text) => (
              <p key={text.id} className="w-full text-lg md:w-5/6">
                {text.EN}
              </p>
            ))}
          </div>
          <ul className="flex flex-wrap gap-4 my-8">
            {inLink.map((text) => (
              <li key={text.id}>
                <Link to={text.path}>
                  <p className="navbar-btn ">{text.EN}</p>
                </Link>
              </li>
            ))}
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
