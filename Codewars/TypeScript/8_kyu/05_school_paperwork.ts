/*
    - Your classmates asked you to copy some paperwork for them. 
    - You know that there are 'n' classmates and the paperwork has 'm' pages.
*/

const paperwork = (classmates: number, papersPerClassmates: number): number => {
  if (classmates <= 0 || papersPerClassmates <= 0) return 0;

  return classmates * papersPerClassmates;
};
