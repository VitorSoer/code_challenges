/*
    - We need a function that counts the number of sheep present in the array (true means present).
*/

const countSheeps = (arrayOfSheep: (boolean | undefined | null)[]) => {
  let sheepCount = 0;

  for (const sheep of arrayOfSheep) {
    if (!!sheep) sheepCount++;
  }

  return sheepCount;
};
