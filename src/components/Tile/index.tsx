import { useAppSelector } from '../../hooks/redux';
import s from './style.module.css';

const Tile = () => {
  const { name, age, email, gender, country, terms, file } = useAppSelector(
    (state) => state.form
  );

  return terms ? (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <img src={file as string} />
      </div>
      <span>name: {name}</span>
      <span>age: {age}</span>
      <span>email: {email}</span>
      <span>gender: {gender}</span>
      <span>country: {country}</span>
    </div>
  ) : (
    <div>Please, fill in form!</div>
  );
};

export default Tile;
