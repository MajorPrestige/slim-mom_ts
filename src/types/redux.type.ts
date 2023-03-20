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

export type StoreDailyRate = {
  id: string;
  dailyRate: null | number;
  summaries: Object[];
  notAllowedProducts: string[][];
  loading: boolean;
  error: any;
};

export type StoreError = {
  data: { message: string };
  status: number | null;
};

export type StoreDayProduct = {
  day: Record<any, any>;
  daySummary: Record<any, any>;
  eatenProduct: Record<any, any>;
  eatenProducts: any[];
  loading: boolean;
  error: any;
  aboutDay?: any;
  summary?: any;
};

export type StoreDairyCalendar = {
  date: string;
  productId: string;
  weight: number | null;
};
