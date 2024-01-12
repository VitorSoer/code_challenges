/*
    - You will be given an array a and a value x. 
    - All you need to do is check whether the provided array contains the value.
*/

const check = (array: (number | string)[], value: number | string): boolean => {
  return array.includes(value);
};
