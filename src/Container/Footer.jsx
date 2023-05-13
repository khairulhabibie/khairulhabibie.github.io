import * as React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mt-10 md:mx-24 mx-4 text-center">
      <ul className="flex flex-row flex-wrap justify-evenly border-t-2 border-gray-500 py-5 gap-x-3 gap-y-1 text-sm text-gray-400">
        <li>Source Code</li>
        <li>Desaign</li>
        <li>Doc</li>
        <li>Book Notes</li>
        <li>Starter Temlilate</li>
        <li>Analytics</li>
        <li>Statistics</li>
        <li>Guestbook</li>
        <li>Subscribe</li>
        <li>RSS</li>
      </ul>
      <div className="my-7 space-y-2">
        <p>Reach me out</p>
        <ul className="flex justify-center gap-5 mt-1 text-gray-400 text-2xl">
          <li>
            <MdOutlineMailOutline />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
      </div>
      <p className="text-gray-400">© Khairul Habibie - Got any feedback?</p>
    </div>
  );
};

export default Footer;
