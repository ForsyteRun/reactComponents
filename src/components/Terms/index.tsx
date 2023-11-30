import s from './styles.module.css';
import { Link } from 'react-router-dom';

interface ITerm {
  errorTerms: string[];
}
const Terms = ({ errorTerms }: ITerm) => {
  return (
    <div className={s.terms}>
      <div>
        <input type="checkbox" name="terms" />
        <span>
          agree with <Link to={'/'}>Terms and Conditions</Link>
        </span>
      </div>
      {errorTerms && <h5>{errorTerms[0]}</h5>}
    </div>
  );
};

export default Terms;
