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
        src={fetchData?.volumeInfo.imageLinks.thumbnail || DEFAULT_IMG}
        alt={fetchData.volumeInfo.title}
      />
      <div className={s.content}>
        <div>
          <span className={s.title}>name:</span> {fetchData.volumeInfo.title}
        </div>
        <div>
          <span className={s.title}>authors:</span>{' '}
          {fetchData.volumeInfo.authors}
        </div>
        <div>
          <span className={s.title}>language:</span>{' '}
          {fetchData.volumeInfo.language}
        </div>
        <div>
          <span className={s.title}>pageCount:</span>
          {fetchData.volumeInfo.pageCount || DEFAULT_PAGE_COUNT}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
