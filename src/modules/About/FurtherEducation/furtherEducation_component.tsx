import CardTextImage from "@/src/component/CardTextImage/cardTextImage_component";
import React from "react";
import "./furtherEducation_component.scss";

const FurtherEducationItems = [
  {
    image: "assets/home/HomeCard1.jpg",
    title: "First Place Evolution Ideas",
    description: "Design Thiniking competition",
    date: "December 2019",
    url: "/",
  },
  {
    image: "assets/home/HomeCard1.jpg",
    title: "IBM Experience",
    description: "IBM Mentoring Program",
    date: "December 2019",
    url: "/",
  },
];

const FurtherEducation = () => {
  return (
    <div className="FurtherEducation section">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <h1 className="title">Further Education</h1>
          <div className="FurtherEducation__cardsContainer">
            {FurtherEducationItems.map((item, index) => (
              <div key={index}>
                <CardTextImage
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  url={item.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurtherEducation;
