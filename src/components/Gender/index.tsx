import { IConfirmPassword } from '../../interfaces';
import { UseFormRegister } from 'react-hook-form';
import s from './styles.module.css';

interface IGender {
  errorsGender?: string[];
  register?: UseFormRegister<IConfirmPassword>;
}

const Gender = ({ errorsGender, register }: IGender) => {
  return (
    <div className={`${s.gender} inputContainer`}>
      <div>
        <label htmlFor="contactChoice1">Male</label>
        <input
          type="radio"
          id="contactChoice1"
          value="male"
          {...(register ? register('gender') : { name: 'gender' })}
        />
      </div>
      <div>
        <label htmlFor="contactChoice2">Female</label>
        <input
          type="radio"
          id="contactChoice2"
          value="female"
          {...(register ? register('gender') : { name: 'gender' })}
        />
      </div>
      {errorsGender && <h5>{errorsGender}</h5>}
    </div>
  );
};

export default Gender;
