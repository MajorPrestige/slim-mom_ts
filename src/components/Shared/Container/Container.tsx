import { FC } from 'react';

interface PropsContainer {
  children: React.ReactNode;
}

const Container: FC<PropsContainer> = ({ children }) => {
  return (
    <div className="mx-auto pr-5 pl-5 mobile:w-[480px] tablet:w-[768px] tablet:px-8 desktop:w-[1280px] desktop:px-4 ">
      {children}
    </div>
  );
};

export default Container;
