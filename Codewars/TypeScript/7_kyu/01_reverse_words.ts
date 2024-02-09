/*
    - Complete the function that accepts a string parameter, and reverses each word in the string. 
      All spaces in the string should be retained.
*/

export function reverseWords(str: string): string {
  const splittedStr = str.split(' ');
  const reversedStr = splittedStr.map(str => str.split('').reverse().join(''));

  return reversedStr.join(' ');
}