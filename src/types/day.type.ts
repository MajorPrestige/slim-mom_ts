export type ProductDayInfo = {
  date: string;
  productId: string;
  weight: number | null;
};

export type DayDiary = {
  eatenProduct: {
    title: string;
    weight: number;
    kcal: number;
    id: string;
  };
  day: {
    id: string;
    eatenProducts: {
      title: string;
      weight: number;
      kcal: number;
      id: string;
    }[];
    date: string;
    daySummary: string;
  };
  daySummary: {
    date: string;
    kcalLeft: number;
    kcalConsumed: number;
    dailyRate: number;
    percentsOfDailyRate: number;
    userId: string;
    id: string;
  };
};

export type DayInfo = {
  id: string;
  eatenProducts: {
    title: string;
    weight: number;
    kcal: number;
    id: string;
  }[];
  date: string;
  daySummary: {
    id: string;
    date: string;
    kcalLeft: number;
    kcalConsumed: number;
    dailyRate: number;
    percentsOfDailyRate: number;
    userId: string;
  };
};

export type DeleteProduct = {
  dayId: string;
  eatenProductId: string;
};

export type UpdatedDaySummary = {
  newDaySummary: {
    date: string;
    kcalLeft: number;
    kcalConsumed: number;
    dailyRate: number;
    percentsOfDailyRate: number;
    userId: string;
    id: string;
  };
};
