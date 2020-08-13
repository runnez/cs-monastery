const isPalindrom = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true
}

const longestPalindrome = (str: string) => {
  let result = ''

  for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j > i; j--) {
      let substr = str.slice(i, j)

      if (isPalindrom(substr) && result.length < substr.length) {
        result = substr
      }
    }
  }

  return result
}

test('isPalindrom', () => {
  expect(isPalindrom('banana')).toBe(false)
  expect(isPalindrom('anana')).toBe(true)
  expect(isPalindrom('racecar')).toBe(true)
})

test('longestPalindrom2', () => {
  expect(longestPalindrome('banana')).toBe('anana')
  expect(longestPalindrome('tracecar')).toBe('racecar')
  expect(longestPalindrome('million')).toBe('illi')
  expect(longestPalindrome('forgeeksskeegfor')).toBe('geeksskeeg')
})
