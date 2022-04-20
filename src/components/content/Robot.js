import React from "react";

import classes from "./Robot.module.css";
import { images } from "../../constants/images";
import { TextCard } from "../../constants/string";

const Robot = (props) => {
  return (
    <div className={classes.robot_div}>
      <img className={classes.robot} src={images.robot.robot} />
      <p className={classes.paragraph}>{TextCard.robot.paragraph}</p>
    </div>
  );
};

export default Robot;
