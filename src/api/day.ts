import { instance } from './auth';
import {
  ProductDayInfo,
  DayDiary,
  DayInfo,
  DeleteProduct,
  UpdatedDaySummary,
} from 'types/day.type';

export const axiosDay = async (ProductDayInfo: ProductDayInfo) => {
  const { data } = await instance.post<DayDiary>('/day', ProductDayInfo);
  return data;
};

export const axiosDayInfo = async (date: { date: string }) => {
  const { data } = await instance.post<DayInfo>('/day/info', date);
  return data;
};

export async function axiosDeleteDay(product: DeleteProduct, accessToken: string) {
  const serverData = await fetch('https://slimmom-backend.goit.global/day', {
    method: 'DELETE',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + accessToken,
    },
  });
  const data: Promise<UpdatedDaySummary> = serverData.json();
  return data;
}
