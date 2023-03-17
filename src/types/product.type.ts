export type ProductInfo = {
  _id: string;
  weight: number;
  title: {
    ua: string;
  };
  calories: number;
  groupBloodNotAllowed: (boolean | null)[];
  __v: number;
}[];
