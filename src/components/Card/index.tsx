import { Link } from 'react-router-dom';
import { DEFAULT_IMG } from '../../constants';
import CardContent from '../CardContent';
import s from './style.module.css';
import { ICard } from './types';

const Card = ({ data: { id, volumeInfo }, handleClick }: ICard) => {
  return (
    <li key={id} className={s.item}>
      <Link
        to={`/${id}/details${window.location.search}`}
        onClick={() => handleClick(id)}
      >
        <img
          src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
          alt={volumeInfo.title}
        />
      </Link>
      <CardContent volumeInfo={volumeInfo} />
    </li>
  );
};

export default Card;
