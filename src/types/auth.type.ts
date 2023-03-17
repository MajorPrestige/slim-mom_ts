export type UserData = {
  email: string;
  password: string;
  username: string;
};

export type UserLoginData = {
  email: string;
  password: string;
}

export type RegisterDataResponse = {
  email: string;
  password: string;
  id: string;
};

export type RefreshDataResponse = {
  newAccessToken: string,
  newRefreshToken: string,
  sid: string
}

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
