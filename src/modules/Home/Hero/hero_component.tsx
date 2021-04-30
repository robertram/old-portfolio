import React from "react";
import Lottie from "lottie-react";
import Button from "@/src/component/Button/button_component";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "@/src/i18n/i18n";
import "./hero_component.scss";
import animationMap from "@/assets/shared/computer.json";
import { scroller } from "react-scroll";

const Hero = () => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="Hero" id="hero">
      <div className="Hero__wrapper grid">
        <div className="col-desk-6 col-mob-4">
          <div className="Hero__animation" data-aos="fade-right">
            <Lottie animationData={animationMap} loop={true} autoPlay={false} />
          </div>
        </div>
        <div className="col-desk-6 col-mob-4">
          <div className="Hero__text" data-aos="fade-left">
            <h1 className="title">Im Robert Ramirez</h1>
            <h1 className="subtitle">Web Developer</h1>
            <Button
              text={t("hero_about_button_text")}
              className="SecondaryButtonLight"
              size="medium"
              action={() => {
                scroller.scrollTo("about", {
                  smooth: "true",
                  offset: -100,
                });
              }}
              notBlank
            />
            <Button
              text={t("hero_work_button_text")}
              className="Button"
              action={() => {
                scroller.scrollTo("work", {
                  smooth: "true",
                  offset: -100,
                });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
