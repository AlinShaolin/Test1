import React from "react";

import classes from "./RegisterModal.module.css";
import { TextCard } from "../constants/string";

const RegisterModal = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.login}>
        <h1 className={classes.title}>{TextCard.regModal.title}</h1>
        <div className={classes.main}>
          <div className={classes.radius_input}>
            <input
              className={classes.form_control}
              type="text"
              placeholder="UserName"
            ></input>
          </div>
          <div className={classes.radius_input}>
            <input
              className={classes.form_control}
              type="text"
              placeholder="Password"
            ></input>
          </div>
          <div className={classes.radius_input}>
            <input
              className={classes.form_control}
              type="text"
              placeholder="Repeat Password"
            ></input>
          </div>
        </div>
        <div className={classes.buttons}>
          <button className={classes.button} onClick={props.onConfirm}>
            {TextCard.regModal.buttons.register}
          </button>
          <button className={classes.button} onClick={props.onConfirm}>
            {TextCard.regModal.buttons.cancel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
