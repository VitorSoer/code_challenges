/*
    - Given a string made up of letters a, b, and/or c, switch the position of 
      letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
*/

export const switcheroo = (x: string): string => {
  let formattedStr: string[] = [];
  const splittedStr = x.split('');

  for (let i = 0; i < splittedStr.length; i++) {
    if (splittedStr[i] === 'a') formattedStr.push('b');
    if (splittedStr[i] === 'b') formattedStr.push('a');
    if (splittedStr[i] === 'c') formattedStr.push('c');
  }

  return formattedStr.join('');
};
