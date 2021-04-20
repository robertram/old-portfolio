import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "../../i18n/i18n.js";
import { TFunction } from "i18next";
import "./card_component.scss";
import Link from "next/link";

type NavItem = {
  link: string;
  label: any;
};

const Header = ({ image }) => {
  const { t } = useTranslation(NAMESPACE_KEY);

  return (
    <div className="Card">
      <img src={image} alt="" className="Card__image" />
    </div>
  );
};

export default Header;
