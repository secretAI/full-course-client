import React from "react";
import cl from "../../styles/Modal.module.css"

const Modal = ({children}: any) => {
  return(
    <div className={[cl.modal, cl.active].join(" ")}>
      <div className={cl.modalContent}>
        {children}
      </div>
    </div>
  )
}

export default Modal;
