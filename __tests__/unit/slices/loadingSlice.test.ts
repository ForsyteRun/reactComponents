import loadingSlice, { toggleLoading } from '../../../src/store/slices/loading';

describe('loadingSlice redux', () => {
  it('reducer should return initial value', () => {
    const result = loadingSlice({ isLoading: false }, { type: '' });

    expect(result).toEqual({ isLoading: false });
  });

  it('reducer should return new value via action', () => {
    const action = { type: toggleLoading.type, payload: true };

    const result = loadingSlice({ isLoading: false }, action);

    expect(result).toEqual({ isLoading: true });
  });

  it('reducer should return new value in state', () => {
    const initialState = { isLoading: true };
    const action = { type: toggleLoading.type, payload: false };

    const result = loadingSlice(initialState, action);

    expect(result).toEqual({ isLoading: false });
  });
});
