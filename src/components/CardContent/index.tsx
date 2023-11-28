import { DEFAULT_PAGE_COUNT } from '../../constants';
import { IItem } from '../../types';
import s from './cardContent.module.css';

const CardContent = ({ volumeInfo }: Pick<IItem, 'volumeInfo'>) => {
  const { title, authors, language, pageCount } = volumeInfo;

  return (
    <div className={s.content}>
      <div>
        <span className={s.title}>name:</span> {title}
        <span>{title}</span>
      </div>
      <div>
        <span className={s.title}>authors:</span> {authors}
        <span>{authors}</span>
      </div>
      <div>
        <span className={s.title}>language:</span>
        <span>{language}</span>
      </div>
      <div>
        <span className={s.title}>pageCount:</span>
        <span>{pageCount || DEFAULT_PAGE_COUNT}</span>
      </div>
    </div>
  );
};

export default CardContent;
