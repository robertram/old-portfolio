import React from "react";
import "./tag_component.scss";

export interface Props {
  text?: string;
}

const Tag = ({ text }: Props) => {
  return (
    <div className="Tag">
      <span className="Tag__text tiny-regular">{text}</span>
    </div>
  );
};

export default Tag;
