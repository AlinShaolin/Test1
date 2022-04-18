import React from "react";

import classes from "./Custom.module.css";
import { images } from "../../constants/images";
import { TextCard } from "../../constants/string";

const Custom = (props) => {
  return (
    <div className={classes.content}>
      <img className={classes.bar} src={images.custom.bar} />
      <div className={classes.text}>
        <h2 className={classes.title}>{TextCard.custom.title}</h2>
        <h1 className={classes.custom}>{TextCard.custom.custom}</h1>
        <p className={classes.paragraph}>{TextCard.customers.text}</p>
        <img className={classes.learn} src={images.custom.learn} />
      </div>
      <img className={classes.display} src={images.custom.display} />
    </div>
  );
};

export default Custom;
