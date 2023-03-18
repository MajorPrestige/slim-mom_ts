import { createSlice } from '@reduxjs/toolkit';
import {
  postEatenProduct,
  deleteEatenProduct,
  getInfoByDay,
} from './day-operations';
import { StoreDayProduct } from 'types/redux.type';

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

    [postEatenProduct.pending.type]: store => {
      store.loading = true;
      store.error = null;
    },
    [postEatenProduct.fulfilled.type]: (store, { payload }) => {
      store.day = payload.day;
      store.daySummary = payload.daySummary;
      store.eatenProduct = payload.eatenProduct;
      store.loading = false;
      store.summary = payload;
    },
    [postEatenProduct.rejected.type]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    //* deleteDay

    [deleteEatenProduct.pending.type]: store => {
      store.loading = true;
      store.error = null;
    },
    [deleteEatenProduct.fulfilled.type]: (store, { payload }) => {
      store.daySummary = payload.newDaySummary;
      store.loading = false;
    },
    [deleteEatenProduct.rejected.type]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    //* getInfoAboutDay

    [getInfoByDay.pending.type]: store => {
      store.loading = true;
      store.error = null;
    },
    [getInfoByDay.fulfilled.type]: (store, { payload }) => {
      store.eatenProducts = payload.eatenProducts;
      store.loading = false;
      store.aboutDay = payload;
    },
    [getInfoByDay.rejected.type]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default daySlice.reducer;

export const { clearDay } = daySlice.actions;
