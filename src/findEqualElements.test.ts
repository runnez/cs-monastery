import { findEqualElements } from './findEqualElements';

describe('findEqualElements', () => {
  it('handles single equal element', () => {
    expect(findEqualElements([1, 2, 3], [2, 5, 6])).toEqual([2]);
  });

  it('handles duplicate equal elements', () => {
    expect(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])).toEqual([2, 2]);
    expect(findEqualElements([1, 2, 5, 7, 9, 10, 10], [2, 2, 5, 9, 10, 10])).toEqual([2, 5, 9, 10, 10]);
  });

  it('handles empty arrays', () => {
    expect(findEqualElements([], [2, 2])).toEqual([]);
    expect(findEqualElements([], [])).toEqual([]);
    expect(findEqualElements([1], [])).toEqual([]);
  });
});
