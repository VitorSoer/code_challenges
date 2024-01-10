/*
    - I have a cat and a dog.
    - I got them at the same time as kitten/puppy. That was humanYears years ago.
    - Return their respective ages now as [humanYears,catYears,dogYears]
*/

const calculateYears = (years, animal) => {
  const oneYearValue = 15;
  const twoYearsValue = 24;

  if (years === 1) return oneYearValue;
  if (years === 2) return twoYearsValue;

  const remainingYears = years - 2;

  const calculatedDogYears = twoYearsValue + (remainingYears * 5);
  const calculatedCatYears = twoYearsValue + (remainingYears * 4);

  return animal === 'dog' ? calculatedDogYears : calculatedCatYears;
};

const humanYearsCatYearsDogYears = (humanYears) => {
  const dog = calculateYears(humanYears, 'dog');
  const cat = calculateYears(humanYears, 'cat');

  return [humanYears, cat, dog];
};
