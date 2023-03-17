import axios from 'axios';

const handleRejectWithValue = (rejectWithValue: Function, error: unknown) => {
  if (axios.isAxiosError(error)) {
    const { data, status } = error.response!;
    return rejectWithValue({ data, status });
  }
  if (error instanceof Error) {
    return rejectWithValue({ data: { message: error.message }, status: null });
  }
  return rejectWithValue({
    data: { message: 'An error occurred' },
    status: null,
  });
};

export default handleRejectWithValue;
