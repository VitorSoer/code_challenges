/*
    - Given a string, you have to return a string in which each character 
      (case-sensitive) is repeated once.
*/

const doubleChar = (text) => {
  let formattedText = [];
  const splittedText = text.split('');

  splittedText.forEach((letter) => formattedText.push(letter.repeat(2)));

  return formattedText.join('');
};
