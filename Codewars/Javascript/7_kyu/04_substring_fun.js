/*
    - You must concatenate the nth letter from each word to 
      construct a new word which should be returned as a string, 
      where n is the position of the word in the list.
*/

const nthChar = (words = []) => {
  if (!words || !words?.length) return '';

  let formattedWord = '';
  const arrayLength = words?.length;

  for (let index = 0; index < arrayLength; index++) {
    const splittedWord = words[index]?.split('') || [];
    const separatedLetter = splittedWord[index];

    formattedWord += separatedLetter;
  }

  return formattedWord;
};
