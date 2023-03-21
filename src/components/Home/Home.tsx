import { FC } from 'react';
// import { dailyRateInfo } from '../../redux/daily-rate/daily-rate-operations';
// import useAppDispatch from 'hooks/useAppDispatch';
import { useMediaQuery } from 'react-responsive';

import s from './Home.module.scss';

import DailyCaloriesForm from '../DailyCaloriesForm';
// import { UserInputData } from 'types/daily-rate.type';

import bcgDesktop from '../../images/desktop/bcgD.png';
import bcgDesktop2x from '../../images/desktop/bcgD@2x.png';

const Home: FC = () => {
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  // const dispatch = useAppDispatch();

  // const onGetDailyRate = (store: UserInputData) => {
  //   const action = dailyRateInfo(store);
  //   dispatch(action);
  // };

  return (
    <section className={s.home}>
      <DailyCaloriesForm 
      // onSubmit={onGetDailyRate} 
      />

      {!isRetina && (
        <img className={s.imgDesktop} src={bcgDesktop} alt="background" />
      )}
      {isRetina && (
        <img className={s.imgDesktop} src={bcgDesktop2x} alt="background" />
      )}
    </section>
  );
};

export default Home;
