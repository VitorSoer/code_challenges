/*
    - Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
*/

const sumArray = (array) => {
  if (!array || array?.length <= 2) return 0;

  const min = Math.min(...array);
  const max = Math.max(...array);

  const minIndex = array.indexOf(min);
  const maxIndex = array.indexOf(max);

  let formattedArray = [];

  for (let index = 0; index < array.length; index++) {
    if (index !== minIndex && index !== maxIndex) {
      formattedArray.push(array[index]);
    }
  }

  return formattedArray.reduce((acc, current) => acc + current, 0);
};
