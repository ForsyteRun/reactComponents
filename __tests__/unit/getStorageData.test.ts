import { getStorageData } from '../../src/utils';

const localStorageMock: { [key: string]: string } = {};
const localStorageOriginal = Object.assign({}, global.localStorage);

beforeEach(() => {
  Object.defineProperty(global, 'localStorage', {
    value: {
      getItem: jest.fn((key) => localStorageMock[key] || null),
      setItem: jest.fn((key, value) => (localStorageMock[key] = value)),
      removeItem: jest.fn((key) => delete localStorageMock[key]),
      clear: jest.fn(() =>
        Object.keys(localStorageMock).forEach(
          (key) => delete localStorageMock[key]
        )
      ),
      key: jest.fn((index) => Object.keys(localStorageMock)[index] || null),
      length: Object.keys(localStorageMock).length,
    },
    writable: true,
  });
});

afterEach(() => {
  Object.assign(global, { localStorage: localStorageOriginal });
});

describe('getStorageData', () => {
  it('returns the parsed value from localStorage', () => {
    const key = 'testKey';
    const value = { some: 'data' };

    // Set the value in localStorage
    localStorage.setItem(key, JSON.stringify(value));

    const result = getStorageData(key);

    // Expectations
    expect(result).toEqual(value);
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });

  it('returns null for non-existing key', () => {
    const key = 'nonExistingKey';

    // Call the function
    const result = getStorageData(key);

    // Expectations
    expect(result).toBeNull();
    expect(localStorage.getItem).toHaveBeenCalledWith(key);
  });
});
