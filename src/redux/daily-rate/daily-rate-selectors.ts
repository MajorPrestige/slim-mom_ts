import { RootState } from 'redux/store';

export const getErrorDaily = (state: RootState) => state.dailyRate.error;
export const getDailyRate = (state: RootState) => state.dailyRate.dailyRate;
export const getNotAllowedProducts = (state: RootState) =>
  state.dailyRate.notAllowedProducts;
