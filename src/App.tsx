import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <div>
        <Link to={'/uncontrolled'}>Uncontrolled form</Link>
      </div>
      <div>
        <Link to={'/form'}>React Hook Form</Link>
      </div>
    </>
  );
};

export default App;
