import React, { useState } from "react";
import Link from "next/link";
import "./modal_component.scss";

type TProps = {
  open: boolean;
  setOpen: (open) => void;
};

const Modal = ({ open, setOpen }: TProps) => {
  return (
    <div>
      <div
        onClick={() => {
          console.log("background click");
          setOpen(false);
        }}
        className={`Modal__modalBackground${open ? "Open" : "Closed"}`}
      />
      <div className={`Modal__modal${open ? "Open" : "Closed"}`}>
        <div className="Modal__modalHeader">
          <p>Hola</p>
          <button>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
