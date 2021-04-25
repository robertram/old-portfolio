import React from "react";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "@/src/i18n/i18n.js";
import ImageSlider from "@/src/component/ImageSlider/imageSlider_component";

const sliderImagesItems = [
  { image: "assets/about/designThinking/FeedScreen.png" },
  { image: "assets/about/designThinking/ItemScannedScreen.png" },
  { image: "assets/about/designThinking/MapScreen.png" },
  { image: "assets/about/designThinking/ProfileScreen.png" },
];

const DesignThinking = ({ title, description, date }) => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="">
      <div className="DesignThinking__titleContainer">
        <p className="body-regular">{description}</p>
        <p className="body-bold">{date}</p>
      </div>
      <video controls className="FurtherEducation__iframe">
        <source
          src="https://portfolio-robertram.s3.amazonaws.com/FurtherTraining/WhatsApp+Video+2019-12-08+at+5.24.51+PM.mp4"
          type="video/mp4"
        />
      </video>
      <div className="DesignThinking__descriptionContainer">
        <p className="DesignThinking__description">
          {t("design_thinking_description")}
        </p>

        <h2 className="subtitle2">{t("design_thinking_slider_title")}</h2>
        <ImageSlider items={sliderImagesItems} />
      </div>
    </div>
  );
};

export default DesignThinking;
