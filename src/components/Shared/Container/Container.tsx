import { FC } from 'react';

interface PropsContainer {
  children: React.ReactNode;
}

const Container: FC<PropsContainer> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
