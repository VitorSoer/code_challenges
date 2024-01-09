/*
    - Write a function that accepts an integer n and a string s as parameters,
      and returns a string of s repeated exactly n times.
*/

const repeatStr = (timesToRepeat: number, text: string): string => {
  return text.repeat(timesToRepeat);
};
