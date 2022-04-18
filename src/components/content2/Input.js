import React from "react";

import classes from "./Input.module.css";
import { images } from "../../constants/images";
import { TextCard } from "../../constants/string";

const Input = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.title}>{TextCard.input.title}</h1>
        <p className={classes.paragraph}>{TextCard.input.paragraph}</p>
      </div>
      <div className={classes.main}>
        <div className={classes.radius_input}>
          <input
            className={classes.form_control}
            type="text"
            placeholder="Your Name"
          ></input>
        </div>
        <div className={classes.radius_input}>
          <input
            className={classes.form_control}
            type="text"
            placeholder="Your Email Address"
          ></input>
        </div>
      </div>
      <div className={classes.radius_input_text}>
        <textarea
          className={classes.form_control_text}
          placeholder="Your Messages..."
        ></textarea>
      </div>
      <img className={classes.img} src={images.input.submit}/>
    </div>
  );
};

export default Input;
