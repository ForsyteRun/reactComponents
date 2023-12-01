import { UseFormRegister } from 'react-hook-form';
import { IConfirmPassword } from '../../interfaces';
import s from './styles.module.css';

interface ITextFields {
  errorsName?: string[];
  errorsAge?: string[];
  errorsEmail?: string[];
  errorsPassword?: string[];
  errorsConfirmPassword?: string[];
  register: UseFormRegister<IConfirmPassword>;
}

const TextFields = ({
  errorsAge,
  errorsName,
  errorsEmail,
  errorsPassword,
  errorsConfirmPassword,
  register,
}: ITextFields) => {
  return (
    <div className={s.container}>
      <div>
        <label>
          <input
            type="text"
            placeholder="Name"
            {...(register ? register('name') : { name: 'name' })}
          />
        </label>
        {errorsName && <h5>{errorsName[0]}</h5>}
      </div>
      <div>
        <label>
          <input
            type="number"
            placeholder="Age"
            {...(register ? register('age') : { name: 'age' })}
          />
        </label>
        {errorsAge && <h5>{errorsAge[0]}</h5>}
      </div>
      <div>
        <label>
          <input
            type="email"
            placeholder="Email"
            {...(register ? register('email') : { name: 'email' })}
          />
        </label>
        {errorsEmail && <h5>{errorsEmail[0]}</h5>}
      </div>
      <div>
        <label>
          <input
            type="password"
            placeholder="Password"
            {...(register ? register('password') : { name: 'password' })}
          />
        </label>
        {errorsPassword && <h5>{errorsPassword[0]}</h5>}
      </div>
      <div>
        <label>
          <input
            type="password"
            placeholder="Confirm Password"
            {...(register
              ? register('confirmPassword')
              : { name: 'confirmPassword' })}
          />
        </label>
        {errorsConfirmPassword && <h5>{errorsConfirmPassword[0]}</h5>}
      </div>
    </div>
  );
};

export default TextFields;
