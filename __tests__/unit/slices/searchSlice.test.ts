import searchSlice, { setSearchValue } from '../../../store/slices/search';

describe('searchSlice redux', () => {
  it('reducer should return initial value', () => {
    const result = searchSlice({ value: '' }, { type: '' });

    expect(result).toEqual({ value: '' });
  });

  it('reducer should return new value via action', () => {
    const action = { type: setSearchValue.type, payload: 'sex' };

    const result = searchSlice({ value: '' }, action);

    expect(result).toEqual({ value: 'sex' });
  });

  it('reducer should return new value in state', () => {
    const initialState = { value: 'example' };
    const action = { type: setSearchValue.type, payload: 'war' };

    const result = searchSlice(initialState, action);

    expect(result).toEqual({ value: 'war' });
  });
});
