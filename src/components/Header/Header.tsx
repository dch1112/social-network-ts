import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {

  return (
    <header className={s.head}>
      <div className={s.logo}>
        <NavLink className={s.logo} exact to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Eo_circle_brown_letter-r.svg/1200px-Eo_circle_brown_letter-r.svg.png"
            alt="Logo"/>eact Social Network
        </NavLink>
      </div>


    </header>
  );
};

export default Header;

