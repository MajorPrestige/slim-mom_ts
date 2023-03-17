import instance from './auth';
import {
  UserInputData,
  DailyRateUserResponse,
  DailyRate,
} from 'types/daily-rate.type';

export const axiosGetDailyRate = async (UserInputData: UserInputData) => {
  const { data } = await instance.post<DailyRate>('/daily-rate', UserInputData);
  return data;
};

export const axiosGetDailyRateUser = async (
  id: string,
  UserInputData: UserInputData
) => {
  const { data } = await instance.post<DailyRateUserResponse>(
    `/daily-rate/${id}`,
    UserInputData
  );
  return data;
};
