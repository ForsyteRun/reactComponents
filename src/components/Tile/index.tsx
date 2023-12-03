import { useAppSelector } from '../../hooks/redux';
import MarkItem from './MarkBlock';
import s from './style.module.css';

const Tile = () => {
  const { name, age, email, gender, country, terms, file, isChanging } =
    useAppSelector((state) => state.form);

  return terms ? (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <div className={s.dataBlock}>
          <img src={file as string} />
        </div>
        {isChanging.file && <span className={s.newMark}>new</span>}
      </div>
      <MarkItem item={name} isChanging={isChanging.name} />
      <MarkItem item={age} isChanging={isChanging.age} />
      <MarkItem item={email} isChanging={isChanging.email} />
      <MarkItem item={gender} isChanging={isChanging.gender} />
      <MarkItem item={country} isChanging={isChanging.country} />
    </div>
  ) : (
    <div>Please, fill in form!</div>
  );
};

export default Tile;
