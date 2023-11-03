import { Dispatch, SetStateAction, useState } from 'react';
import { DEFAULT_IMG, DEFAULT_PAGE_COUNT } from '../../constants';
import { IItem } from '../../types';
import s from './listItem.module.css';
import { Link, Outlet } from 'react-router-dom';

const ListItems = ({
  items,
  setBookId,
}: {
  items: IItem[];
  setBookId: Dispatch<SetStateAction<string>>;
}) => {
  const [value, setValue] = useState<string>();

  return (
    <div className={s.container}>
      <Outlet context={[value]} />
      <ul>
        {items.map(({ id, volumeInfo }: IItem) => (
          <li key={id} className={s.item}>
            <Link to={'/info'} onClick={() => setValue(id)}>
              <img
                src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
                alt={volumeInfo.title}
                onClick={() => setBookId(id)}
              />
            </Link>
            <div className={s.content}>
              <div>
                <span className={s.title}>name:</span> {volumeInfo.title}
              </div>
              <div>
                <span className={s.title}>authors:</span> {volumeInfo.authors}
              </div>
              <div>
                <span className={s.title}>language:</span> {volumeInfo.language}
              </div>
              <div>
                <span className={s.title}>pageCount:</span>
                {volumeInfo.pageCount || DEFAULT_PAGE_COUNT}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
