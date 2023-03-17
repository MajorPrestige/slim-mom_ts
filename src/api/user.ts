import { instance } from './auth';
import { UserInfo } from 'types/user.type';

export const axiosGetUser = async (accessToken: string) => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  const { data } = await instance.get<UserInfo>('/user');
  return data;
};
