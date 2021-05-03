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
import ScrollAnimation from "react-animate-on-scroll";

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="Home">
      <Header />

      <div className="Home__body">
        <ScrollAnimation animateIn="fadeIn" duration={5}>
          <Hero />
        </ScrollAnimation>
        <div className="wow bounceIn">
          <Description />
        </div>
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
