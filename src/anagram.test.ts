import { isAnagram } from './anagram';

describe('isAnagram', () => {
  it('works', () => {
    expect(isAnagram('finder', 'Friend')).toBe(true)
    expect(isAnagram('finder', 'fried')).toBe(false)
  });
})
