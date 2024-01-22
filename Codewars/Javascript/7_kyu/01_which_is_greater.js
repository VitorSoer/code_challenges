/*
    - Given a string of digits confirm whether the sum of all the individual
      even digits are greater than the sum of all the individual odd digits.
*/

const evenOrOddFilter = (array, param) => {
  return array.filter((number) => Number(number) % 2 === param);
};

const evenOrOddReducer = (array) => {
  return array.reduce((acc, num) => Number(acc) + Number(num));
};

const evenOrOdd = (str) => {
  const splittedStr = str.split('');
  const evenNumbers = evenOrOddFilter(splittedStr, 0);
  const oddNumbers = evenOrOddFilter(splittedStr, 1);

  const evenSum = evenOrOddReducer(evenNumbers || 0);
  const oddSum = evenOrOddReducer(oddNumbers || 0);

  if (evenSum > oddSum) return 'Even is greater than Odd';
  if (evenSum < oddSum) return 'Odd is greater than Even';

  return 'Even and Odd are the same';
};
