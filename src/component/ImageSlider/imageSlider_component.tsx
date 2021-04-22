import React, { useState, useEffect } from "react";
import "./imageSlider_component.scss";
import Slider from "react-slick";
import { LeftArrow } from "./Arrows/leftArrow";
import { RightArrow } from "./Arrows/rightArrow";

const ImageSlider = ({ items }) => {
  const [nav1, setNav1] = useState<Slider>();
  useEffect(() => {
    setNav1(slider);
  }, []);

  let slider;
  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: false,
  };

  return (
    <div className="ImageSlider">
      <div className="grid ImageSlider__wrapper">
        <div className="ImageSlider__sliderContainer col-desk-10 col-desk-shift-0 col-mob-4">
          <div className="ImageSlider__sliderArrowsContainer ">
            <div className="ImageSlider__leftArrow col-desk-0 ">
              <LeftArrow action={() => previous()} />
            </div>
            <div className="ImageSlider__sliderContainer">
              <Slider {...settings} asNavFor={nav1} ref={(c) => (slider = c)}>
                {items.map((item, index) => (
                  <div key={index} className="ImageSlider__imageContainer">
                    <img
                      src={item.image}
                      alt="Slider image"
                      className="DesignThinking__descriptionImage"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="ImageSlider__rightArrow">
              <RightArrow action={() => next()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
