import s from './styles.module.css';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className={s.terms}>
      <input type="checkbox" name="terms" />
      <span>
        agree with <Link to={'/'}>Terms and Conditions</Link>
      </span>
    </div>
  );
};

export default Terms;
