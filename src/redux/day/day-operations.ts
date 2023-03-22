import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosDay, fetchDeleteDay, axiosDayInfo } from 'api/day';
import { RootState } from 'redux/store';
import { ProductDayInfo } from 'types/day.type';
import handleRejectWithValue from 'helpers/rejectWithValue';

export const postEatenProduct = createAsyncThunk(
  'day',
  async (data: ProductDayInfo, { rejectWithValue, dispatch, getState }) => {
    try {
      const { dairyCalendar } = getState() as RootState;
      const date: string = dairyCalendar.date;
      const result = await axiosDay(data);
      dispatch(getInfoByDay({ date }));
      return result;
    } catch (error) {
      const errorData = handleRejectWithValue(error);
      return rejectWithValue(errorData);
    }
  }
);

export const getInfoByDay = createAsyncThunk(
  'day/info',
  async (date: { date: string }, { rejectWithValue }) => {
    try {
      const result = await axiosDayInfo(date);
      return result;
    } catch (error) {
      const errorData = handleRejectWithValue(error);
      return rejectWithValue(errorData);
    }
  }
);

export const deleteEatenProduct = createAsyncThunk(
  'day/delete',
  async (userDataId: string, { rejectWithValue, dispatch, getState }) => {
    try {
      const { dairyCalendar, dayProduct, auth } = getState() as RootState;
      const date: string = dairyCalendar.date;
      const id: string = dayProduct.aboutDay.id;
      const accessToken: string = auth.accessToken;

      const result = await fetchDeleteDay(
        {
          dayId: id,
          eatenProductId: userDataId,
        },
        accessToken
      );
      dispatch(getInfoByDay({ date }));

      return result;
    } catch (error) {
      const errorData = handleRejectWithValue(error);
      return rejectWithValue(errorData);
    }
  }
);

export type DeleteEatenProductAction = ReturnType<typeof deleteEatenProduct>;
