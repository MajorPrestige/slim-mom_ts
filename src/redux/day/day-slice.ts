import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  postEatenProduct,
  deleteEatenProduct,
  getInfoByDay,
} from './day-operations';
import { StoreDayProduct, StoreError } from 'types/redux.type';
import { DayDiary, DayInfo, UpdatedDaySummary } from 'types/day.type';

const initialState: StoreDayProduct = {
  day: {},
  daySummary: {},
  eatenProduct: {},
  eatenProducts: [],
  loading: false,
  error: null,
};

const daySlice = createSlice({
  name: 'day',
  initialState,
  reducers: {
    clearDay: () => ({ ...initialState }),
  },
  extraReducers: {
    //* getDay

    [postEatenProduct.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [postEatenProduct.fulfilled.type]: (store, action: PayloadAction<DayDiary>) => {
      store.day = action.payload.day;
      store.daySummary = action.payload.daySummary;
      store.eatenProduct = action.payload.eatenProduct;
      store.loading = false;
      store.summary = action.payload;
    },
    [postEatenProduct.rejected.type]: (store, action: PayloadAction<StoreError>) => {
      store.loading = false;
      store.error = action.payload.data.message;
    },

    //* deleteDay

    [deleteEatenProduct.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [deleteEatenProduct.fulfilled.type]: (
      store,
      action: PayloadAction<UpdatedDaySummary>
    ) => {
      store.daySummary = action.payload.newDaySummary;
      store.loading = false;
    },
    [deleteEatenProduct.rejected.type]: (
      store,
      action: PayloadAction<StoreError>
    ) => {
      store.loading = false;
      store.error = action.payload.data.message;
    },

    //* getInfoAboutDay

    [getInfoByDay.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [getInfoByDay.fulfilled.type]: (store, action: PayloadAction<DayInfo>) => {
      store.eatenProducts = action.payload.eatenProducts;
      store.loading = false;
      store.aboutDay = action.payload;
    },
    [getInfoByDay.rejected.type]: (store, action: PayloadAction<StoreError>) => {
      store.loading = false;
      store.error = action.payload.data.message;
    },
  },
});

export default daySlice.reducer;

export const { clearDay } = daySlice.actions;
