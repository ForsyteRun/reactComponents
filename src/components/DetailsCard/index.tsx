import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { DEFAULT_IMG, DEFAULT_PAGE_COUNT } from '../../constants';
import { detailsLoader } from '../../loaders';
import { IItem } from '../../types';
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

  return (
    <div className={s.container}>
      {loading ? (
        <div className="lds-dual-ring"></div>
      ) : (
        <div>
          <img
            src={value?.volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
            alt={value?.volumeInfo.title}
          />
          <div className={s.content}>
            <div>
              <span className={s.title}>
                <b>name:</b>
              </span>
              <span>{value?.volumeInfo.title}</span>
            </div>
            <div>
              <span className={s.title}>
                <b>authors:</b>
              </span>
              <span>{value?.volumeInfo.authors}</span>
            </div>
            <div>
              <span className={s.title}>
                <b>language:</b>
              </span>
              <span>{value?.volumeInfo.language}</span>
            </div>
            <div>
              <span className={s.title}>
                <b>pageCount:</b>
              </span>
              <span>{value?.volumeInfo.pageCount || DEFAULT_PAGE_COUNT}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailsCard;
