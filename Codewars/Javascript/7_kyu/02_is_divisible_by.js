/*
    - Create a function that checks if the first argument n is divisible by all other arguments
*/

const isDivisible = (...numbers) => {
  let array = [...numbers];
  let isDivisible = true;

  const firstArg = array[0];
  const otherArgs = array.slice(1, array.length);

  for (const iterator of otherArgs) {
    if (firstArg % iterator !== 0) {
      isDivisible = false;
      break;
    }
  }

  return isDivisible;
};
