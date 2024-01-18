/*
    - Remove an exclamation mark from the end of a string.
*/

const remove = (string) => {
  const splittedStr = string.split('');
  const strWithoutExclamationMark = splittedStr.slice(0, string?.length - 1);
  const lastChar = splittedStr.pop();

  return lastChar === '!' ? strWithoutExclamationMark.join('') : string;
};
