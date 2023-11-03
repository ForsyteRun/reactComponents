import { useLoaderData } from 'react-router-dom';
import s from './detailsCard.module.css';
import { IItem } from '../../types';
import { DEFAULT_IMG, DEFAULT_PAGE_COUNT } from '../../constants';

const DetailsCard = () => {
  const fetchData = useLoaderData() as IItem;

  if (!fetchData) {
    throw new Error('error');
  }

  return (
    <div className={s.container}>
      <img
        src={fetchData?.volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
        alt={fetchData.volumeInfo.title}
      />
      <div className={s.content}>
        <div>
          <span className={s.title}>
            <b>name:</b>
          </span>
          <span>{fetchData.volumeInfo.title}</span>
        </div>
        <div>
          <span className={s.title}>
            <b>authors:</b>
          </span>
          <span>{fetchData.volumeInfo.authors}</span>
        </div>
        <div>
          <span className={s.title}>
            <b>language:</b>
          </span>
          <span>{fetchData.volumeInfo.language}</span>
        </div>
        <div>
          <span className={s.title}>
            <b>pageCount:</b>
          </span>
          <span>{fetchData.volumeInfo.pageCount || DEFAULT_PAGE_COUNT}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
