import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosGetDailyRate, axiosGetDailyRateUser } from 'api/daily-rate';
import { getUser } from 'redux/auth/auth-opetations';
import { UserInputData } from 'types/daily-rate.type';
import { RootState } from 'redux/store';
import handleRejectWithValue from 'helpers/rejectWithValue';

export const dailyRateInfo = createAsyncThunk(
  'daily-rate',
  async (data: UserInputData, { rejectWithValue }) => {
    try {
      const result = await axiosGetDailyRate(data);
      return result;
    } catch (error) {
      handleRejectWithValue(rejectWithValue, error);
    }
  }
);

export const dailyRateUser = createAsyncThunk(
  'daily-rate/userId',
  async (
    userData: UserInputData & { id: string },
    { rejectWithValue, getState, dispatch }
  ) => {
    try {
      const { id, ...data } = userData;
      const { auth } = getState() as RootState;
      const accessToken: string = auth.accessToken;
      const result = await axiosGetDailyRateUser(id!, data);
      dispatch(getUser(accessToken));
      return result;
    } catch (error) {
      handleRejectWithValue(rejectWithValue, error);
    }
  }
);
