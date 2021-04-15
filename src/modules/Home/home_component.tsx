import React from "react";
import Header from "../../component/Header/header_component";
import Footer from "../../component/Footer/footer_component";
import "./home_styles.scss";

const Home: React.FunctionComponent = () => {
  return (
    <div className="Home">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <p className="title">Hola</p>

      <h2 className="link">Hola</h2>
      <Footer />
    </div>
  );
};

export default Home;
