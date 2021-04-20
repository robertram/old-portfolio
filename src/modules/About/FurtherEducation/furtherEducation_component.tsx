import CardTextImage from "@/src/component/CardTextImage/cardTextImage_component";
import React from "react";
import "./furtherEducation_component.scss";

const FurtherEducation = () => {
  return (
    <div className="FurtherEducation section">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <CardTextImage
            image="assets/home/HomeCard1.jpg"
            title="First Place Evolution Ideas"
          />
        </div>
      </div>
    </div>
  );
};

export default FurtherEducation;
