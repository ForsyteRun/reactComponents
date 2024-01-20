import { Link } from 'react-router-dom';
import { Tile } from '../../components';

const MainPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        minHeight: '100vh',
      }}
    >
      <div>
        <Link to={'/uncontrolled'} style={{ marginRight: '1rem' }}>
          <button>Uncontrolled form</button>
        </Link>
        <Link to={'/form'}>
          <button>React Hook Form</button>
        </Link>
      </div>
      <Tile />
    </div>
  );
};

export default MainPage;
