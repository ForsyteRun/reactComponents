import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toggleLoading } from '../store/slices/loading';
import Home from './../components/Home';
import { useAppDispatch } from './../hooks/useRedux';
import { wrapper } from './../store';
import { addBooks } from './../store/slices/books';
import { setPageNumber, setPageSize } from './../store/slices/pagination';
import { setSearchValue } from './../store/slices/search';
import { ISlices } from './../types';
import { getStartIndex } from './../utils';
import { URL } from './../utils/constants';

const App = (props: ISlices) => {
  const dispatch = useAppDispatch();
  const params = useSearchParams();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  useEffect(() => {
    dispatch(addBooks(props.value.books.data.items));
    dispatch(toggleLoading(props.value.loading.isLoading));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value.books.data.items]);

  console.log(props);

  return (
    <>
      <Head>
        <title>Books</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home data={props.value.books.data.items} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    store.dispatch(toggleLoading(false));
    const response = await fetch(
      URL +
        (context.query.search ? String(context.query.search) : 'nature') +
        `&maxResults=${
          context.query.pageSize ? String(context.query.pageSize) : '10'
        }` +
        `&startIndex=${
          context.query.page
            ? String(
                getStartIndex(+context.query.page, +context.query.pageSize)
              )
            : '1'
        }`
    );

    const data = await response.json();

    store.dispatch(addBooks(data));

    const value = store.getState();

    return {
      props: {
        value,
      },
    };
  }) satisfies GetServerSideProps;

export default App;
