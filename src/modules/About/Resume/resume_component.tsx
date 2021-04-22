import React from "react";
import Button from "@/src/component/Button/button_component";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "@/src/i18n/i18n.js";
import "./resume_component.scss";

const Resume = () => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="Resume section">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <h1 className="title">Resume</h1>
        </div>
        <div className="col-desk-12 col-mob-4">
          <Button
            text={t("about_resume_button_text")}
            className="Button"
            size="medium"
            url={t("about_resume_button_link")}
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
