import React, { useState } from "react";
import Link from "next/link";
import "./modal_component.scss";

type TProps = {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
};

const Modal = ({ open, setOpen, children }: TProps) => {
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
          <div></div>
          <button onClick={setOpen} className="Modal__closeButton subtitle">
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
