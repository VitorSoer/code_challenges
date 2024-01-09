/*
    - Write a function that removes the spaces from the string, then return the resultant string.
*/

const noSpace = (text: string): string => {
  return text.replace(/\s/g, '');
};
