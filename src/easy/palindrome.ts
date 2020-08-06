export const isPalindrom = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    if (i > str.length / 2) {
      break;
    }

    if (str[i].toLocaleLowerCase() !== str[str.length - 1 - i].toLocaleLowerCase()) {
      return false;
    }
  }

  return true;
}
