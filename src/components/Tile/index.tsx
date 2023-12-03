import { useAppSelector } from '../../hooks/redux';
import s from './style.module.css';

const Tile = () => {
  const { name, age, email, gender, country } = useAppSelector(
    (state) => state.form
  );
  return (
    <div className={s.container}>
      <span>name: {name}</span>
      <span>age: {age}</span>
      <span>email: {email}</span>
      <span>gender: {gender}</span>
      <span>country: {country}</span>
    </div>
  );
};

export default Tile;
