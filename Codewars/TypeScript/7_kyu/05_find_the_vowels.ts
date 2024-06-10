/*
    - We want to know the index of the vowels in a given word
*/

export const vowelIndices = (word: string): number[] => {
  let vowelIndices: number[] = [];
  const splittedStr: string[] = word.split('');

  for (let index = 0; index < splittedStr.length; index++) {
    const currentStr = splittedStr[index];
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y'];

    if (vowels.includes(currentStr)) {
      vowelIndices.push(index + 1);
    }
  }

  return vowelIndices;
};
