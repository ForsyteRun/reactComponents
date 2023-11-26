/* eslint-disable import/no-unresolved */
import { ReactNode, useCallback, useState } from 'react';

import { IItem } from '../../types';
import { ListItems, Search, Select } from './../../components';
import ErrorPage from './../../pages/error';
import s from './styles.module.css';

interface IHome {
  children?: ReactNode;
  data?: IItem[] | undefined;
}

const Home = ({ children, data }: IHome) => {
  const [error, setError] = useState<boolean>(false);

  const handleError = useCallback(() => {
    setError(true);
  }, []);

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <div className={s.container}>
        <Search />
        <button onClick={handleError}>get error</button>
        <Select />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ListItems data={data} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Home;
