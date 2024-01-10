/*
    - Complete the square sum function so that it squares each 
    number passed into it and then sums the results together.
*/

const squareSum = (numbers: number[]): number => {
  const calculatedSquares = numbers.map((number) => number ** 2);
  const sum = calculatedSquares.reduce((sum, number) => sum + number, 0);

  return sum;
};
