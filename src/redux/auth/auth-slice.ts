import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { register, login, logout, refresh, getUser } from './auth-opetations';
import {
  RegisterDataResponse,
  LoginDataResponse,
  RefreshDataResponse,
} from 'types/auth.type';
import { StoreAuth, StoreError } from 'types/redux.type';
import { UserInfo } from 'types/auth.type';

const initialState: StoreAuth = {
  user: {},
  todaySummary: {},
  sid: '',
  accessToken: '',
  refreshToken: '',
  isLogin: false,
  loading: false,
  isRefreshing: false,
  error: null,
  newUser: {},
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearNewUser: (store) => {
      store.newUser = {};
    },
  },
  extraReducers: {
    // * REGISTER

    [register.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
    },

    [register.fulfilled.type]: (
      store,
      action: PayloadAction<RegisterDataResponse>
    ) => {
      store.loading = false;
      store.isLogin = false;
      store.newUser = action.payload;
      store.user = { ...store.user };
      store.sid = '';
      store.accessToken = '';
      store.refreshToken = '';
    },

    [register.rejected.type]: (store, action: PayloadAction<StoreError>) => {
      store.loading = false;
      store.error = action.payload.data.message;
    },

    // * LOGIN

    [login.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
    },

    [login.fulfilled.type]: (store, action: PayloadAction<LoginDataResponse>) => {
      store.loading = false;
      store.isLogin = true;
      store.user = action.payload.user;
      store.sid = action.payload.sid;
      store.accessToken = action.payload.accessToken;
      store.refreshToken = action.payload.refreshToken;
    },

    [login.rejected.type]: (store, action: PayloadAction<StoreError>) => {
      store.loading = false;
      store.error = action.payload.data.message;
    },

    // * LOGOUT

    [logout.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
    },
    [logout.fulfilled.type]: () => ({ ...initialState }),
    [logout.rejected.type]: (store, action: PayloadAction<StoreError>) => {
      store.loading = false;
      store.error = action.payload.data.message;
    },

    // * REFRESH

    [refresh.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
      store.isRefreshing = true;
    },

    [refresh.fulfilled.type]: (
      store,
      action: PayloadAction<RefreshDataResponse>
    ) => {
      store.isLogin = true;
      store.loading = false;
      store.sid = action.payload.sid;
      store.accessToken = action.payload.newAccessToken;
      store.refreshToken = action.payload.newRefreshToken;
      store.isRefreshing = false;
    },

    [refresh.rejected.type]: () => ({
      ...initialState,
    }),

    // * GET USER

    [getUser.pending.type]: (store) => {
      store.loading = true;
      store.error = null;
    },

    [getUser.fulfilled.type]: (store, action: PayloadAction<UserInfo>) => {
      store.isLogin = true;
      store.loading = false;
      store.user = action.payload;
    },

    [getUser.rejected.type]: (store, action: PayloadAction<StoreError>) => {
      store.loading = false;
      store.error = action.payload.data.message;
    },
  },
});

export default auth.reducer;
export const { clearNewUser } = auth.actions;
