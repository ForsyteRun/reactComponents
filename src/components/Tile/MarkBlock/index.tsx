import { CountryType } from '../../../types';
import s from './styles.module.css';
import animaStyle from './../style.module.css';

type MarkType = {
  item: string | number | 'male' | 'female' | CountryType;
  isChanging: boolean;
};

const MarkItem = ({ item, isChanging }: MarkType) => {
  return (
    <div className={s.dataBlock}>
      <span>name: {item}</span>
      {isChanging && <span className={animaStyle.newMark}>new</span>}
    </div>
  );
};

export default MarkItem;
