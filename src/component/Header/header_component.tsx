import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "../../i18n/i18n.js";
import { TFunction } from "i18next";
import "./header_component.scss";
import Link from "next/link";
import { useRouter } from "next/router";

type NavItem = {
  link: string;
  label: any;
};

const getNavItems = (t: TFunction): NavItem[] => [
  { link: "/", label: t("header_home_text") },
  { link: "about", label: t("header_about_text") },
  { link: "work", label: t("header_services_text") },
  { link: "contact", label: t("header_contact_text") },
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
  const showHeader = pathname === route ? `${className}--hideHeaderMenu` : "";
  return `${className}__menu ${toggle} ${showHeader}`;
};

const getMenuToggleClass = (
  showMobileMenu: boolean,
  pathname: string,
  route: string
) => {
  const className = "menuToggleContainer";
  const showHeader =
    pathname === route ? `${className}--hideHeaderMenuToggle` : "";
  return `${className} ${showHeader}`;
};

const getToggleText = (showMobileMenu: boolean, t: TFunction) => {
  return showMobileMenu ? t("header_close_text") : t("header_menu_text");
};

const Header = ({}) => {
  const { t } = useTranslation(NAMESPACE_KEY);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const items = getNavItems(t);
  const router = useRouter();

  const showMobileMenuAction = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const activeRoute = () => router.pathname;
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
        <div className={getMenuClass(showMobileMenu, activeRoute(), "/")}>
          <ul className="mainNavigation">
            {items.map((item, index) => {
              const { label, link } = item;
              return (
                <li
                  key={index}
                  className={getItemClass(activeRoute(), link, showMobileMenu)}
                >
                  <Link href={link}>
                    <a
                      className="mainNavigation__link tiny-regular"
                      title={label}
                    >
                      {label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={getMenuToggleClass(showMobileMenu, activeRoute(), "/")}
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
