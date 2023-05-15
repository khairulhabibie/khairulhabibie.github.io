import * as React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-4 mt-10 text-center  md:mx-24">
      <ul className="flex flex-row flex-wrap py-5 text-sm text-gray-400 border-t-2 border-gray-500 justify-evenly gap-x-3 gap-y-1">
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
      <div className="space-y-2 my-7">
        <p>Reach me out</p>
        <ul className="flex justify-center gap-5 mt-1 text-2xl text-gray-400">
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
