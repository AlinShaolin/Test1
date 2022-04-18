import React from "react";

import classes from "./Discover.module.css";
import { images } from "../../constants/images";
import { TextCard } from "../../constants/string";

const Discover = (props) => {
  return (
    <div className={classes.all}>
      <div className={classes.markai}>
        <h1 className={classes.title}>{TextCard.discover.title}</h1>
        <p className={classes.paragraph}>{TextCard.discover.paragraph}</p>
        <img
          className={classes.img}
          alt="FindMore"
          src={images.first_paragraph.letgo}
        />
        <div className={classes.social}>
          <img
            className={classes.logo_size}
            alt="Linkedin"
            src={images.discover.linked}
          />
          <img
            className={`${classes.logo}  ${classes.logo_size}`}
            alt="Facebook"
            src={images.discover.facebook}
          />
          <img
            className={`${classes.logo} ${classes.logo_size}`}
            alt="Cb"
            src={images.discover.cb}
          />
          <img
            className={`${classes.logo} ${classes.logo_size}`}
            alt="Instagram"
            src={images.discover.insta}
          />
          <img
            className={`${classes.logo} ${classes.logo_size}`}
            alt="Twitter"
            src={images.discover.twitter}
          />
        </div>
      </div>
      <div className={classes.main_div}>
        <div className={classes.first_div}>
          <div className={classes.first_column}>
            <p className={classes.bold}>{TextCard.column1.site}</p>
            <p>{TextCard.column1.features}</p>
            <p>{TextCard.column1.products}</p>
            <p>{TextCard.column1.company}</p>
            <p>{TextCard.column1.pricing}</p>
            <p>{TextCard.column1.support}</p>
          </div>
          <div className={classes.second_column}>
            <p className={classes.bold}>{TextCard.column2.legale}</p>
            <p>{TextCard.column2.privacy}</p>
            <p>{TextCard.column2.terms}</p>
            <p>{TextCard.column2.policy}</p>
          </div>
        </div>
        <div className={classes.second_div}>
          <div className={classes.third_column}>
            <p className={classes.bold}>{TextCard.column3.company}</p>
            <p>{TextCard.column3.about}</p>
            <p>{TextCard.column3.team}</p>
            <p>{TextCard.column3.story}</p>
            <p>{TextCard.column3.career}</p>
          </div>
          <div className={classes.fourth_column}>
            <p className={classes.bold}>{TextCard.column4.follow}</p>
            <p>{TextCard.column4.twitter}</p>
            <p>{TextCard.column4.facebook}</p>
            <p>{TextCard.column4.linkedin}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
