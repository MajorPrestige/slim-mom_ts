import { RootState } from 'redux/store';

export const getProduct = (state: RootState) => state.product.items;
export const getSearchLoading = (state: RootState) => state.product.loading;
export const getSearchError = (state: RootState) => state.product.error;
