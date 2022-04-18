import React from "react";

import classes from "./Analyzing.module.css";
import { images } from "../../constants/images";
import { TextCard } from "../../constants/string";

const Analyzing = (props) => {
  return (
    <article className={classes.article}>
      <img
        className={classes.image}
        src={images.analyzing.rectangle}
        alt="background"
      />
      <h1 className={classes.header}>
        {TextCard.analyzing.title}
      </h1>
      <p className={classes.paragraph}>{TextCard.analyzing.paragraph}</p>
      <img className={classes.lego} src={images.first_paragraph.letgo} />
    </article>
  );
};

export default Analyzing;
