import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { toggleDetailsLoading } from '../store/slices/loading';
import { DetailsCard } from './../components';
import Home from './../components/Home';
import { useAppDispatch, useAppSelector } from './../hooks/useRedux';
import { wrapper } from './../store';
import { addBookById } from './../store/slices/books';
import { setPageNumber, setPageSize } from './../store/slices/pagination';
import { setSearchValue } from './../store/slices/search';
import { ISlices } from './../types';

const Detail = (
  props: ISlices
): InferGetServerSidePropsType<typeof getServerSideProps> => {
  const { data } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  const params = useSearchParams();
  const router = useRouter();

  const isMountRef = useRef(false);

  useEffect(() => {
    if (params.get('page')) {
      dispatch(setPageNumber(Number(params.get('page'))));
    }

    if (params.get('pageSize')) {
      dispatch(setPageSize(Number(params.get('pageSize'))));
    }

    if (params.get('search')) {
      dispatch(setSearchValue(params.get('search') as string));
    }

    if (Object.keys(router.query).length > 1 && isMountRef.current) {
      router.push(`/?${router.asPath.split('?')[1]}`);
    }

    isMountRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath.split('?')[1]]);

  useEffect(() => {
    dispatch(addBookById(props.value.books.singleBook));
    dispatch(toggleDetailsLoading(props.value.loading.isLoadingDetails));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value.books.singleBook]);

  return (
    <Home data={data}>
      <DetailsCard data={props.value.books.singleBook} />
    </Home>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const params = context.params?.id as Array<string>;
    store.dispatch(toggleDetailsLoading(false));

    const response = await fetch(
      'https://www.googleapis.com/books/v1/volumes/' + `${params[0]}`
    );

    const data = await response.json();

    store.dispatch(addBookById(data));

    const value = store.getState();

    return {
      props: {
        value,
      },
    };
  }) satisfies GetServerSideProps;

export default Detail;
