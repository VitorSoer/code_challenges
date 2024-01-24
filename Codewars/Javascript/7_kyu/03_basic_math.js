/*
    - In this kata, you will do addition and subtraction on a given string. 
      The return value must be also a string.
*/

const calculate = (str) => {
  const formattedStr = str.replace(/minus/g, '-').replace(/plus/g, '+');

  return `${eval(formattedStr)}`;
};
