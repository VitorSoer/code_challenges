/*
    - You receive an array with your peers' test scores. Now calculate the average and compare your score!
*/

const betterThanAverage = (
  classPoints: number[],
  yourPoints: number
): boolean => {
  const total = classPoints.reduce((acc, current) => acc + current, 0);
  const classAverage = total / classPoints.length;

  return yourPoints > classAverage;
};
