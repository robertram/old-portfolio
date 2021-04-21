import React from "react";
import Header from "../../component/Header/header_component";
import Footer from "../../component/Footer/footer_component";
import Card from "../../component/Card/card_component";
import { useTranslation } from "react-i18next";
import { NAMESPACE_KEY } from "../../i18n/i18n.js";
import "./home_styles.scss";

const Home: React.FunctionComponent = () => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="Home">
      <Header />
      <div className="Home__body">
        <div className="grid">
          <div className="col-desk-12 col-mob-4">
            <Card
              image="assets/home/HomeCard1.jpg"
              title={t("home_about_title")}
              link="/about"
            />
          </div>
          <div className="col-desk-6 col-mob-4">
            <Card
              image="assets/home/HomeCard3.jpg"
              title={t("home_work_title")}
              link="/work"
            />
          </div>
          <div className="col-desk-6 col-mob-4">
            <Card
              image="assets/home/HomeCard2.jpg"
              title={t("home_contact_title")}
              link="/contact"
            />
          </div>
        </div>
      </div>

      {/* <Footer />*/}
    </div>
  );
};

export default Home;
