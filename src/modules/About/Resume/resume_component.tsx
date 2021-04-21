import React from "react";
import Button from "@/src/component/Button/button_component";
import "./resume_component.scss";

const Resume = () => {
  return (
    <div className="Resume section">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <h1 className="title">Resume</h1>
        </div>
        <div className="col-desk-12 col-mob-4">
          <Button
            text="Hola"
            className="Button"
            size="medium"
            url="https://portfolio-robertram.s3.amazonaws.com/Resume.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
