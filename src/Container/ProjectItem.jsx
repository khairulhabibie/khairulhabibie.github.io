import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ title, body, img, tags, link }) => {
  return (
    <section className="relative md:w-72 w-full border border-gray-500 p-4 rounded-md aspect-square">
      <h1 className="font-bold">{title}</h1>
      <p className="text-gray-400 text-sm mb-2">{body}</p>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p>{tags.map((tag) => `#${tag} `)}</p>
        <figure className="h-44 overflow-y-hidden">
          <img src={img} alt={title} />
        </figure>
        <div className="font-bold text-blue-300 text-right">
          <Link to={`/projects/${link}`}>See more {`>> `}</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectItem;
