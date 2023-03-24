import { useState, FC } from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelecor';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from 'schemas/daily-form';
import s from './DailyCaloriesForm.module.scss';

import { field } from '../Shared/TextField/fields';
import Button from '../Shared/Button/Button';
import TextField from '../Shared/TextField/TextField';
import Modal from '../Modal/Modal';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import ValidateError from 'components/ValidateError/ValidateError';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Container from 'components/Shared/Container';
import TextFieldDefault from 'components/Shared/TextFieldDefault/TextFieldDefault';
import { DailyFormDefaultValue } from 'types/useForm.type';

import { getDailyRate, getErrorDaily } from 'redux/daily-rate/daily-rate-selectors';
import { dailyRateInfo } from 'redux/daily-rate/daily-rate-operations';

const DailyCaloriesForm: FC = () => {
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);

  const [bloodType, setActiveCheckbox] = useState<Number | null>(null);

  const dailyRateDate = useAppSelector(getDailyRate);
  const errorDaily = useAppSelector(getErrorDaily);

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<DailyFormDefaultValue>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      weight: '',
      height: '',
      age: '',
      desiredWeight: '',
      bloodType: '',
    },
  });

  const onSubmit: SubmitHandler<DailyFormDefaultValue> = (data) => {
    const numberData = {
      weight: Number(data.weight),
      height: Number(data.height),
      age: Number(data.age),
      desiredWeight: Number(data.desiredWeight),
      bloodType: Number(data.bloodType),
    };

    dispatch(dailyRateInfo(numberData));
    setActiveCheckbox(null);
    document.querySelector('body')!.classList.add('no-scroll');
    setModalOpen(true);
    reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <h1 className={s.title}>Розрахуйте свою денну норму калорій прямо зараз</h1>
        <div className={s.formParts}>
          <div className={s.formPart}>
            <Controller
              control={control}
              name="height"
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.height}
                >
                  {errors.height && <ValidateError error={errors.height.message} />}
                </TextField>
              )}
            />

            <Controller
              control={control}
              name="age"
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.age}
                >
                  {errors.age && <ValidateError error={errors.age.message} />}
                </TextField>
              )}
            />

            <Controller
              control={control}
              name="weight"
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.weight}
                >
                  {errors.weight && <ValidateError error={errors.weight.message} />}
                </TextField>
              )}
            />
          </div>

          <div className={s.formPart}>
            <Controller
              control={control}
              name="desiredWeight"
              render={({ field: { onChange, value } }) => (
                <TextField
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.desiredWeight}
                >
                  {errors.desiredWeight && (
                    <ValidateError error={errors.desiredWeight.message} />
                  )}
                </TextField>
              )}
            />
            <Controller
              control={control}
              name="bloodType"
              render={({ field: { onChange } }) => (
                <TextFieldDefault
                  value="Група крові*"
                  control={control}
                  handleChange={onChange}
                  {...field.bloodType}
                />
              )}
            />
            <div className={s.radioBlock}>
              {errors.bloodType && (
                <ValidateError error={errors.bloodType.message} />
              )}
              {[...Array(4)].map((_, idx) => (
                <div key={idx} className={s.listRadio}>
                  <label className={s.label}>
                    <input
                      {...register('bloodType', { required: true })}
                      className={s.checkbox}
                      type="radio"
                      name="bloodType"
                      checked={idx === bloodType}
                      onClick={() => setActiveCheckbox(idx)}
                      value={idx + 1}
                      placeholder="Blood type"
                    />
                    <span className={s.fake}></span>
                    <span className={s.text}>{idx + 1}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={s.buttonPosition}>
          <Button text="Схуднути" type="submit" btnClass="btn" />
        </div>
      </form>
      {modalOpen && dailyRateDate && (
        <Modal setModalOpen={setModalOpen} children={<DailyCalorieIntake />} />
      )}
      {modalOpen && errorDaily && (
        <Modal
          setModalOpen={setModalOpen}
          children={<ErrorMessage status={errorDaily} />}
        />
      )}
    </Container>
  );
};

export default DailyCaloriesForm;
