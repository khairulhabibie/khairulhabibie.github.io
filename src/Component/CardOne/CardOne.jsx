import React from "react";
// style
import "./CardOne.scss";
import { GoLink } from "react-icons/go";

const CardOne = ({ img, text, link }) => {
  return (
    <div className="Card">
      <div className="image">
        <img src={img} alt={text} />
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <p>
          {text} <GoLink class="icon" />
        </p>
      </a>
    </div>
  );
};

export default CardOne;
