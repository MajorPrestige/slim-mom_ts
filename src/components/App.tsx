import { FC } from 'react';
import Loader from './Loader';

const App: FC = () => {
  return <div className='font-extrabold'>Hello world
    <Loader />
  </div>;
};

export default App;
