import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  axiosLogin,
  axiosLogout,
  axiosRegister,
  axiosRefresh,
  axiosGetUser,
} from 'api/auth';
import { UserData, UserLoginData } from 'types/auth.type';
import { RootState } from 'redux/store';
import handleRejectWithValue from 'helpers/rejectWithValue';

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
      const errorData = handleRejectWithValue(error);
      return rejectWithValue(errorData);
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
      const errorData = handleRejectWithValue(error);
      return rejectWithValue(errorData);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState() as RootState;
      const accessToken: string = auth.accessToken;
      const data = await axiosLogout(accessToken);
      return data;
    } catch (error) {
      const errorData = handleRejectWithValue(error);
      return rejectWithValue(errorData);
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
      const errorData = handleRejectWithValue(error);
      return rejectWithValue(errorData);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (sid: { sid: string }, { rejectWithValue, getState, dispatch }) => {
    try {
      const { auth } = getState() as RootState;
      const refreshToken: string = auth.refreshToken;
      const data = await axiosRefresh(sid, refreshToken);
      const { newAccessToken } = data;
      dispatch(getUser(newAccessToken));
      return data;
    } catch (error) {
      const errorData = handleRejectWithValue(error);
      return rejectWithValue(errorData);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState() as RootState;
      if (!auth.sid) {
        return false;
      }
    },
  }
);
