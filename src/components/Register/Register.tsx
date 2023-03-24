import { useState, FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { register } from 'redux/auth/auth-opetations';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelecor';

import s from './Register.module.scss';

import schema from 'schemas/auth';
import { field } from 'components/Shared/TextField/fields';
import TextField from 'components/Shared/TextField';
import Button from 'components/Shared/Button';
import Container from 'components/Shared/Container';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ValidateError from 'components/ValidateError/ValidateError';
import Modal from '../Modal/Modal';
import { UserData } from 'types/auth.type';

import bcgDesktop from '../../images/desktop/bcgD.png';
import bcgDesktop2x from '../../images/desktop/bcgD@2x.png';

import { getErrorLogin } from 'redux/auth/auth-selectors';

const Register: FC = () => {
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const errorLogin = useAppSelector(getErrorLogin);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema.registerSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<UserData> = (data) => {
    dispatch(register(data));
    setModalOpen(true);
    reset();
  };

  return (
    <section className={s.register}>
      <Container>
        <h2 className={s.title}>Реєстрація</h2>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="username"
            rules={{ required: true, maxLength: 16 }}
            render={({ field: { onChange, value } }) => (
              <TextField
                value={value}
                control={control}
                handleChange={onChange}
                {...field.username}
              >
                {errors.username && <ValidateError error={errors.username.message} />}
              </TextField>
            )}
          />
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
            <Button text="Реєстрація" btnClass="btn" />
            <Link to="/login" className='inline-block text-center min-w-[182px] rounded-[30px] border-2 border-solid border-accent-color py-[13px] px-[25px] shadow-btn-shadow bg-main-color text-accent-color'>Ввійти</Link>
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

export default Register;
