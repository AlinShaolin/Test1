import React from "react";

import classes from "./Partner.module.css";
import { images } from "../../constants/images";
import { TextCard } from "../../constants/string";

const Partner = (props) => {
  return (
    <div>
      <div className={classes.content}>
        <h2 className={classes.title}>{TextCard.partner.title}</h2>
        <h1 className={classes.your}>{TextCard.partner.your}</h1>
        <p className={classes.paragraph}>{TextCard.partner.paragraph}</p>
      </div>
      <img className={classes.laptop} src={images.partner.laptop} />
    </div>
  );
};

export default Partner;
