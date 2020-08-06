import { fibonachi } from './fibonachi';

describe('fibonachi', () => {
  it('works', () => {
    expect(fibonachi(1)).toBe(0);
    expect(fibonachi(2)).toBe(1);
    expect(fibonachi(3)).toBe(1);
    expect(fibonachi(4)).toBe(2);
    expect(fibonachi(5)).toBe(3);
    expect(fibonachi(6)).toBe(5);
    expect(fibonachi(10)).toBe(34);
  })
});
