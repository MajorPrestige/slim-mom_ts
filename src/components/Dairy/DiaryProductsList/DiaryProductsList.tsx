import { FC } from 'react';

import useAppSelector from 'hooks/useAppSelecor';
import s from './DiaryProductsList.module.scss';

import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import LoaderMini from 'components/LoaderMini';

import { getEatenProductsLoading } from 'redux/day/day-selectors';
import { getSearchLoading } from 'redux/product-search/search-selectors';

const DiaryProductsList: FC = () => {
  const eatenProductsLoading = useAppSelector(getEatenProductsLoading);
  const searchLoading = useAppSelector(getSearchLoading);

  if (searchLoading === true) {
    return null;
  }

  return (
    <>
      {eatenProductsLoading === true ? (
        <LoaderMini />
      ) : (
        <div className={s.overlay}>
          <ul className={s.list}>
            <DiaryProductsListItem />
          </ul>
        </div>
      )}
    </>
  );
};

export default DiaryProductsList;
