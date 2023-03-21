import { useEffect, useState, FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import useAppSelector from 'hooks/useAppSelecor';
import useAppDispatch from 'hooks/useAppDispatch';

import s from './Login.module.scss';

import Container from 'components/Shared/Container';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Modal from '../../components/Modal/Modal';

import bcgDesktop from '../../images/desktop/bcgD.png';
import bcgDesktop2x from '../../images/desktop/bcgD@2x.png';

import { getErrorLogin } from 'redux/auth/auth-selectors';
import { clearNewUser } from 'redux/auth/auth-slice';
import { login } from 'redux/auth/auth-opetations';
import { UserLoginData } from 'types/auth.type';

const Login: FC = () => {
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const errorLogin = useAppSelector(getErrorLogin);

  const { control, handleSubmit, reset } = useForm<UserLoginData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    dispatch(clearNewUser());
    // eslint-disable-next-line
  }, []);

  const onSubmit: SubmitHandler<UserLoginData> = (data, e) => {
    // e.preventDefault();
    dispatch(login(data));
    setModalOpen(true);
    reset();
  };

  return (
    <section className={s.login}>
      <Container>
        <h2 className={s.title}>Вхід</h2>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                control={control}
                handleChange={onChange}

                {...field.email}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{ required: true, minLength: 8, maxLength: 30 }}
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                control={control}
                handleChange={onChange}
                {...field.password}
              />
            )}
          />
          <div className={s.wrap}>
            <Button text="Ввійти" btnClass="btn" />
          </div>
        </form>
        {!isRetina && (
          <img className={s.imgDesktop} src={bcgDesktop} alt="background" />
        )}
        {isRetina && (
          <img className={s.imgDesktop} src={bcgDesktop2x} alt="background" />
        )}
        {modalOpen && errorLogin && (
          <Modal
            setModalOpen={setModalOpen}
            children={<ErrorMessage status={errorLogin} />}
          />
        )}
      </Container>
    </section>
  );
};

export default Login;