import React from "react";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "@/src/i18n/i18n.js";
import "./description_component.scss";
import Button from "@/src/component/Button/button_component";

const Description = () => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div
      className="Description section "
      id="about"
      data-aos="fade-up-right"
      data-aos-duration="1500"
    >
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <h1 className="title">{t("about_title")}</h1>
        </div>
        <div className="col-desk-4 col-mob-4">
          <img
            src="assets/shared/Foto.jpg"
            alt="Foto Robert Ramirez"
            className="Description__photo"
          />
        </div>
        <div className="col-desk-8 col-mob-4">
          <p className="body-regular Description__description">
            {t("about_description")}
          </p>
          <div className="Description__resumeButtonContainer">
            <Button
              text={t("about_resume_button_text")}
              className="Button"
              size="medium"
              url={t("about_resume_button_link")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
