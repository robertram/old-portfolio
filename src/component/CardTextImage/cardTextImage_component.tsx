import React, { useState } from "react";
import Link from "next/link";
import "./cardTextImage_component.scss";

type TProps = {
  image: string;
  title: string;
  url: string;
  description: string;
  date: string;
};

const CardTextImage = ({ image, title, url, description, date }: TProps) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      className="CardTextImage"
      onClick={() => {
        console.log("card");
        if (openModal) {
          setOpenModal(!openModal);
        }
        setOpenModal(!openModal);
      }}
    >
      <div className="CardTextImage__imageContainer">
        <img src={image} alt="Card Image" className="" />
      </div>
      <div className="CardTextImage__textContainer">
        <p className="subtitle CardTextImage__title">{title}</p>
        <p className="body-regular">{description}</p>
        <p className="body-regular">{date}</p>
      </div>
      <div
        onClick={() => setOpenModal(true)}
        className={`CardTextImage__modalBackground${
          openModal ? "Open" : "Closed"
        }`}
      />
      <div className="CardTextImage__modal">
        <h1>a</h1>
      </div>
    </div>
  );
};

export default CardTextImage;
