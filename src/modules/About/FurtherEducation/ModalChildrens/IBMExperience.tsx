import React from "react";
import Button from "@/src/component/Button/button_component";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "@/src/i18n/i18n.js";

const IBMExperience = ({ title, description, date }) => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="IBMExperience">
      <p className="body-regular">{description}</p>
      <p className="body-regular">{date}</p>
      <div className="DesignThinking__descriptionContainer">
        <p className="IBMExperience__description">{t("ibm_description")}</p>
      </div>
      <Button
        text={t("ibm_button_text")}
        className="Button"
        size="medium"
        url={t("ibm_button_link")}
      />
    </div>
  );
};

export default IBMExperience;
