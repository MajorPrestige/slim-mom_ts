import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosProductSearch } from '../../api/product-search';
import handleRejectWithValue from 'helpers/rejectWithValue';

export const getProductOperations = createAsyncThunk(
  '/product',
  async (query: string, { rejectWithValue }) => {
    try {
      const data = await axiosProductSearch(query);
      return data;
    } catch (error) {
      handleRejectWithValue(rejectWithValue, error);
    }
  }
);
