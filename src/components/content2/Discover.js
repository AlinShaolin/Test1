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
            {Object.values(TextCard.column1).map((item, index) => {
              return <p className={index === 0 ? classes.bold : []}>{item}</p>;
            })}
          </div>
          <div className={classes.second_column}>
            {Object.values(TextCard.column2).map((item, index) => {
              return <p className={index === 0 ? classes.bold : []}>{item}</p>;
            })}
          </div>
        </div>
        <div className={classes.second_div}>
          <div className={classes.third_column}>
            {Object.values(TextCard.column3).map((item, index) => {
              return <p className={index === 0 ? classes.bold : []}>{item}</p>;
            })}
          </div>
          <div className={classes.fourth_column}>
            {Object.values(TextCard.column4).map((item, index) => {
              return <p className={index === 0 ? classes.bold : []}>{item}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
