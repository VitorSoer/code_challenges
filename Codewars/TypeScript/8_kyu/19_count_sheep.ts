/*
    - If you can't sleep, just count sheep!!
*/

const countSheep = (totalSheep: number): string => {
  if (!totalSheep) return '';

  let count: string[] = [];

  for (let sheepCount = 1; sheepCount <= totalSheep; sheepCount++) {
    count.push(`${sheepCount} sheep...`);
  }

  return count.join('');
};
