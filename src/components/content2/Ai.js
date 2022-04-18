import React from "react";

import classes from "./Ai.module.css";
import { images } from "../../constants/images";
import { TextCard } from "../../constants/string";

const Ai = (props) => {
  return (
    <div className={classes.content}>
      <img className={classes.monitor} src={images.ai.monitor} />
      <div className={classes.content2}>
        <img className={classes.bar} src={images.custom.bar} />
        <div className={classes.text}>
          <h2 className={classes.title}>{TextCard.ai.title}</h2>
          <h1 className={classes.custom}>{TextCard.ai.sub}</h1>
          <p className={classes.paragraph}>{TextCard.ai.paragraph}</p>
          <img className={classes.learn} src={images.custom.learn} />
        </div>
      </div>
    </div>
  );
};

export default Ai;
