/*
    - Essentially, rearrange the digits to create the highest possible number.
*/

const descendingOrder = (numbersArray) => {
  const splittedArray = String(numbersArray).split('');

  return Number(splittedArray.sort((a, b) => b - a).join(''));
};
