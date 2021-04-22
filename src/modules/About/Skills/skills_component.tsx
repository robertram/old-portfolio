import React from "react";
import Tag from "@/src/component/Tag/tag_component";
import "./skills_component.scss";

const skills = [
  {
    category: "Web Development",
    items: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JS" },
      { name: "ReactJS" },
      { name: "NextJS" },
      { name: "NodeJS" },
    ],
  },
  {
    category: "BackEnd Languages",
    items: [{ name: "C#" }, { name: "Java" }, { name: "PHP" }],
  },
  {
    category: "Databases",
    items: [
      { name: "SQLServer" },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="Skills section">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <h1 className="title">Skills</h1>
        </div>
        <div className="col-desk-12 col-mob-4">
          {skills.map((item, index) => (
            <div key={index} className="Skills__itemContainer">
              <h2 className="subtitle2">{item.category}</h2>
              <div className="Skills__tagsContainer">
                {item.items.map((subitems, index2) => (
                  <div key={index2}>
                    <Tag text={subitems.name} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
