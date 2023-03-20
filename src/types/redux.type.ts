export type StoreDailyRate = {
  id: string;
  dailyRate: null | number;
  summaries: Object[];
  notAllowedProducts: string[][];
  loading: boolean;
error: null | StoreError | string;
};

export type StoreError = {
  data: { message: string };
  status: number | null;
};

export type StoreDairyCalendar = {
  date: string;
  productId: string;
  weight: number | null;
};

export type StoreSearch = {
  items: any[];
  loading: boolean;
error: null | StoreError | string;
};

export type StoreAuth = {
  user: Record<any, any>;
  todaySummary: Record<string, unknown>;
  sid: string;
  accessToken: string;
  refreshToken: string;
  isLogin: boolean;
  loading: boolean;
  isRefreshing: boolean;
error: null | StoreError | string;
  newUser: Record<string, unknown>;
};

export type StoreDayProduct = {
  day: Record<any, any>;
  daySummary: Record<any, any>;
  eatenProduct: Record<any, any>;
  eatenProducts: any[];
  loading: boolean;
  error: null | StoreError | string;
  aboutDay?: any;
  summary?: any;
};
