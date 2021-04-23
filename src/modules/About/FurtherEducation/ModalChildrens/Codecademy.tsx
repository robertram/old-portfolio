import React from "react";
import Button from "@/src/component/Button/button_component";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "@/src/i18n/i18n.js";

const Codecademy = ({ title, description, date }) => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="Codecademy">
      <p className="body-regular">{description}</p>
      <p className="body-regular">{date}</p>

      <div className="Codecademy__descriptionContainer">
        <p className="Codecademy__description">{t("codecademy_description")}</p>
        <img
          src="assets/about/CodecademyAchievements.png"
          alt=""
          className="Codecademy__image"
        />
        <img
          src="assets/about/CodecademyAchievements2.png"
          alt=""
          className="Codecademy__image"
        />
      </div>
    </div>
  );
};

export default Codecademy;
