import React, { useState } from "react";
import Link from "next/link";
import "./modal_component.scss";

type TProps = {
  title: string;
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
};

const Modal = ({ title, open, setOpen, children }: TProps) => {
  return (
    <div>
      <div
        onClick={() => {
          console.log("background click");
          setOpen();
        }}
        className={`Modal__modalBackground${open ? "Open" : "Closed"}`}
      />
      <div className={`Modal__modal${open ? "Open" : "Closed"}`}>
        <div className="Modal__modalHeader">
          <h2 className="Modal__title subtitle">{title}</h2>
          <button onClick={setOpen} className="Modal__closeButton subtitle">
            X
          </button>
        </div>
        <div className="Modal__children">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
