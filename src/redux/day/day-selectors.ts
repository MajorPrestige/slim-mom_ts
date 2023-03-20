import { RootState } from 'redux/store';

export const day = (state: RootState) => state.dayProduct.day;
export const daySummary = (state: RootState) => state.dayProduct.daySummary;
export const eatenProduct = (state: RootState) => state.dayProduct.eatenProduct;
export const eatenProducts = (state: RootState) => state.dayProduct.eatenProducts;
export const getEatenProductsLoading = (state: RootState) =>
  state.dayProduct.loading;

export const getKcalLeft = (state: RootState) =>
  state.dayProduct?.aboutDay?.daySummary?.kcalLeft;
export const getKcalConsumed = (state: RootState) =>
  state.dayProduct?.aboutDay?.daySummary?.kcalConsumed;
export const getDailyRate = (state: RootState) =>
  state.dayProduct?.aboutDay?.daySummary?.dailyRate;
export const getPercentsOfDailyRate = (state: RootState) =>
  state.dayProduct?.aboutDay?.daySummary?.percentsOfDailyRate;

export const getKcalLeft2 = (state: RootState) =>
  state.dayProduct?.aboutDay?.kcalLeft;
export const getKcalConsumed2 = (state: RootState) =>
  state.dayProduct?.aboutDay?.kcalConsumed;
export const getDailyRate2 = (state: RootState) =>
  state.dayProduct?.aboutDay?.dailyRate;
export const getPercentsOfDailyRate2 = (state: RootState) =>
  state.dayProduct?.aboutDay?.percentsOfDailyRate;

export const getDayLoading = (state: RootState) => state.dayProduct.loading;
