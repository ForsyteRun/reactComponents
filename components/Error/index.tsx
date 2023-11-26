// import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import ErrorBoundary from '../ErrorBoundary';
import s from './error.module.css';

const Error = () => {
  const navigate = useRouter();

  const handleClick = () => {
    navigate.push('/');
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
