import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelecor';
import { useState, FC, Dispatch } from 'react';
import { useMediaQuery } from 'react-responsive';

import s from './DiaryChooseProductList.module.scss';

import LoaderMini from 'components/LoaderMini';

import { getProduct } from 'redux/product-search/search-selectors';
import { getSearchLoading } from 'redux/product-search/search-selectors';
import { postEatenProduct } from 'redux/day/day-operations';

interface IDiaryChooseProductList {
  handleClickClose: Function;
  setModalOpen: Dispatch<React.SetStateAction<boolean>> | undefined
}

const DiaryChooseProductList: FC<IDiaryChooseProductList> = ({
  handleClickClose,
  setModalOpen,
}) => {
  const dispatch = useAppDispatch();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const [isOpen, setIsOpen] = useState(false);
  const searchProduct = useAppSelector(getProduct);
  const dairyCalendar = useAppSelector(({ dairyCalendar }) => dairyCalendar);
  const searchLoading = useAppSelector(getSearchLoading);

  const handleClick = (productId: string) => {
    dispatch(postEatenProduct({ ...dairyCalendar, productId }));
    setIsOpen(false);
    handleClickClose(false);
    if (isMobile) {
      setModalOpen!(false);
      document.querySelector('body')!.classList.remove('no-scroll');
    }
  };

  return (
    <>
      {searchLoading === true ? (
        <LoaderMini />
      ) : (
        <>
          {!isOpen && (
            <div className={s.overlay}>
              <h2 className={s.headTitle}>Виберіть продукт:</h2>
              <ul className={s.list}>
                {searchProduct.map(({ _id, title, calories, weight }) => (
                  <li key={_id} className={s.item} onClick={() => handleClick(_id)}>
                    <p className={s.title}> {title.ua}</p>
                    <div className={s.wrapper}>
                      <p className={s.weight}>{weight} гр</p>
                      <p className={s.kcal}>{calories} ккал</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default DiaryChooseProductList;
