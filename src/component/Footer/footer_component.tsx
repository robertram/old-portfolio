import React from "react";
import "./footer_component.scss";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "../../i18n/i18n.js";
import LinkedinIcon from "@/assets/shared/LinkedinIcon";
import GithubIcon from "@/assets/shared/GithubIcon";
import InstagramIcon from "@/assets/shared/InstagramIcon";

const footerLinks = [
  {
    name: "Linkedin",
    icon: <LinkedinIcon />,
    link: "https://www.linkedin.com/in/robert-ramirez-marin/",
  },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/robert_ram.dev/",
  },
  {
    name: "Github",
    icon: <GithubIcon />,
    link: "https://github.com/robertram",
  },
];

const Footer = () => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div
      className="Footer section"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <div className="Footer__contact">
            <h2 className="title">{t("footer_contact_title")}</h2>
            <p className="body-regular">
              {t("footer_contact_description")}
              <a
                href="mailto:rsft6000@gmail.com"
                className="Footer__contactLink body-bold"
              >
                rsft6000@gmail.com
              </a>
              {t("footer_contact_description2")}
            </p>
          </div>
          <div className="Footer__iconsContainer">
            {footerLinks.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                className="Footer__link"
                title={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="Footer__copyright tiny-regular">
            {t("footer_copyright_text")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
