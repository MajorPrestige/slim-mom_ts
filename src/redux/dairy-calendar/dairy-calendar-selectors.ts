import { RootState } from 'redux/store';

export const getDay = (state: RootState) => state.dairyCalendar.date;
