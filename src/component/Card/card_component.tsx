import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "../../i18n/i18n.js";
import { TFunction } from "i18next";
import "./card_component.scss";
import Link from "next/link";

type TCard = {
  image: string;
  title: string;
  link: string;
};

const Card = ({ image, title, link }: TCard) => {
  const { t } = useTranslation(NAMESPACE_KEY);

  return (
    <Link href={link}>
      <div className="Card">
        <p className="Card__title title">{title}</p>
        <img src={image} alt="Card Image" className="Card__image" />
      </div>
    </Link>
  );
};

export default Card;
