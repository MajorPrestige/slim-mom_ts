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