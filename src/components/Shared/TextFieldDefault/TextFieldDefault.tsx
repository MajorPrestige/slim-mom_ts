import React, { FC } from 'react';
import s from './TextFieldDefault.module.scss';

interface ITextFieldDefault {
  type: React.HTMLInputTypeAttribute;
  name: string;
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  required: boolean | undefined;
  pattern: string;
  title: string;
  disabled: boolean | undefined;
  control?: any;
}

const TextFieldDefault: FC<Partial<ITextFieldDefault>> = ({
  type,
  name,
  value,
  handleChange,
  placeholder,
  required,
  pattern,
  title,
  disabled,
}) => {
  return (
    <label>
      <input
        className={s.input}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
        disabled={disabled}
      />
    </label>
  );
};
export default TextFieldDefault;

TextFieldDefault.defaultProps = {
  type: 'text',
  required: false,
};
