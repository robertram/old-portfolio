import { Button } from "@/src/component/Button/button_component";
import Tag from "@/src/component/Tag/tag_component";
import React from "react";
import Header from "../../component/Header/header_component";
import "./about_component.scss";

const About: React.FunctionComponent = () => {
  return (
    <div className="About">
      <Header />
      <div className="About__body">
        <div className="grid">
          <div className="col-desk-12">
            <h1 className="title">Sobre Mi</h1>
          </div>
          <div className="col-desk-4">
            <img
              src="assets/shared/Foto.jpg"
              alt="Foto Robert Ramirez"
              className="About__photo"
            />
          </div>
          <div className="col-desk-8">
            <p className="body-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              illum quae architecto quis quisquam. Commodi ipsum excepturi error
              aperiam rerum magnam tempore facilis laborum? Adipisci eius
              aspernatur dicta alias animi.
            </p>
          </div>
          <div className="col-desk-12">
            <h1 className="title">Curriculum</h1>
          </div>
          <div className="col-desk-12">
            <Button text="Hola" className="Button" size="medium" url="/" />
          </div>
          <div className="col-desk-12">
            <h1 className="title">Skills</h1>
          </div>
          <div className="col-desk-12">
            <div className="About__tagsContainer">
              <Tag text="HTML" />
              <Tag text="CSS" />
              <Tag text="JS" />
            </div>
          </div>
          <div className="col-desk-12">
            <h1 className="title">Academic Education</h1>
            <h2 className="subtitle">ULACIT</h2>
            <h2 className="body-bold">Informatics engineering</h2>
            <h2 className="body-regular">2018-2020</h2>
            <img
              src="assets/shared/ULACIT.jpg"
              alt=""
              className="About__ulacitImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
