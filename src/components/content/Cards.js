import React from "react";

import classes from "./Cards.module.css";
import { images } from "../../constants/images";
import { TextCard } from "../../constants/string";
import CardCompenent from "./CardComponent";

const Cards = (props) => {
  return (
    <div>
      <h1 className={classes.title}>{TextCard.cards.title}</h1>
      <p className={classes.paragraph}>
        {TextCard.cards.paragraph_1}
        <br />
        {TextCard.cards.paragraph_2}
      </p>
      
      <div className={classes.first_div}>
        <CardCompenent
          image={images.cards.weblogo}
          text={TextCard.cards.ai}
        />
        <CardCompenent
          image={images.cards.searchlogo}
          text={TextCard.cards.seo}
        />
        <CardCompenent
          image={images.cards.settingslogo}
          text={TextCard.cards.main}
        />
        <CardCompenent
          image={images.cards.datalogo}
          text={TextCard.cards.data}
        />
        <CardCompenent
          image={images.cards.monitorlogo}
          text={TextCard.cards.show}
        />
      </div>
    </div>
  );
};

export default Cards;
