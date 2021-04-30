import React from "react";
import "./bigCard_component.scss";
import Tag from "../Tag/tag_component";

type TCard = {
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
  tags: any;
};

const BigCard = ({ image, title, description, date, link, tags }: TCard) => {
  return (
    <div className="BigCard ">
      <div className="BigCard__linkContainer">
        <a
          href={link}
          target="_blank"
          className="BigCard__link"
          data-aos="zoom-out-up"
          data-aos-duration="1500"
        >
          <div className="BigCard__imageContainer">
            <img src={image} alt="BigCard Image" className="BigCard__image" />
          </div>
          <h1 className="BigCard__title subtitle">{title}</h1>
        </a>
      </div>
      <div className="BigCard__description">
        <p className="subtitle2">{description}</p>
        <p className="body-tiny">{date}</p>
      </div>
      <div className="BigCard__tagsContainer grid">
        {tags?.map((item, index) => (
          <div key={index}>
            <Tag text={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

BigCard.defaultProps = {
  image: "",
  title: "",
  link: "",
} as Partial<TCard>;

export default BigCard;
