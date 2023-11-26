import paginationSlice, {
  setPageNumber,
  setPageSize,
} from '../../../store/slices/pagination';

describe('paginationSlice redux', () => {
  it('reducer should return initial value', () => {
    const result = paginationSlice(
      { currentPage: 1, pageSize: 5, totalCount: 100 },
      { type: '' }
    );

    expect(result).toEqual({ currentPage: 1, pageSize: 5, totalCount: 100 });
  });

  it('reducer should return new currentPage via action', () => {
    const action = { type: setPageNumber.type, payload: 2 };

    const result = paginationSlice(
      { currentPage: 1, pageSize: 5, totalCount: 100 },
      action
    );

    expect(result).toEqual({ currentPage: 2, pageSize: 5, totalCount: 100 });
  });

  it('reducer should return new currentPage in state', () => {
    const initialState = { currentPage: 1, pageSize: 5, totalCount: 100 };
    const action = { type: setPageNumber.type, payload: 50 };

    const result = paginationSlice(initialState, action);

    expect(result).toEqual({ currentPage: 50, pageSize: 5, totalCount: 100 });
  });

  it('reducer should return new setPageSize via action', () => {
    const action = { type: setPageSize.type, payload: 15 };

    const result = paginationSlice(
      { currentPage: 1, pageSize: 5, totalCount: 100 },
      action
    );

    expect(result).toEqual({ currentPage: 1, pageSize: 15, totalCount: 100 });
  });

  it('reducer should return new setPageSize in state', () => {
    const initialState = { currentPage: 1, pageSize: 5, totalCount: 100 };
    const action = { type: setPageSize.type, payload: 50 };

    const result = paginationSlice(initialState, action);

    expect(result).toEqual({ currentPage: 1, pageSize: 50, totalCount: 100 });
  });
});
