export type StoreAuth = {
  user: Record<any, any>;
  todaySummary: Record<string, unknown>;
  sid: string;
  accessToken: string;
  refreshToken: string;
  isLogin: boolean;
  loading: boolean;
  isRefreshing: boolean;
  error: any;
  newUser: Record<string, unknown>;
};

export type StoreError = {
  data: { message: string };
  status: number | null;
};
