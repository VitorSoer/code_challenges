/*
    - You get an array of numbers, return the sum of all of the positives ones.
*/

const positiveSum = (arr: number[]): number => {
  const positiveNumbers = arr.filter((number) => number > 0);
  const sumOfNumbers = positiveNumbers.reduce((acc, num) => acc + num, 0);

  return sumOfNumbers || 0;
};
