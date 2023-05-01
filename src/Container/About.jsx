import React from "react";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="mb-5 text-2xl font-bold">
        <h1>About</h1>
        <h1>Khairul Habibie</h1>
      </div>
      <div className="flex align-top">
        <div className="w-2/3">
          <article className="space-y-4 text-gray-300">
            <p>
              Hello! I'm Khairul. I started learning web development in Januari
              2022. I have nothing much to do so I decided to learn web
              development from a dicoding course, then started watching a bunch
              of youtube videos to explore more about web development especially
              frontend development.
            </p>
            <p>
              There are a lot of things and technologies to learn in frontend
              development and I am motivated to learn as much as possible. I
              enjoy learning something new and getting feedback to make myself
              better and improve.
            </p>
            <p>
              In this website I will be writing some blogs and showcase my
              projects. I believe that writing what I have learned is the best
              way to remember things, and I can share my knowledge along the
              way. So do contact me and I will be very happy to help!
            </p>
          </article>
          <div className="my-20 space-y-4">
            <h1 className="font-bold text-2xl">Current Favorite Tech Stack</h1>
            <ul className="flex space-x-3 text-4xl ">
              <li>
                <FaReact />
              </li>
              <li>
                <SiJavascript />
              </li>
              <li>
                <SiTailwindcss />
              </li>
              <li>
                <FaNodeJs />
              </li>
            </ul>
          </div>
          <div className="my-5 space-y-2">
            <h1 className="font-bold text-2xl">Contact</h1>
            <p className="text-gray-300">
              Do contact me if you need my opinion about web development,
              especially frontend works. I'll be happy to help! (find my email
              in the footer)
            </p>
          </div>
        </div>
        <figure className="w-1/3">
          <div>
            <img
              src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297503/portofolio.khairulhabibie.my.id/khairulhabibie_lyxqwr.webp"
              alt="khairul-habibie.webp"
            />
          </div>
        </figure>
      </div>
    </>
  );
};

export default About;
