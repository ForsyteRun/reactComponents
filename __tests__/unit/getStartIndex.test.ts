import { getStartIndex } from '../../utils';

describe('getStartIndex function', () => {
  it('should return 1 for the first page', () => {
    const result = getStartIndex(1, 10);
    expect(result).toBe(1);
  });

  it('should calculate the correct start index for the second page', () => {
    const result = getStartIndex(2, 10);
    expect(result).toBe(11);
  });

  it('should calculate the correct start index for pages greater than 2', () => {
    const result = getStartIndex(3, 10);
    expect(result).toBe(21);
  });

  it('should handle the case when pageSize is not provided', () => {
    const result = getStartIndex(1);
    expect(result).toBe(1);
  });

  it('should handle the case when currentPage is not provided', () => {
    const result = getStartIndex(undefined, 10);
    expect(result).toBe(1);
  });

  it('should handle the case when currentPage and pageSize are not provided', () => {
    const result = getStartIndex();
    expect(result).toBe(1);
  });
});
