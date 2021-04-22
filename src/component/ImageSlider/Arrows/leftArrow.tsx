import * as React from "react";
import "../imageSlider_component.scss";

export interface Props {
  action?: () => void;
}

const getParentClass = () => {
  const className = "ArrowContainer";
  return `${className} LeftArrow`;
};

export const LeftArrow = (props: Props) => {
  const { action } = props;
  return (
    <div className={getParentClass()} onClick={action}>
      <svg
        width={8}
        height={12}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 447.243 447.243"
        className="LeftSliderArrow"
        {...props}
      >
        <path d="M420.361 192.229a31.967 31.967 0 00-5.535-.41H99.305l6.88-3.2a63.998 63.998 0 0018.08-12.8l88.48-88.48c11.653-11.124 13.611-29.019 4.64-42.4-10.441-14.259-30.464-17.355-44.724-6.914a32.018 32.018 0 00-3.276 2.754l-160 160c-12.504 12.49-12.515 32.751-.025 45.255l.025.025 160 160c12.514 12.479 32.775 12.451 45.255-.063a32.084 32.084 0 002.745-3.137c8.971-13.381 7.013-31.276-4.64-42.4l-88.32-88.64a64.002 64.002 0 00-16-11.68l-9.6-4.32h314.24c16.347.607 30.689-10.812 33.76-26.88 2.829-17.445-9.019-33.88-26.464-36.71z" />
      </svg>
    </div>
  );
};
