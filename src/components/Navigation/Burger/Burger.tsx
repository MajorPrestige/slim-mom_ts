import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './burger.scss';

const Burger: FC = () => {
  function openMenu(e: React.MouseEvent) {
    e.preventDefault();

    if ((e.target as any).nodeName === 'NAV') {
      return;
    }
    e.currentTarget.classList.toggle('burger-menu_active');
  }

  return (
    <>
      <div className="burger-menu" onClick={openMenu}>
        <span className="burger-menu_button">
          <span className="burger-menu_lines"></span>
        </span>
        <nav className="burger-menu_nav">
          <NavLink className="burger-menu_link" to="/dairy">
            щоденник
          </NavLink>
          <NavLink className="burger-menu_link" to="/calculator-calories">
            калькулятор
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Burger;
