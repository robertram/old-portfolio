import React from "react";
import "./education_component.scss";

const Education = () => {
  return (
    <div className="Education section">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <h1 className="title">Academic Education</h1>
          <div className="Education__information">
            <h2 className="Education__bodyText subtitle">ULACIT</h2>
            <p className="Education__bodyText body-bold">
              Informatics engineering
            </p>
            <p className="Education__bodyText body-regular">2018-2020</p>
          </div>
          <img
            src="assets/shared/ULACIT.jpg"
            alt=""
            className="Education__image"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
