import React, { useContext, useEffect } from "react";
import Tag from "@/src/component/Tag/tag_component";
import "./work_component.scss";
import BigCard from "@/src/component/BigCard/bigCard_component";
import { WorkContext } from "../../../../contexts/WorkContext";

const workItems = [
  {
    image: "assets/Home/HomeCard1.jpg",
    title: "OMNi Investors Page",
    description: "OMNi Investors",
    date: "December 2020",
    link: "https://invest.omni.cr/",
    technologies: [{ name: "ReactJS" }, { name: "SCSS" }],
  },
  {
    image: "assets/Home/HomeCard1.jpg",
    title: "React Native demo",
    description: "Unsplash demo",
    date: "August 2020",
    link: "https://github.com/robertram/unsplash-demo",
    technologies: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "React Navigation" },
      { name: "React Navigation" },
      { name: "React Navigation" },
      { name: "React Navigation" },
    ],
  },
  {
    image: "assets/Home/HomeCard1.jpg",
    title: "React Native demo",
    description: "Unsplash demo",
    date: "August 2020",
    link: "https://github.com/robertram/unsplash-demo",
    technologies: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "React Navigation" },
    ],
  },
];

const Work = () => {
  const { fetchWorks } = useContext(WorkContext);
  useEffect(() => {
    fetchWorks();
  });

  return (
    <div className="Work section" id="work">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <h1 className="title">Work</h1>
        </div>
        <div className="col-desk-12 col-mob-4">
          <div className="Work__bigCardsContainer grid">
            {workItems.map((item, index2) => (
              <div
                key={index2}
                className="Work__bigCardContainer col-desk-6 col-mob-4"
              >
                <BigCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  link={item.link}
                  tags={item.technologies}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
