import React, { useState } from "react";

import classes from "./Header.module.css";
import Button from "./Button";
import { images } from "../../src/constants/images";
import { TextCard } from "../constants/string";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Header = (props) => {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const loginModal = (event) => {     
      setLogin(true)
    }
    const registerModal = (event) => { 
      setRegister(true)
    }

    const loginHandler = () => {
      setLogin(null);
      setRegister(null);
    }


  return (
    <>
      {register && <RegisterModal onConfirm={loginHandler} />}
      {login && <LoginModal onConfirm={loginHandler} />}
      <header className={classes.header}>
        {/* Title */}
        <div>
          <h1 className={classes.title}>{TextCard.header.title}</h1>
        </div>

        {/* Nav Buttons */}

        <div className={classes.navi}>
          <li className={classes.navButton}>
            <Button content={TextCard.header.nav.features} />
          </li>
          <li className={classes.navButton}>
            <Button content={TextCard.header.nav.products} />
          </li>
          <li className={classes.navButton}>
            <Button content={TextCard.header.nav.company} />
          </li>
          <li className={classes.navButton}>
            <Button content={TextCard.header.nav.pricing} />
          </li>
          <li className={classes.navButton}>
            <Button content={TextCard.header.nav.support} />
          </li>
        </div>

        {/* Login/Logout */}
        <div className={classes.auth}>
          <button onClick={loginModal} className={classes.auth_button}>
            {TextCard.header.login}
          </button>
          <img
            onClick={registerModal}
            className={classes.regi_button}
            src={images.head.register}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
