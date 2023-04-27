import React from "react";
// import "./Cover.scss";

const Cover = () => {
  return (
    <div id="cover" className="flex h-screen pb-12">
      <div className="m-auto">
        <img
          src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297503/portofolio.khairulhabibie.my.id/khairulhabibie_lyxqwr.webp"
          alt="khairul_habibie_img"
        />
        <h1 className="text-center">Khairul Habibie</h1>
        {/* <div className="sub-container">
          <a href="#about">About me</a>
          <a href="#skill">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#messege">messege</a>
        </div> */}
      </div>
    </div>
  );
};

export default Cover;
