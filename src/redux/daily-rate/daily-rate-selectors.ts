import { RootState } from 'redux/store';

export const getErrorDaily = (state: RootState) => state.dailyRate.error;
export const dailyRate = (state: RootState) => state.dailyRate.dailyRate;
export const notAllowedProducts = (state: RootState) =>
  state.dailyRate.notAllowedProducts;

// const dailyRateSelectors = {
//   getErrorDaily,
//   dailyRate,
//   notAllowedProducts,
// };

// export default dailyRateSelectors;
