import { FC } from 'react';
import { Oval } from 'react-loader-spinner';

const Loader: FC = () => {
  return (
    <div className="flex justify-center mt-2.5 items-center bg-main-color tablet-before:mt-10">
      <Oval height="50" width="50" color="#fc842d" secondaryColor="transparent" />
    </div>
  );
};

export default Loader;
