import React from "react";

import classes from "./FirstParagraph.module.css";
import { TextCard } from "../../constants/string";
import { images } from "../../constants/images";

const FirstParagraph = (props) => {
  return (
    <div> 
      <div className={classes.content}>
        <h2 className={classes.title}>{TextCard.first_paragraph.title}</h2>
        <h1 className={classes.market}>{TextCard.first_paragraph.market}</h1>
        <p className={classes.paragraph}>
          {TextCard.first_paragraph.paragraph}
        </p>
      </div>
      <img
        className={classes.lego_button}
        src={images.first_paragraph.letgo}
      ></img>
      <img
        className={classes.arrow_down}
        src={images.first_paragraph.arrow}
      ></img>
    </div>
  );
};

export default FirstParagraph;
