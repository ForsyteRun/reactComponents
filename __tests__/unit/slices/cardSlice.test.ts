import cardSlice, { addId, setVisible } from '../../../src/store/slices/card';

describe('cardSlice redux', () => {
  it('reducer should return initial value', () => {
    const result = cardSlice({ bookId: '', isVisible: false }, { type: '' });

    expect(result).toEqual({ bookId: '', isVisible: false });
  });

  it('reducer should return new id via action', () => {
    const action = { type: addId.type, payload: 'AABBCC' };

    const result = cardSlice({ bookId: '', isVisible: false }, action);

    expect(result).toEqual({ bookId: 'AABBCC', isVisible: false });
  });

  it('reducer should return new id in state', () => {
    const initialState = { bookId: 'BBBCCCDDD', isVisible: false };
    const action = { type: addId.type, payload: 'AABBCC' };

    const result = cardSlice(initialState, action);

    expect(result).toEqual({ bookId: 'AABBCC', isVisible: false });
  });

  it('reducer should return new setVisible via action', () => {
    const action = { type: setVisible.type, payload: true };

    const result = cardSlice({ bookId: 'AABBCC', isVisible: false }, action);

    expect(result).toEqual({ bookId: 'AABBCC', isVisible: true });
  });

  it('reducer should return new setVisible in state', () => {
    const initialState = { bookId: 'AABBCC', isVisible: true };
    const action = { type: setVisible.type, payload: false };

    const result = cardSlice(initialState, action);

    expect(result).toEqual({ bookId: 'AABBCC', isVisible: false });
  });
});
