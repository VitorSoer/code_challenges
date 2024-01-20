/*
    - Make a function that receive age, and return what they drink.
*/

const peopleWithAgeDrink = (age) => {
  if (age < 14) return 'Kids drink toddy.';
  if (age < 18) return 'Teens drink coke.';
  if (age < 21) return 'Young adults drink beer.';

  return 'Adults drink whisky.';
};
