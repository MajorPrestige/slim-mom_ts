import { useEffect, useState, FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import useAppSelector from 'hooks/useAppSelecor';
import useAppDispatch from 'hooks/useAppDispatch';

import s from './Login.module.scss';

import Container from 'components/Shared/Container';
import TextField from 'components/Shared/TextField';
import { field } from 'components/Shared/TextField/fields';
import Button from 'components/Shared/Button';
import ValidateError from 'components/ValidateError/ValidateError';
import Modal from '../../components/Modal/Modal';

import bcgDesktop from '../../images/desktop/bcgD.png';
import bcgDesktop2x from '../../images/desktop/bcgD@2x.png';

import schema from 'schemas/auth';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getErrorLogin } from 'redux/auth/auth-selectors';
import { clearNewUser } from 'redux/auth/auth-slice';
import { login } from 'redux/auth/auth-opetations';
import { UserLoginData } from 'types/auth.type';

const Login: FC = () => {
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const errorLogin = useAppSelector(getErrorLogin);

  const { control, handleSubmit, reset, formState: {errors} } = useForm<UserLoginData>({
    resolver: yupResolver(schema.loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    dispatch(clearNewUser());
    // eslint-disable-next-line
  }, []);

  const onSubmit: SubmitHandler<UserLoginData> = (data) => {
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
              >
                {errors.email && <ValidateError error={errors.email.message} />}
              </TextField>
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
              >
                {errors.password && (
                  <ValidateError error={errors.password.message} />
                )}
              </TextField>
            )}
          />
          <div className={s.wrap}>
            <Button text="Ввійти" btnClass="btn" />
            <Link to="/registration" className='inline-block text-center min-w-[182px] rounded-[30px] border-2 border-solid border-accent-color py-[13px] px-[25px] shadow-btn-shadow bg-main-color transition text-accent-color hover:bg-accent-color hover:text-main-color'>Реєстрація</Link>

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
