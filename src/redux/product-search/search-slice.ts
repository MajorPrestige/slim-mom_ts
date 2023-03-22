import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getProductOperations } from './search-operations';
import { ProductInfo } from 'types/product.type';
import { StoreSearch, StoreError } from 'types/redux.type';

const initialState: StoreSearch = {
  items: [],
  loading: false,
  error: '',
};

const getProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: {
    [getProductOperations.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [getProductOperations.fulfilled.type]: (
      store,
      action: PayloadAction<ProductInfo>
    ) => {
      store.loading = false;
      store.items = action.payload;
    },
    [getProductOperations.rejected.type]: (
      store,
      action: PayloadAction<StoreError>
    ) => {
      store.loading = false;
      store.error = action.payload;
    },
  },
});

export default getProductSlice.reducer;
