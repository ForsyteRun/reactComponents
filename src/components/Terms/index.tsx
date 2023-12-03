import { UseFormRegister } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { IInitialBufferState } from '../../interfaces';
import { ErrorType } from '../../types';
import s from './styles.module.css';

interface ITerm {
  errors: ErrorType;
  register?: UseFormRegister<IInitialBufferState>;
}

const Terms = ({ errors: { terms }, register }: ITerm) => {
  return (
    <div className={s.terms}>
      <div>
        <input
          type="checkbox"
          {...(register ? register('terms') : { name: 'terms' })}
        />
        <span>
          agree with <Link to={'/'}>Terms and Conditions</Link>
        </span>
      </div>
      {terms && <h5>{terms.message}</h5>}
    </div>
  );
};

export default Terms;
