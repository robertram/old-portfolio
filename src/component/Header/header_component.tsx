import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "../../i18n/i18n.js";
import { TFunction } from "i18next";
import "./header_component.scss";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

type NavItem = {
  link: string;
  label: any;
  offset?: number;
};

const getNavItems = (t: TFunction): NavItem[] => [
  { link: "hero", label: t("header_home_text"), offset: -100 },
  { link: "about", label: t("header_about_text"), offset: -100 },
  { link: "work", label: t("header_services_text"), offset: -100 },
  { link: "contact", label: t("header_contact_text"), offset: -100 },
];

const getHeaderClass = (showMobileMenu: boolean) => {
  const className = "header-landing";
  const toggle = showMobileMenu ? `${className}--mobileActive` : "";
  return ` ${className} ${toggle} `;
};

const getItemClass = (
  pathname: string,
  route: string,
  showMobileMenu: boolean
) => {
  const className = "mainNavigation";
  const toggle = showMobileMenu ? `${className}--menuToggleItem` : "";
  const itemClass = pathname === route ? `${className}--activeItem` : "";
  return `${className}__item ${itemClass} ${toggle}`;
};

const getToggleClass = (showMobileMenu: boolean) => {
  const className = "menuToggleContainer";
  const toggle = showMobileMenu ? `${className}--menuToggleAction` : "";
  return `${className}__menuToggle ${toggle}`;
};

const getMenuClass = (
  showMobileMenu: boolean,
  pathname: string,
  route: string
) => {
  const className = "header-landing";
  const toggle = showMobileMenu ? `${className}--showMobileMenu` : "";
  return `${className}__menu ${toggle} `;
};

const getMenuToggleClass = (showMobileMenu: boolean) => {
  const className = "menuToggleContainer";
  return `${className} `;
};

const getToggleText = (showMobileMenu: boolean, t: TFunction) => {
  return showMobileMenu ? t("header_close_text") : t("header_menu_text");
};

const Header = ({}) => {
  const { t } = useTranslation(NAMESPACE_KEY);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const items = getNavItems(t);
  const router = useRouter();

  const showMobileMenuAction = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSetActive = (to) => {
    setActiveItem(to);
  };

  return (
    <div className={getHeaderClass(showMobileMenu)}>
      <div className="header-landing__wrapper grid">
        <a title="Home" href="/" className="header-landing__logoLink">
          <div className="header-landing__logo">
            <img src="assets/shared/logo.png" alt="Robert Ramirez Logo" />
            &nbsp;&nbsp;
            <span className="header-landing__logoText body-bold">RRM</span>
          </div>
        </a>
        <div className={getMenuClass(showMobileMenu, activeItem, "/")}>
          <ul className="mainNavigation">
            {items.map((item, index) => {
              const { label, link, offset } = item;
              return (
                <li
                  key={index}
                  className={getItemClass(activeItem, link, showMobileMenu)}
                >
                  <Link
                    to={link}
                    spy={true}
                    smooth={true}
                    onSetActive={handleSetActive}
                    className="mainNavigation__link tiny-regular"
                    title={label}
                    onClick={() => setShowMobileMenu(false)}
                    offset={offset}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={getMenuToggleClass(showMobileMenu)}
          onClick={showMobileMenuAction}
        >
          <div className={getToggleClass(showMobileMenu)}>
            <span className="menuToggleContainer__line"></span>
            <span className="menuToggleContainer__line"></span>
            <span className="menuToggleContainer__line"></span>
            <span className="menuToggleContainer__line"></span>
          </div>
          <div className="menuToggleContainer__text">
            {getToggleText(showMobileMenu, t)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
