export const isAnagram = (str1: string, str2: string) => {
  if (str1 === str2) return false;
  return str1.toLocaleLowerCase().split('').sort().join() === str2.toLocaleLowerCase().split('').sort().join();
};
