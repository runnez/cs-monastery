export const detectFizzBuzz = (n: number) => {
  const isFizz = n % 3 === 0;
  const isBuzz = n % 5 === 0;

  if (isFizz && isBuzz) return 'fizzbuzz';
  if (isFizz) return 'fizz';
  if (isBuzz) return 'buzz';

  return n;
}

export const fizzbuzz = (n: number) => {
  for (let i = 1; i <= n; i++) {
    console.log(detectFizzBuzz(i))
  }
}
