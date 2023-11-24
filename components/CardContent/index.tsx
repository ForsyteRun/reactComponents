import { DEFAULT_PAGE_COUNT } from './../../utils/constants';
import { IItem } from '../../types';
import s from './cardContent.module.css';

const CardContent = ({ volumeInfo }: Pick<IItem, 'volumeInfo'>) => {
  const { title, authors, language, pageCount } = volumeInfo;

  return (
    <div className={s.content}>
      <h3>
        <span className={s.title}>name:</span> {title}
        <span>{title}</span>
      </h3>
      <h3>
        <span className={s.title}>authors:</span> {authors}
        <span>{authors}</span>
      </h3>
      <h3>
        <span className={s.title}>language:</span>
        <span>{language}</span>
      </h3>
      <h3>
        <span className={s.title}>pageCount:</span>
        <span>{pageCount || DEFAULT_PAGE_COUNT}</span>
      </h3>
    </div>
  );
};

export default CardContent;
