import React from "react";

import classes from "./Cards.module.css";

const CardCompenent = ({image, text}) => {


  return (
    <div className={classes.border}>
      <div className={classes.div_card}>
        <img className={classes.card} src={image}></img>
        <p className={classes.card_paragraph}>{text}</p>
      </div>
    </div>
  );
};

export default CardCompenent;
