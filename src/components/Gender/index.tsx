import s from './styles.module.css';

interface IGender {
  errorsGender: string[];
}

const Gender = ({ errorsGender }: IGender) => {
  return (
    <div className={`${s.gender} inputContainer`}>
      <div>
        <label htmlFor="contactChoice1">Male</label>
        <input type="radio" id="contactChoice1" name="gender" value="male" />
      </div>
      <div>
        <label htmlFor="contactChoice2">Female</label>
        <input type="radio" id="contactChoice2" name="gender" value="female" />
      </div>
      {errorsGender && <h5>{errorsGender}</h5>}
    </div>
  );
};

export default Gender;
