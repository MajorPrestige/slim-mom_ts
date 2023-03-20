import { FC } from 'react';
import { useEffect } from 'react';

import UserRoutes from './Routes/UserRoutes';
import Header from './Header';
import { getSid, getUserIsRefreshing } from 'redux/auth/auth-selectors';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelecor';
import { refresh } from 'redux/auth/auth-opetations';

import Loader from 'components/Loader';

const App: FC = () => {
  const userIsRefreshing = useAppSelector(getUserIsRefreshing);

  const sid = useAppSelector(getSid);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refresh({ sid }));
    // eslint-disable-next-line
  }, []);

  if (userIsRefreshing) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <UserRoutes />
    </>
  );
};

export default App;