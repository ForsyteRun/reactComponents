import s from './styles.module.css';

const Gender = () => {
  return (
    <div className={s.gender}>
      <div>
        <label htmlFor="contactChoice1">Male</label>
        <input type="radio" id="contactChoice1" name="contact" value="email" />
      </div>
      <div>
        <label htmlFor="contactChoice2">Female</label>
        <input type="radio" id="contactChoice2" name="contact" value="phone" />
      </div>
    </div>
  );
};

export default Gender;