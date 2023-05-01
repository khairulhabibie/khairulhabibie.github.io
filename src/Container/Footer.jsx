import React from "react";

const Footer = () => {
  return (
    <div className=" mt-10 mx-24 text-center">
      <ul className="flex flex-row flex-wrap justify-evenly border-t-2 border-gray-500 py-5 space-x-6 gap-y-1 text-sm text-gray-400">
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
      <div className="mb-7">
        <p>Reach me out</p>
        <ul className="flex justify-center gap-5 mt-1 text-gray-400">
          <li>Email</li>
          <li>Github</li>
          <li>Linkedin</li>
          <li>Twitter</li>
        </ul>
      </div>
      <p>© Khairul Habibie</p>
    </div>
  );
};

export default Footer;
