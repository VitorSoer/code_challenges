/*
    - Write function bmi that calculates body mass index (bmi = weight / height2).
*/

const bmi = (weight: number, height: number): string => {
  const calculatedBMI = weight / height ** 2;

  if (calculatedBMI <= 18.5) return 'Underweight';
  if (calculatedBMI <= 25.0) return 'Normal';
  if (calculatedBMI <= 30.0) return 'Overweight';
  if (calculatedBMI > 30) return 'Obese';

  return 'Invalid values!'
};
