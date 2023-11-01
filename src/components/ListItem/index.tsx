import { DEFAULT_IMG, DEFAULT_PAGE_COUNT } from '../../constants';
import { IItem } from '../../types';
import s from './listItem.module.css';
import { PropsType } from './types';

const ListItems = ({ items }: PropsType) => {
  return (
    <>
      <ul>
        {items.map(({ id, volumeInfo }: IItem) => (
          <li key={id} className={s.item}>
            <img
              src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
              alt={volumeInfo.title}
            />
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
    </>
  );
};

export default ListItems;
