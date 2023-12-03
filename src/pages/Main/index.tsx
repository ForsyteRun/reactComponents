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
        <Link to={'/uncontrolled'}>Uncontrolled form</Link>
        <Link to={'/form'}>React Hook Form</Link>
      </div>
      <Tile />
    </div>
  );
};

export default MainPage;
