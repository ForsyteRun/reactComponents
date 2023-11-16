import { RefObject, useCallback, useEffect, useRef } from 'react';
import { useNavigation, useOutletContext } from 'react-router-dom';
import s from './detailsCard.module.css';
import ContextType from './type';

const DetailsCard = () => {
  const { visible, setVisible } = useOutletContext<ContextType>();

  // const volumeInfo = useLoaderData() as IVolumeInfo;

  const navigation = useNavigation();

  const ref: RefObject<HTMLDivElement> = useRef(null);

  const handleClick = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        event.target instanceof HTMLImageElement
      ) {
        handleClick();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  // if (!volumeInfo) {
  //   return;
  // }

  if (navigation.state === 'loading') {
    return (
      <div className={s.container}>
        <div className="lds-dual-ring"></div>;
      </div>
    );
  }

  return (
    visible && (
      <div className={s.container}>
        {/* <div ref={ref}>
          <img
            src={volumeInfo?.imageLinks?.thumbnail || DEFAULT_IMG}
            alt={volumeInfo.title}
          />
          <CardContent volumeInfo={volumeInfo} />
        </div>
        <div className={s.close} onClick={handleClick}></div> */}
      </div>
    )
  );
};
export default DetailsCard;
