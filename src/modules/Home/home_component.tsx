import React from "react";
import Header from "../../component/Header/header_component";
import Footer from "../../component/Footer/footer_component";
import Card from "../../component/Card/card_component";
import Description from "./Description/description_component";
import Education from "./Education/education_component";
import FurtherEducation from "./FurtherEducation/furtherEducation_component";
import Skills from "./Skills/skills_component";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "../../i18n/i18n.js";
import "./home_styles.scss";
import animationMap from "@/assets/shared/computer.json";
import Hero from "./Hero/hero_component";
import Work from "./Work/work_component";

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="Home">
      <Header />

      <div className="Home__body">
        <Hero />
        {/* About Me */}
        <Description />
        <Skills />
        <Education />
        <FurtherEducation />
        {/* My Work */}
        <Work />
        <Footer />
      </div>

      {/* <Footer />*/}
    </div>
  );
};

export default Home;
