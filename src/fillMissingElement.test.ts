
const fillMissingElements = (arr: number[], max: number) => {
  const result = []

  for (let i = 0, n = 1; i < max;) {
    if (arr[i] === n) {
      result.push(arr[i])
      i++
      n++
    } else {
      const diff = arr[i] ? arr[i] - n : max - n + 1

      for (let f = 0; f < diff; f++) {
        result.push(n + f)
      }

      if (arr[i]) {
        n = arr[i]
      } else {
        break
      }
    }
  }

  return result;
}

test('fillMissingElemets', () => {
  const seq = [1,2,3,4,5,6,7,8,9,10]
  expect(fillMissingElements([5], 10)).toEqual(seq)
  expect(fillMissingElements([1, 3, 10], 10)).toEqual(seq)
  expect(fillMissingElements([2, 3, 8], 10)).toEqual(seq)
  expect(fillMissingElements([], 10)).toEqual(seq)
})
