/*
    - Count the number of divisors of a positive integer n.
*/

/* 
    - TOO SLOW 

    const getDivisorsCnt = (number) => {
    let divisorsCnt = 0;

    for (let index = 1; index <= number; index++) {
        if (number % index === 0) {
        divisorsCnt++;
        }
    }

    return divisorsCnt;
    };
*/

const getDivisorsCnt = (number) => {
  let divisorsCnt = 0;
  const sqrt = Math.sqrt(number);

  for (let index = 1; index <= sqrt; index++) {
    if (number % index === 0) {
      if (index === number / index) {
        divisorsCnt++;
      } else {
        divisorsCnt += 2;
      }
    }
  }

  return divisorsCnt;
};
