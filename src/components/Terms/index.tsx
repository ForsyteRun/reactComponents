import { UseFormRegister } from 'react-hook-form';
import { IConfirmPassword } from '../../interfaces';
import { Link } from 'react-router-dom';
import s from './styles.module.css';

interface ITerm {
  errorTerms?: string[];
  register?: UseFormRegister<IConfirmPassword>;
}

const Terms = ({ errorTerms, register }: ITerm) => {
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
      {errorTerms && <h5>{errorTerms[0]}</h5>}
    </div>
  );
};

export default Terms;
