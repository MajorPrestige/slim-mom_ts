import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAppSelector from 'hooks/useAppSelecor';
import { getLogin } from 'redux/auth/auth-selectors';

const PrivateRoute: FC = () => {
  const isLogin = useAppSelector(getLogin);

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
