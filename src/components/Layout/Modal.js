import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import './Modal.css'

const ModalOverlay = (props) => {
  return (
    <div className="container" onClick={props.onClose}>
      <div id="cart">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>{ReactDOM.createPortal(
    <ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>, 
    portalElement)}
    </Fragment>
  );
};

export default Modal;