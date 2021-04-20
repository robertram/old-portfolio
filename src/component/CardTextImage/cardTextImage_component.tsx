import React from "react";
import "./cardTextImage_component.scss";

type TProps = {
  image: string;
  title: string;
  link: string;
};

const CardTextImage = ({ image, title }: TProps) => {
  return (
    <div className="CardTextImage">
      <div className="CardTextImage__imageContainer">
        <img src={image} alt="Card Image" className="" />
      </div>
      <div className="CardTextImage__textContainer">
        <h2 className="title">{title}</h2>
      </div>
    </div>
  );
};

export default CardTextImage;
