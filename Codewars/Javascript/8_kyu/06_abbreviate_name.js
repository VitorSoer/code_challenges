/*
    - Write a function to convert a name into initials. 
*/

const abbrevName = (userName) => {
  const splittedName = userName.split(' ');
  const firstInitial = splittedName[0].slice(0, 1).toUpperCase();
  const secondInitial = splittedName[1].slice(0, 1).toUpperCase();

  return `${firstInitial}.${secondInitial}`;
};