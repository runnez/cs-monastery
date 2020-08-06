export const fibonachi = (n: number) => {
  let prevPrev = 0;
  let prev = 1;
  let current = 0;

  for (let i = 1; i < n; i++) {
    prevPrev = prev;
    prev = current;
    current = prev + prevPrev;
  }

  return current;
};

