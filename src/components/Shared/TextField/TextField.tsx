import React, { FC } from 'react';
import s from './TextField.module.scss';

interface TextFieldProps {
  type: React.HTMLInputTypeAttribute;
  name: string;
  value: string | number | readonly string[] | undefined;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  required: boolean | undefined;
  pattern: string;
  title: string;
}

const TextField: FC<TextFieldProps> = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  required,
  pattern,
  title,
}) => {
  return (
    <label className={s.label}>
      <input
        className={s.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        pattern={pattern}
        title={title}
      />
      <span className={s.span}>{placeholder}</span>
    </label>
  );
};
export default TextField;
