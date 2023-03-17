import axios from 'axios';
import {
  UserData,
  RegisterDataResponse,
  LoginDataResponse,
  UserLoginData,
  RefreshDataResponse,
} from 'types/auth.type';

export const instance = axios.create({
  baseURL: 'https://slimmom-backend.goit.global',
});

export const axiosRegister = async (userData: UserData) => {
  const { data } = await instance.post<RegisterDataResponse>(
    '/auth/register',
    userData
  );
  return data;
};

export const axiosLogin = async (userData: UserLoginData) => {
  const { data } = await instance.post<LoginDataResponse>('/auth/login', userData);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const axiosLogout = async (accessToken: string) => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  const { data } = await instance.post<void>('/auth/logout');
  instance.defaults.headers.Authorization = null;
  return data;
};

export const axiosRefresh = async (currentSid: string, refreshToken: string) => {
  instance.defaults.headers.Authorization = `Bearer ${refreshToken}`;
  const { data } = await instance.post<RefreshDataResponse>(
    '/auth/refresh',
    currentSid
  );
  return data;
};

export default instance;
