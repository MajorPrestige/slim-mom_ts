import { FC } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

import s from './DailyCalorieIntake.module.scss';

import { items } from './items';
import Button from 'components/Shared/Button';
import {
  getDailyRate,
  getNotAllowedProducts,
} from 'redux/daily-rate/daily-rate-selectors';
import useAppSelector from 'hooks/useAppSelecor';

const DailyCalorieIntake: FC = () => {
  const notAllowedProducts = useAppSelector(getNotAllowedProducts);
  const dailyRate = Math.round(useAppSelector(getDailyRate) as number);

  let itemsList = [];
  if (notAllowedProducts.length === 0) {
    itemsList = items;
  } else {
    for (let i = 0; i < 5; i += 1) {
      itemsList[i] = notAllowedProducts[i];
    }
  }

  function removeClassList() {
    document.querySelector('body')!.classList.remove('no-scroll');
  }

  return (
    <>
      <h2 className={s.modalTitle}>
        Ваша рекомендована добова норма споживання калорій становить:
      </h2>
      <p className={s.modalText}>
        {dailyRate}
        <span className={s.textDescription}> ккал</span>
      </p>
      <div className={s.menuGroup}>
        {itemsList.length > 0 && (
          <>
            <p className={s.menuGroupTitle}>
              Продукти, які не рекомендовані до вживання:
            </p>
            <ul className={s.menuGroupList}>
              {itemsList.map((el) => (
                <li key={nanoid()} className={s.menuGroupItems}>
                  {el}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <Link to="/registration">
        <Button
          text="Схуднути"
          type="button"
          btnClass="btn"
          handleClick={removeClassList}
        />
      </Link>
    </>
  );
};

export default DailyCalorieIntake;
