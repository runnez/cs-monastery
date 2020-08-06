export const findEqualElements = (arr1: number[], arr2: number[]) => {
  const result: number[] = []

  for(let i = 0, y = 0; i < arr1.length && y < arr2.length;) {
    if (arr1[i] === arr2[y]) {
      result.push(arr1[i]);
      i++;
      y++;
      continue;
    }

    if (arr1[i] > arr2[y]) {
      y++
    } else {
      i++;
    }
  }

  return result;
}
