import instance from './auth';
import { ProductInfo } from 'types/product.type';

export const axiosProductSearch = async (query: string) => {
  const { data } = await instance.get<ProductInfo>(`/product?search=${query}`);
  return data;
};
