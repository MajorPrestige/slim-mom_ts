import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosLogin, axiosLogout, axiosRegister, axiosRefresh,axiosGetUser } from 'api/auth';
import { UserData, UserLoginData } from 'types/auth.type';

export const register = createAsyncThunk(
  'auth/register',
  async (userData: UserData, { rejectWithValue, dispatch }) => {
    try {
      const { email, password } = userData;
      const data = await axiosRegister(userData);
      dispatch(
        login({
          email,
          password,
        })
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { data, status } = error.response!;
        return rejectWithValue({ data, status });
      } else if (error instanceof Error) {
        return rejectWithValue({ data: { message: error.message }, status: null });
      } else {
        return rejectWithValue({
          data: { message: 'An error occurred' },
          status: null,
        });
      }
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData: UserLoginData, { rejectWithValue }) => {
    try {
      const data = await axiosLogin(userData);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { data, status } = error.response!;
        return rejectWithValue({ data, status });
      } else if (error instanceof Error) {
        return rejectWithValue({ data: { message: error.message }, status: null });
      } else {
        return rejectWithValue({
          data: { message: 'An error occurred' },
          status: null,
        });
      }
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { accessToken },
      } = getState() as any;
      const data = await axiosLogout(accessToken);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { data, status } = error.response!;
        return rejectWithValue({ data, status });
      } else if (error instanceof Error) {
        return rejectWithValue({ data: { message: error.message }, status: null });
      } else {
        return rejectWithValue({
          data: { message: 'An error occurred' },
          status: null,
        });
      }
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/get/user',
  async (accessToken: string, { rejectWithValue }) => {
    try {
      const data = await axiosGetUser(accessToken);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { data, status } = error.response!;
        return rejectWithValue({ data, status });
      } else if (error instanceof Error) {
        return rejectWithValue({ data: { message: error.message }, status: null });
      } else {
        return rejectWithValue({
          data: { message: 'An error occurred' },
          status: null,
        });
      }
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (sid: string, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        auth: { refreshToken },
      } = getState() as any;
      const data = await axiosRefresh(sid, refreshToken);
      const { newAccessToken } = data;
      dispatch(getUser(newAccessToken));
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { data, status } = error.response!;
        return rejectWithValue({ data, status });
      } else if (error instanceof Error) {
        return rejectWithValue({ data: { message: error.message }, status: null });
      } else {
        return rejectWithValue({
          data: { message: 'An error occurred' },
          status: null,
        });
      }
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState() as any;
      if (!auth.sid) {
        return false;
      }
    },
  }
);
