import React from 'react';
import s from './Header.module.css'

type PropsType = {
  id: number
}


const Header = (props: PropsType) => {

  return (
    <header className={s.head}>
      <div className={s.logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Eo_circle_brown_letter-r.svg/1200px-Eo_circle_brown_letter-r.svg.png" alt="Logo"/>eact Social Network
      </div>



    </header>
  );
};

export default Header;

