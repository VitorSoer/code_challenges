/*
    - Given a set of numbers, return the additive inverse of each.
    - Each positive becomes negatives, and the negatives become positives.
*/

const invert = (array) => {
  const invertedArray = array.map((number) => {
    return number > 0 ? -number : Math.abs(number);
  });

  return invertedArray;
};
