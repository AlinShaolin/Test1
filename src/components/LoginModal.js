import React from "react";

import classes from "./LoginModal.module.css";
import { TextCard } from "../constants/string";

const LoginModal = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.login}>
        <h1 className={classes.title}>{TextCard.logModal.title}</h1>
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
        </div>
        <div className={classes.buttons}>
          <button className={classes.button} onClick={props.onConfirm}>
            {TextCard.logModal.buttons.login}
          </button>
          <button className={classes.button} onClick={props.onConfirm}>
            {TextCard.logModal.buttons.cancel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
