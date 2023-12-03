import { useAppSelector } from '../../hooks/redux';
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
      <div className={s.dataBlock}>
        <span>name: {name}</span>
        {isChanging.name && <span className={s.newMark}>new</span>}
      </div>
      <div className={s.dataBlock}>
        <span>age: {age}</span>
        {isChanging.age && <span className={s.newMark}>new</span>}
      </div>
      <div className={s.dataBlock}>
        <span>email: {email}</span>
        {isChanging.email && <span className={s.newMark}>new</span>}
      </div>
      <div className={s.dataBlock}>
        <span>gender: {gender}</span>
        {isChanging.gender && <span className={s.newMark}>new</span>}
      </div>
      <div className={s.dataBlock}>
        <span>country: {country}</span>
        {isChanging.country && <span className={s.newMark}>new</span>}
      </div>
    </div>
  ) : (
    <div>Please, fill in form!</div>
  );
};

export default Tile;
