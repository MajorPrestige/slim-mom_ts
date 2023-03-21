import { FC } from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelecor';

import s from './DiaryProductsListItem.module.scss';

import { ReactComponent as Bin } from '../../../images/svg/removeBtn.svg';

import { eatenProducts } from 'redux/day/day-selectors';
import { deleteEatenProduct } from 'redux/day/day-operations';

const DiaryProductsListItem: FC = () => {
  const dispatch = useAppDispatch();

  const eatenProductsList = useAppSelector(eatenProducts);

  const removeProduct = (id: string) => {
    dispatch(deleteEatenProduct(id));
  };

  return (
    <>
      {eatenProductsList &&
        eatenProductsList.map(({ id, title, weight, kcal }) => {
          return (
            <li key={id} className={s.item}>
              <p className={s.title}>{title}</p>
              <div className={s.wrapper}>
                <p className={s.weight}>{weight} гр</p>
                <p className={s.kcal}>{Math.round(kcal)} ккал</p>
              </div>
              <button
                className={s.btnRemove}
                type="button"
                onClick={() => removeProduct(id)}
              >
                <Bin />
              </button>
            </li>
          );
        })}
    </>
  );
};

export default DiaryProductsListItem;
