// Given a string, find the length of the longest substring without repeating characters.
const longestSubstring = (str: string) => {
  let acc = {};
  let length = 0;
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    max = length > max ? length : max;

    if (acc[char]) {
      acc = {};
      length = 0;
    };

    acc[char] = 1;
    length++;
  }

  return max;
}

test('longestSubstring', () => {
  expect(longestSubstring('abrkaabcdefghijjxxx')).toBe(10);
  expect(longestSubstring('xasdasdvvqwertyuiop')).toBe(10);
});
