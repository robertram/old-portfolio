import React from "react";
import Button from "@/src/component/Button/button_component";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "@/src/i18n/i18n.js";

const Capacitate = ({ title, description, date }) => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="">
      <div className="Capacitate__titleContainer">
        <p className="body-regular">{description}</p>
        <p className="body-bold">{date}</p>
      </div>

      <div className="Capacitate__descriptionContainer">
        <p className="Capacitate__description">{t("capacitate_description")}</p>
        <Button
          text={t("capacitate_button_text")}
          className="Button"
          size="medium"
          url={t("capacitate_button_link")}
        />
      </div>
    </div>
  );
};

export default Capacitate;
