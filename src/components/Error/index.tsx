import { useNavigate } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import s from './error.module.css';

const Error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <ErrorBoundary>
      <div className={s.container}>
        <h2 className={s.title}>Something went wrong.</h2>
        <button onClick={handleClick}>back</button>
      </div>
    </ErrorBoundary>
  );
};

export default Error;
