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
  children: React.ReactNode;
};

const CardTextImage = ({
  image,
  title,
  url,
  description,
  date,
  children,
}: TProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Modal
        title={title}
        open={openModal}
        setOpen={() => setOpenModal(false)}
        children={children}
      />
      <div
        className="CardTextImage"
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        <div className="CardTextImage__imageContainer">
          <img src={image} alt="Card Image" />
        </div>
        <div className="CardTextImage__textContainer">
          <p className="subtitle CardTextImage__title">{title}</p>
          <p className="body-regular">{description}</p>
          <p className="body-regular">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default CardTextImage;
