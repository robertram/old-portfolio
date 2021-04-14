import React from 'react';
import Header from './component/Header/header_component';
import Footer from './component/Footer/footer_component';
import './investors_styles.scss';

const Investors: React.FunctionComponent = () => {
  return (
    <div className="Investors">
      <Header/>
      <br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
};

export default Investors;
