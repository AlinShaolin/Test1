import React from "react";

import classes from "./Customers.module.css";
import { images } from "../../constants/images";
import { TextCard } from "../../constants/string";
import Customer from "./Customer";

const Customers = (props) => {
  return (
    
    <div className={classes.main}>
      <h1 className={classes.title}>{TextCard.customers.title}</h1>

      <div>
        <Customer
          image={images.customers.customer_img}
          text={TextCard.customers.text}
        />
      </div>
    </div>
  );
};

export default Customers;
