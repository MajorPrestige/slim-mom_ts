import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreDairyCalendar } from 'types/redux.type';

const initialState: StoreDairyCalendar = {
  date: '',
  productId: '',
  weight: null,
};

const dairyCalendarSlice = createSlice({
  name: 'postEatenProduct',
  initialState,
  reducers: {
    addDate: (store, action: PayloadAction<string>) => {
      store.date = action.payload;
    },
    addProductId: (store, action: PayloadAction<string>) => {
      store.productId = action.payload;
    },
    addWeight: (store, action: PayloadAction<null | number>) => {
      store.weight = action.payload;
    },
    clearData: () => ({ ...initialState }),
  },
});

export default dairyCalendarSlice.reducer;

export const { addDate, addProductId, addWeight, clearData } =
  dairyCalendarSlice.actions;
