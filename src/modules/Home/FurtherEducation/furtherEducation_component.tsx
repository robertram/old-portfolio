import React, { useContext } from "react";
import "./furtherEducation_component.scss";
import CardTextImage from "@/src/component/CardTextImage/cardTextImage_component";
import Capacitate from "./ModalChildrens/Capacitate";
import DesignThinking from "./ModalChildrens/DesignThinking";
import IBMExperience from "./ModalChildrens/IBMExperience";
import Codecademy from "./ModalChildrens/Codecademy";
import { WorkContext } from "../../../../contexts/WorkContext";

const FurtherEducationItems = [
  {
    image: "assets/about/ulacit.png",
    title: "First Place Evolution Ideas",
    description: "Design Thiniking competition",
    date: "December 2019",
    url: "/",
    children: (
      <DesignThinking
        title="First Place Evolution Ideas"
        description="Design Thiniking competition"
        date="December 2019"
      />
    ),
  },
  {
    image: "assets/about/ibm.svg",
    title: "IBM Experience",
    description: "IBM Mentoring Program",
    date: "December 2019",
    url: "/",
    children: (
      <IBMExperience
        title="IBM Experience"
        description="IBM Mentoring Program"
        date="December 2019"
      />
    ),
  },
  {
    image: "assets/about/capacitate.jpg",
    title: "capacitateparael empleo.org",
    description: "Fundamentos de Virtualización.",
    date: "December 2019",
    url: "/",
    children: (
      <Capacitate
        title="IBM Experience"
        description="Fundamentos de Virtualización."
        date="December 2019"
      />
    ),
  },
  {
    image: "assets/about/qualys.png",
    title: "Qualys Free Training",
    description: "Vulnerability Management",
    date: "July 2019",
    url: "/",
    children: (
      <Capacitate
        title="Qualys Free Training"
        description="Vulnerability Management"
        date="July 2019"
      />
    ),
  },
  {
    image: "assets/about/codecademy.png",
    title: "Codecademy",
    description: "HTML, CSS and JavaScript Course",
    date: "December 2017",
    url: "/",
    children: (
      <Codecademy
        title="Codecademy"
        description="HTML, CSS and JavaScript Course"
        date="December 2017"
      />
    ),
  },
];

const FurtherEducation = () => {
  const { state } = useContext(WorkContext);
  return (
    <div className="FurtherEducation section">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <h1 className="title">Further Education</h1>
          <div className="FurtherEducation__cardsContainer">
            {state &&
              state.education?.map((item, index) => (
                <div
                  key={index}
                  className="FurtherEducation__cardTextImageContainer"
                >
                  <CardTextImage
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    url={item.url}
                    children={item.children}
                  />
                </div>
              ))}

            <br />
            <br />
            <br />
            {FurtherEducationItems.map((item, index) => (
              <div
                key={index}
                className="FurtherEducation__cardTextImageContainer"
              >
                <CardTextImage
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  url={item.url}
                  children={item.children}
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
