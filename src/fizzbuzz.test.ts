import { fizzbuzz } from './fizzbuzz';

describe('fizzBuzz', () => {
  test('it works', () => {
    const output = []

    console.log = (val: any) => output.push(val)

    fizzbuzz(15);

    expect(output).toEqual([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'])
  });
});
