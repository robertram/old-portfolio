import React from "react";
import Tag from "@/src/component/Tag/tag_component";
import "./skills_component.scss";

const Skills = () => {
  return (
    <div className="Skills section">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <h1 className="title">Skills</h1>
        </div>
        <div className="col-desk-12 col-mob-4">
          <div className="Skills__tagsContainer">
            <Tag text="HTML" />
            <Tag text="CSS" />
            <Tag text="JS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
