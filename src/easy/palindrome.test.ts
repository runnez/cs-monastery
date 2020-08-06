import { isPalindrom } from './palindrome';

describe('isPalindrome', () => {
  it('handles even length polindrome', () => {
    expect(isPalindrom('anna')).toBe(true);
  });

  it('handles odd length polindrome', () => {
    expect(isPalindrom('racecar')).toBe(true);
  });

  it('ignores letter case', () => {
    expect(isPalindrom('AnNa')).toBe(true);
  });

  it('handles no palindrome', () => {
    expect(isPalindrom('table')).toBe(false);
  });
})
