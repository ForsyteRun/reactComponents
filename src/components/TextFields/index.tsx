import { UseFormRegister } from 'react-hook-form';
import { IInitialBufferState } from '../../interfaces';
import { ErrorType } from '../../types';
import s from './styles.module.css';
import PasswordLevel from './PasswordLevel';

interface ITextFields {
  errors: ErrorType;
  countPasswordErrors: number;
  register?: UseFormRegister<IInitialBufferState>;
}

const TextFields = ({
  errors: { name, age, email, password, confirmPassword },
  register,
  countPasswordErrors,
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
        {name && <h5>{name.message}</h5>}
      </div>
      <div>
        <label>
          <input
            type="number"
            placeholder="Age"
            {...(register ? register('age') : { name: 'age' })}
          />
        </label>
        {age && <h5>{age.message}</h5>}
      </div>
      <div>
        <label>
          <input
            type="email"
            placeholder="Email"
            {...(register ? register('email') : { name: 'email' })}
          />
        </label>
        {email && <h5>{email.message}</h5>}
      </div>
      <div style={{ position: 'relative' }}>
        <div>
          <label>
            <input
              type="password"
              placeholder="Password"
              autoComplete="true"
              {...(register ? register('password') : { name: 'password' })}
            />
          </label>
          {password && <h5>{password.message}</h5>}
        </div>
        <PasswordLevel countPasswordErrors={countPasswordErrors} />
      </div>
      <div>
        <label>
          <input
            type="password"
            placeholder="Confirm Password"
            autoComplete="true"
            {...(register
              ? register('confirmPassword')
              : { name: 'confirmPassword' })}
          />
        </label>
        {confirmPassword && <h5>{confirmPassword.message}</h5>}
      </div>
    </div>
  );
};

export default TextFields;
