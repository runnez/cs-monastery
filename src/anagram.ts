export const isAnagram = (str1: string, str2: string) => {
  return str1.toLocaleLowerCase().split('').sort().join() === str2.toLocaleLowerCase().split('').sort().join()
}
