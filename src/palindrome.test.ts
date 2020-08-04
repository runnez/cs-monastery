import { isPalindrom } from './palindrome';

describe('isPalindrome', () => {
  it('handles even length polindrmoe', () => {
    expect(isPalindrom('anna')).toBe(true);
  });

  it('handles odd length polindrmoe', () => {
    expect(isPalindrom('racecar')).toBe(true);
  });

  it('ignores letter case', () => {
    expect(isPalindrom('AnNa')).toBe(true);
  });

  it('handles', () => {
    expect(isPalindrom('table')).toBe(false);
  });
})
