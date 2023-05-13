import * as React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ title, body, imgUrl, tags, link }) => {
  return (
    <section className="border border-gray-500 rounded-md aspect-square p-4 mb-4 text-sm">
      <div className="sm:h-1/3 overflow-hidden">
        <h1 className="font-bold text-lg h-1/3">{title}</h1>
        <p className="text-gray-400 text-sm mb-2 h-1/3 overflow-hidden  break-keep">
          {body}
        </p>
        <p className="h-1/2">{tags.map((tag) => `#${tag} `)}</p>
      </div>
      <figure className="overflow-y-hidden contaier sm:h-2/3">
        <img className="w-full" src={imgUrl} alt={title} />
      </figure>
      <div className="font-bold text-blue-300 text-right">
        <Link to={`/projects/${link}`}>See more {`>> `}</Link>
      </div>
    </section>
  );
};

export default ProjectItem;
