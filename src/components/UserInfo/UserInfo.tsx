import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelecor';

import s from './UserInfo.module.scss';

import { getLogin, getUserName } from 'redux/auth/auth-selectors';
import { clearData } from 'redux/dairy-calendar/dairy-calendar-slice';
import { clearDay } from 'redux/day/day-slice';
import { logout } from 'redux/auth/auth-opetations';

interface ClassNameProps {
  isActive: boolean;
}

const getClassName = ({ isActive }: ClassNameProps) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const UserInfo: FC = () => {
  const isUserLogin = useAppSelector(getLogin);
  const userName = useAppSelector(getUserName);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logout());
    dispatch(clearData());
    dispatch(clearDay());
  };

  if (!isUserLogin) {
    return (
      <div>
        <NavLink className={getClassName} to="/login">
          Вхід
        </NavLink>
        <NavLink className={getClassName} to="/registration">
          Реєстрація
        </NavLink>
      </div>
    );
  }
  return (
    <div className={s.userInfoSide}>
      <p>{userName}</p>
      <p onClick={onLogout}>Вихід</p>
    </div>
  );
};

export default UserInfo;
