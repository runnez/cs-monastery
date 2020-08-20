function twoNumberSum(array: number[], targetSum: number) {
	let acc = {}

	for (let i = 0; i < array.length; i++) {
		let current = array[i]

		if (acc[current]) {
			return [acc[current], current]
		}

		acc[targetSum - current] = current
	}

	return []
}

test('twoNumberSum', () => {
  expect(twoNumberSum([1,3,5,10,3], 6)).toEqual([1, 5])
  expect(twoNumberSum([1,3,5,10,3], 7)).toEqual([])
})
