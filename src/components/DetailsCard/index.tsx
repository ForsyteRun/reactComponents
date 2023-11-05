import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { DEFAULT_IMG } from '../../constants';
import { detailsLoader } from '../../loaders';
import { IItem } from '../../types';
import CardContent from '../CardContent';
import s from './detailsCard.module.css';

type ContextType = {
  id: string;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const DetailsCard = () => {
  const { id, visible, setVisible } = useOutletContext<ContextType>();

  const [value, SetValue] = useState<IItem | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleClick = () => {
    setVisible(false);
  };

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

  function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          ref.current &&
          !ref.current.contains(event.target as Node) &&
          !(event.target instanceof HTMLImageElement)
        ) {
          handleClick();
        }
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  return (
    visible && (
      <div className={s.container}>
        {loading ? (
          <div className="lds-dual-ring"></div>
        ) : (
          <div ref={wrapperRef}>
            <img
              src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
              alt={volumeInfo.title}
            />
            <CardContent volumeInfo={volumeInfo} />
          </div>
        )}
        <div className={s.close} onClick={handleClick}></div>
      </div>
    )
  );
};
export default DetailsCard;
