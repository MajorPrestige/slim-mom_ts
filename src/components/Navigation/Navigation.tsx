import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.scss';

import Burger from './Burger/Burger';

interface ClassNameProps {
  isActive: boolean;
}

const getClassName = ({ isActive }: ClassNameProps) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const Navigation: FC = () => {
  const isDesctop = useMediaQuery({ minWidth: 1280 });
  if (!isDesctop) {
    return <Burger />;
  }

  return (
    <div className={s.navDesct}>
      <NavLink className={getClassName} to="/dairy">
        Щоденник
      </NavLink>
      <NavLink className={getClassName} to="/calculator-calories">
        Калькулятор
      </NavLink>
    </div>
  );
};

export default Navigation;
