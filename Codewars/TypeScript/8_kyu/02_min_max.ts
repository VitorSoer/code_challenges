/*
    - Your task is to make two functions ( max and min, or maximum and minimum, etc., 
      depending on the language ) that receive a list of integers as input, 
      and return the largest and lowest number in that list, respectively.
*/

const min = (list: number[]): number => {
  return Math.min(...list);
};

const max = (list: number[]): number => {
  return Math.max(...list);
};
