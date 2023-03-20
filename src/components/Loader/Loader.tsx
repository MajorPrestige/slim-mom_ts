import { FC } from 'react';
import { Oval } from 'react-loader-spinner';

// import s from './Loader.module.scss';

const Loader: FC = () => {
  return (
    <div
      className={
        'fixed top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-xl'
      }
    >
      <Oval height="150" width="150" color="#fc842d" secondaryColor="transparent" />
    </div>
  );
};

export default Loader;
