import React from "react";

const Cover = () => {
  return (
    <div id="cover" className="flex">
      <div className="w-4/6">
          <h2 className="text-2xl">Summary</h2>
          <article>
            Front-End Developer with a proven ability to collaborate effectively
            with senior developers while spending extra time to be mentored.
            Enjoy working closely with team members to ensure workloads are
            effectively redirected to bottlenecks and personally picking up the
            slack when necessary. With a passion for both personal growth and
            for software development, I attended a 1000+ hour coding bootcamp to
            learn new languages while sharpening existing skills. Ready to apply
            my passion for coding to a talented engineering team to develop
            quality solutions.
          </article>
      </div>
      <div className="w-2/6">
        <img 
            src="https://res.cloudinary.com/de8q1kwuh/image/upload/v1680297503/portofolio.khairulhabibie.my.id/khairulhabibie_lyxqwr.webp"
            alt="khairul_habibie_img"
          />
      </div>
    </div>
  );
};

export default Cover;
