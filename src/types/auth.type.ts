export type UserData = {
  email: string;
  password: string;
  username: string;
};

export type UserLoginData = {
  email: string;
  password: string;
};

export type RegisterDataResponse = {
  email: string;
  password: string;
  id: string;
};

export type RefreshDataResponse = {
  newAccessToken: string;
  newRefreshToken: string;
  sid: string;
};

export type LoginDataResponse = {
  accessToken: string;
  refreshToken: string;
  sid: string;
  todaySummary: {
    date: string;
    kcalLeft: number;
    kcalConsumed: number;
    dailyRate: number;
    percentsOfDailyRate: number;
    userId: string;
    id: string;
  };
  // todaySummary: Record<string, never>;
  user: {
    email: string;
    username: string;
    userData: {
      weight: number;
      height: number;
      age: number;
      bloodType: number;
      desiredWeight: number;
      dailyRate: number;
      notAllowedProducts: string[];
    };
    id: string;
  };
};

export type UserInfo = {
  email: string;
  username: string;
  id: string;
  userData: {
    weight: number;
    height: number;
    age: number;
    bloodType: number;
    desiredWeight: number;
    dailyRate: number;
    notAllowedProducts: string[];
  };
  days: {
    _id: string;
    eatenProducts: {
      title: string;
      weight: number;
      kcal: number;
      id: string;
    }[];
    date: string;
    __v: number;
    daySummary: {
      date: string;
      kcalLeft: number;
      kcalConsumed: number;
      dailyRate: number;
      percentsOfDailyRate: number;
      userId: string;
      _id: string;
      __v: number;
    };
  }[];
};
