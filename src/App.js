import React from "react";

import classes from "./App.module.css";

import Header from "./components/Header";
import FirstParagraph from "./components/content/FirstParagraph";
import Robot from "./components/content/Robot";
import Cards from "./components/content/Cards";
import Partner from "./components/content2/Partner";
import Custom from "./components/content2/Custom";
import Maintain from "./components/content2/Maintain";
import Analyzing from "./components/content2/Analyzing";
import Customers from "./components/content2/Customers";
import Input from "./components/content2/Input";
import Discover from "./components/content2/Discover.js";

function App() {
  return (
    <div>
      <div className={classes.first_div}>
        <Header></Header>
        <FirstParagraph />
        <Robot />
        <Cards />
        <Partner />
        <Custom />
        <Maintain />
        <Analyzing />
        <Customers />
        <Input />
      </div>
      <div className={classes.second_div}>
        <Discover />
      </div>
    </div>
  );
}

export default App;
