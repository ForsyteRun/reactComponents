import { useOutletContext } from 'react-router-dom';
import s from './detailsCard.module.css';

const DetailsCard = () => {
  const [id]: string = useOutletContext();
  return <div className={s.container}>{id}</div>;
};

export default DetailsCard;
