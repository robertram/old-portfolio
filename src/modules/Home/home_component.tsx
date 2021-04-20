import React from "react";
import Header from "../../component/Header/header_component";
import Footer from "../../component/Footer/footer_component";
import Card from "../../component/Card/card_component";
import "./home_styles.scss";

const Home: React.FunctionComponent = () => {
  return (
    <div className="Home">
      <Header />
      <div className="Home__body">
        <div className="grid">
          <div className="col-desk-12 col-mob-4">
            <Card
              image="assets/home/HomeCard1.jpg"
              title="Sobre Mi"
              link="/about"
            />
          </div>
          <div className="col-desk-6 col-mob-4">
            <Card
              image="assets/home/HomeCard3.jpg"
              title="Mi Trabajo"
              link="/work"
            />
          </div>
          <div className="col-desk-6 col-mob-4">
            <Card
              image="assets/home/HomeCard2.jpg"
              title="Contacto"
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
