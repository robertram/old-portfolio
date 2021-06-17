import React from "react";
import "./educationBody_component.scss";
import Markdown from "react-markdown";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "../../i18n/i18n.js";

type Props = {
  title: string;
  content?: any;
  date?: string;
  image: string;
};

const EducationBody = (props: Props) => {
  const { t } = useTranslation(NAMESPACE_KEY);
  const { title, date, image, content } = props;
  return (
    <div className="EducationBody">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <img src={image} alt="" className="EducationBody__banner" />
          <h1 className="title">{title}</h1>
          <p className="body-bold">{date}</p>
          <Markdown children={content} />
        </div>
      </div>
    </div>
  );
};

export default EducationBody;
