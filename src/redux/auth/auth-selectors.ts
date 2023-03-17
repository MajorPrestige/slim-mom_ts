import { RootState } from "redux/store";

export const getLogin = (state: RootState) => state.auth.isLogin;
export const getLoading = (state: RootState) => state.auth.loading;
export const getUserName = (state: RootState) => state.auth.user.username;
export const getSid = (state: RootState) => state.auth.sid;
export const getAccessToken = (state: RootState) => state.auth.accessToken;
export const getDayId = (state: RootState) => state.auth.user.days;
export const getErrorLogin = (state: RootState) => state.auth.error;
export const getID = (state: RootState) => state.auth.user.id;

export const getNotAllowedProducts = (state: RootState) =>
  state.auth.user.userData?.notAllowedProducts;

export const getNewUserId = (state: RootState) => state.auth.newUser?.id;
export const getUserIsRefreshing = (state: RootState) => state.auth.isRefreshing;