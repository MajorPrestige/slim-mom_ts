import { useState, FC } from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelecor';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import s from './CalcForm.module.scss';

import SideBar from 'components/SideBar';
import TextField from '../Shared/TextField/TextField';
import { field } from '../Shared/TextField/fields';
import Button from '../Shared/Button/Button';
import TextFieldDefault from 'components/Shared/TextFieldDefault/TextFieldDefault';
import { DailyFormDefaultValue } from 'types/useForm.type';

import { dailyRateUser } from 'redux/daily-rate/daily-rate-operations';
import { getID } from 'redux/auth/auth-selectors';

const CalcForm: FC = () => {
  const [bloodType, setActiveCheckbox] = useState<Number | null>(null);
  const navigate = useNavigate();

  const id = useAppSelector(getID);

  const dispatch = useAppDispatch();

  const { control, register, handleSubmit, reset } = useForm<DailyFormDefaultValue>({
    defaultValues: {
      weight: '',
      height: '',
      age: '',
      desiredWeight: '',
      bloodType: '',
    },
  });

  const onSubmit: SubmitHandler<DailyFormDefaultValue> = (
    data
    // e: React.FormEvent<HTMLInputElement>
  ) => {
    const numberData = {
      weight: Number(data.weight),
      height: Number(data.height),
      age: Number(data.age),
      desiredWeight: Number(data.desiredWeight),
      bloodType: Number(data.bloodType),
    };

    // e.preventDefault();
    dispatch(dailyRateUser({ id, ...numberData }));
    reset();

    navigate('/dairy');
  };

  return (
    <div className={s.wrapper}>
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
                />
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
                />
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
                />
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
                />
              )}
            />
            <Controller
              control={control}
              name="bloodType"
              render={({ field: { onChange, value } }) => (
                <TextFieldDefault
                  value={value}
                  control={control}
                  handleChange={onChange}
                  {...field.bloodType}
                />
              )}
            />

            <div className={s.radioBlock}>
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
      <SideBar />
    </div>
  );
};

export default CalcForm;
