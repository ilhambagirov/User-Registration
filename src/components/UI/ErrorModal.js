import React from "react";
import Card from "./Card";
import classes from "../UI/ErrorModal.module.scss";
import Button from "./Button";
import ReactDom from "react-dom";

const Backdrop = () => {
  return <div className={classes.backdrop}></div>;
};

const Overlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClick}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <Overlay onClick={props.onClose} title={props.title} message = {props.message} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default ErrorModal;
