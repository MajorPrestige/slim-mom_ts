import axios from 'axios';

const handleRejectWithValue = ( error: unknown) => {
  if (axios.isAxiosError(error)) {
    const { data, status } = error.response!;
    return { data, status };
  }
  if (error instanceof Error) {
    return { data: { message: error.message }, status: null };
  }
  return {
    data: { message: 'An error occurred' },
    status: null,
  };
};

export default handleRejectWithValue;