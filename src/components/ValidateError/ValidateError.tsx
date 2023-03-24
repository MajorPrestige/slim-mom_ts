import {FC} from 'react'

interface PropsValidateError {
  error?: string;
}

const ValidateError:FC<PropsValidateError> = ({error}) => {
  return <span className='absolute text-xs text-red bottom-[-20px]'>{error}</span>;
}

export default ValidateError;