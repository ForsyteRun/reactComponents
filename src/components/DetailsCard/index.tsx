import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { DEFAULT_IMG } from '../../constants';
import { detailsLoader } from '../../loaders';
import { IItem } from '../../types';
import CardContent from '../CardContent';
import s from './detailsCard.module.css';

const DetailsCard = () => {
  const id = useOutletContext() as string;

  const [value, SetValue] = useState<IItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    async function getData(id: string) {
      if (id) {
        localStorage.setItem('id', id);

        const data = await detailsLoader(id);

        SetValue(data);
        setLoading(false);
      }
    }

    getData(id);
  }, [id]);

  useEffect(() => {
    async function getInitData() {
      const storageId = localStorage.getItem('id');

      if (storageId) {
        const data = await detailsLoader(storageId);
        SetValue(data);
      }

      setLoading(false);
    }

    getInitData();
  }, []);

  if (!value) {
    return;
  }

  const { volumeInfo } = value;

  return (
    <div className={s.container}>
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <div>
          <img
            src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
            alt={volumeInfo.title}
          />
          <CardContent volumeInfo={volumeInfo} />
        </div>
      )}
    </div>
  );
};
export default DetailsCard;
