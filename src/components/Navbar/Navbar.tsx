import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {}

const Navbar = (props: PropsType) => {

  return (
    <nav className={s.nav}>
      <div><NavLink exact to="/" activeClassName={s.active} className={s.item}>Home</NavLink></div>
      <div><NavLink to="/dialogs" activeClassName={s.active} className={s.item}>Dialogs</NavLink></div>
      <div><NavLink to="/users"  activeClassName={s.active} className={s.item}>Users</NavLink></div>
    </nav>

  );
};

export default Navbar;

