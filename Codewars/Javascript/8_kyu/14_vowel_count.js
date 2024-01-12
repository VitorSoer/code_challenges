/*
    - Return the number (count) of vowels in the given string.
    - We will consider a, e, i, o, u as vowels for this Kata (but not y).
*/

const getCount = (text) => {
  let count = 0;

  const splittedText = text.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (const letter of splittedText) {
    if (vowels.includes(letter)) count++;
  }

  return count;
};

