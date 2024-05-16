/*
    - Remove vowels from the string
*/

const shortcut = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const splittedString = string.split('');

  const formattedString = splittedString.filter(
    (letter) => !vowels.includes(letter)
  );

  return formattedString.join('');
};
