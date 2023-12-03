import { UseFormRegister } from 'react-hook-form';
import { IInitialBufferState } from '../../interfaces';
import { ErrorType } from '../../types';
import s from './styles.module.css';

interface IGender {
  errors: ErrorType;
  register?: UseFormRegister<IInitialBufferState>;
}

const Gender = ({ errors: { gender }, register }: IGender) => {
  return (
    <div className={`${s.gender} inputContainer`}>
      <div>
        <label htmlFor="contactChoice1">Male</label>
        <input
          type="radio"
          id="contactChoice1"
          value="male"
          defaultChecked
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
      {gender && <h5>{gender.message}</h5>}
    </div>
  );
};

export default Gender;
