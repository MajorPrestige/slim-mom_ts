export type UserInputData = {
  weight: number;
  height: number;
  age: number;
  desiredWeight: number;
  bloodType: number;
};

export type DailyRateResponse = {
  dailyRate: number;
  notAllowedProducts: string[][];
};

export type DailyRateUserResponse = {
  id: string;
  dailyRate: number;
  summaries: {
    _id: string;
    date: string;
    kcalLeft: number;
    kcalConsumed: number;
    dailyRate: number;
    percentsOfDailyRate: number;
    userId: string;
    __v: number;
  }[];
  notAllowedProducts: string[][];
};
