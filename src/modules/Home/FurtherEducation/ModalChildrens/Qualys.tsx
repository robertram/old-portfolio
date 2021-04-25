import React from "react";
import Button from "@/src/component/Button/button_component";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "@/src/i18n/i18n.js";

const Qualys = ({ title, description, date }) => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="">
      <div className="Qualys__titleContainer">
        <p className="body-regular">{description}</p>
        <p className="body-bold">{date}</p>
      </div>

      <div className="Qualys__descriptionContainer">
        <p className="Qualys__description">{t("qualys_description")}</p>
        <Button
          text={t("qualys_button_text")}
          className="Button"
          size="medium"
          url={t("qualys_button_link")}
        />
      </div>
    </div>
  );
};

export default Qualys;
