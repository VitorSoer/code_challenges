/* 
    - Return an array, where the first element is the count of positives numbers and
      the second element is sum of negative numbers
*/

const countPositivesSumNegatives = (arr) => {
  if (!arr || !arr?.length) return [];

  const positives = arr.filter((number) => number > 0);
  const negatives = arr.filter((number) => number < 0);
  const sumOfNegatives = negatives.reduce((acc, number) => acc + number, 0);

  return [positives.length, sumOfNegatives];
};
