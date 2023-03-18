import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { dailyRateInfo, dailyRateUser } from './daily-rate-operations';
import { StoreDailyRate, StoreError } from 'types/redux.type';
import { DailyRateResponse, DailyRateUserResponse } from 'types/daily-rate.type';

const initialState: StoreDailyRate = {
  id: '',
  dailyRate: null,
  summaries: [],
  notAllowedProducts: [],
  loading: false,
  error: null,
};

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  reducers: {},
  extraReducers: {
    [dailyRateInfo.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [dailyRateInfo.fulfilled.type]: (
      store,
      action: PayloadAction<DailyRateResponse>
    ) => {
      store.loading = false;
      store.dailyRate = action.payload.dailyRate;
      store.notAllowedProducts = action.payload.notAllowedProducts;
    },
    [dailyRateInfo.rejected.type]: (store, action: PayloadAction<StoreError>) => {
      store.loading = false;
      store.error = action.payload.data.message;
    },

    [dailyRateUser.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [dailyRateUser.fulfilled.type]: (
      store,
      action: PayloadAction<DailyRateUserResponse>
    ) => {
      store.loading = false;
      store.id = action.payload.id;
      store.dailyRate = action.payload.dailyRate;
      store.summaries = action.payload.summaries;
      store.notAllowedProducts = action.payload.notAllowedProducts;
    },
    [dailyRateUser.rejected.type]: (store, action: PayloadAction<StoreError>) => {
      store.loading = false;
      store.error = action.payload.data.message;
    },
  },
});

export default dailyRateSlice.reducer;
