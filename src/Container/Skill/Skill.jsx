import React from "react";
import dbTechIcons from "../../Utils/dbTechIcons.json";
// style
import "./Skill.scss";

const Skill = () => {
  return (
    <div id="skill" className="skill">
      <div className="container">
        <h1>SKILL</h1>
        <p className="p-icon">
          {dbTechIcons.map((dbTechIcon) => (
            <i
              key={`${dbTechIcon.id}`}
              className={`${dbTechIcon.className}`}
            ></i>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Skill;
