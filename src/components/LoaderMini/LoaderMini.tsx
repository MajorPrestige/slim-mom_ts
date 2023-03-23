import { FC } from 'react';
import { Oval } from 'react-loader-spinner';

const Loader: FC = () => {
  return (
    <div className="flex, justify-center items-center h-[200px] bg-main-color">
      <Oval height="50" width="50" color="#fc842d" secondaryColor="transparent" />
    </div>
  );
};

export default Loader;
