import React, { useState } from "react";
import Link from "next/link";
import Modal from "@/src/component/Modal/modal_component";
import "./cardTextImage_component.scss";

type TProps = {
  image: string;
  title: string;
  url: string;
  description: string;
  date: string;
};

const CardTextImage = ({ image, title, url, description, date }: TProps) => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <div>
      <div
        className="CardTextImage"
        onClick={() => {
          console.log("card");

          setOpenModal(true);
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
        <Modal open={openModal} setOpen={(open) => setOpenModal(open)} />
      </div>
    </div>
  );
};

export default CardTextImage;
