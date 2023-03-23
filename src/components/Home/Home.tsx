import { FC } from 'react';
// import { dailyRateInfo } from '../../redux/daily-rate/daily-rate-operations';
// import useAppDispatch from 'hooks/useAppDispatch';
import { useMediaQuery } from 'react-responsive';

import s from './Home.module.scss';

import DailyCaloriesForm from '../DailyCaloriesForm';

import bcgDesktop from '../../images/desktop/bcgD.png';
import bcgDesktop2x from '../../images/desktop/bcgD@2x.png';

const Home: FC = () => {
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <section className={s.home}>
      <DailyCaloriesForm />

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
