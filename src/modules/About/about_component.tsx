import React from "react";
import Header from "../../component/Header/header_component";
import "./about_component.scss";
import Description from "./Description/description_component";
import Education from "./Education/education_component";
import FurtherEducation from "./FurtherEducation/furtherEducation_component";
import Resume from "./Resume/resume_component";
import Skills from "./Skills/skills_component";

const About: React.FunctionComponent = () => {
  return (
    <div className="About">
      <Header />
      <div className="About__body">
        <Description />
        <Resume />
        <Skills />
        <Education />
        <FurtherEducation />
      </div>
    </div>
  );
};

export default About;
