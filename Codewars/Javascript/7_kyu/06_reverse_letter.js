/*
    - Given a string str, reverse it and omit all non-alphabetic characters.
*/

const reverseLetter = (str) => {
  const formattedStr = str.replace(/[^a-z]/gi, '');
  const reversedStr = formattedStr.split('').reverse().join('');

  return reversedStr;
};
