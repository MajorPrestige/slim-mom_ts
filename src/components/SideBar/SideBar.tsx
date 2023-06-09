import React, { FC, useState, useEffect } from 'react';
import useAppSelector from 'hooks/useAppSelecor';
import useAppDispatch from 'hooks/useAppDispatch';

import { nanoid } from '@reduxjs/toolkit';

import styles from '../SideBar/SideBar.module.scss';

import TextFieldDefault from 'components/Shared/TextFieldDefault/TextFieldDefault';
import { field } from '../Shared/TextField/fields';

import {
  getKcalLeft,
  getKcalConsumed,
  getDailyRate,
  getPercentsOfDailyRate,
  getKcalLeft2,
  getKcalConsumed2,
  getDailyRate2,
  getPercentsOfDailyRate2,
} from 'redux/day/day-selectors';
import { getNotAllowedProducts } from 'redux/auth/auth-selectors';
import { getInfoByDay } from 'redux/day/day-operations';
import { getDay } from 'redux/dairy-calendar/dairy-calendar-selectors';

const SideBar: FC = () => {
  const date = useAppSelector(getDay);
  const notAllowedProducts = useAppSelector(getNotAllowedProducts);

  const kcalLeft = useAppSelector(getKcalLeft);
  const kcalConsumed = useAppSelector(getKcalConsumed);
  const dailyRate = useAppSelector(getDailyRate);
  const percentsOfDailyRate = useAppSelector(getPercentsOfDailyRate);

  const kcalLeft2 = useAppSelector(getKcalLeft2);
  const kcalConsumed2 = useAppSelector(getKcalConsumed2);
  const dailyRate2 = useAppSelector(getDailyRate2);
  const percentsOfDailyRate2 = useAppSelector(getPercentsOfDailyRate2);

  const dispatch = useAppDispatch();

  const [filteredFood, setFilteredFood] = useState([]);

  useEffect(() => {
    if (date) {
      dispatch(getInfoByDay({ date }));
    }
  }, [dispatch, date, notAllowedProducts]);

  useEffect(() => {
    if (!notAllowedProducts) {
      return;
    }
    setFilteredFood(notAllowedProducts);
  }, [notAllowedProducts]);

  const filterRecommendedFood = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredProducts = notAllowedProducts.filter((el: string) =>
      el.includes(e.target.value)
    );

    setFilteredFood(filteredProducts);
  };

  return (
    <div className={styles.container_sidebar}>
      <div className={styles.sum}>
        <h3 className={styles.title_sidebar}>Резюме за {date}</h3>
        <ul className="w-[280px]">
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar_sum}>Залишилося</p>
            <span className="desktop:mr-10">
              {kcalLeft
                ? Math.floor(kcalLeft) + ' kcal'
                : kcalLeft2
                ? Math.floor(kcalLeft2) + ' kcal'
                : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>Спожилося</p>
            <span className="desktop:mr-10">
              {kcalConsumed
                ? Math.floor(kcalConsumed) + ' kcal'
                : kcalConsumed2
                ? Math.floor(kcalConsumed2) + ' kcal'
                : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>Добова норма</p>
            <span className="desktop:mr-10">
              {dailyRate
                ? Math.floor(dailyRate) + ' kcal'
                : dailyRate2
                ? Math.floor(dailyRate2) + ' kcal'
                : '000 kcal'}
            </span>
          </li>
          <li className={styles.item_sidebar}>
            <p className={styles.text_sidebar}>% від норми</p>
            <span className="desktop:mr-10">
              {percentsOfDailyRate
                ? Math.floor(percentsOfDailyRate) + ' %'
                : percentsOfDailyRate2
                ? Math.floor(percentsOfDailyRate2) + ' %'
                : '0 %'}
            </span>
          </li>
        </ul>
      </div>
      <div className="w-[280px]">
        <h3 className={styles.title_sidebar}>Не рекомендована їжа</h3>
        {notAllowedProducts?.length > 0 && (
          <TextFieldDefault handleChange={filterRecommendedFood} {...field.filter} />
        )}
        {notAllowedProducts?.length > 0 && (
          <div className={styles.menuGroupContainer}>
            <ol className={styles.menuGroupList}>
              {filteredFood.map((el) => (
                <li key={nanoid()} className={styles.menuGroupItems}>
                  {el}
                </li>
              ))}
            </ol>
          </div>
        )}
        {notAllowedProducts?.length === 0 && (
          <p className={styles.text_sidebar_food}>
            Тут відображатиметься ваш раціон.
          </p>
        )}
      </div>
    </div>
  );
};

export default SideBar;
