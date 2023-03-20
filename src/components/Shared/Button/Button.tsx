import { FC } from 'react';
import s from './Button.module.scss';

interface ButtonProps {
  text: string;
  type: 'submit' | 'button' | 'reset' | undefined;
  btnClass: string;
  handleClick: () => any;
}

const Button: FC<Partial<ButtonProps>> = ({
  text = '+',
  type = 'submit',
  btnClass = 'btnPlus',
  handleClick,
}) => {
  return (
    <button className={s[btnClass]} onClick={handleClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
