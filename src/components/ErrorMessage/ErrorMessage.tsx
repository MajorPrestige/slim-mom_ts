import { FC } from 'react';
import s from './ErrorMessage.module.scss';
import style from '../../pages/NotFoundPage/NotFound.module.scss';

interface IErrorMessage {
  status: string,
}

const ErrorMessage: FC<IErrorMessage> = ({ status }) => {
  return (
    <div className={s.errorMessageBlock}>
      <div className={style.boo}>
        <div className={style.face} id="face"></div>
      </div>
      <p className={s.errorMessageTitle}>Щось пішло не так...</p>
      <p className={s.errorMessageText}>{status}</p>
    </div>
  );
};

export default ErrorMessage;