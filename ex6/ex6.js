/*
  Sum square difference
  Problem 6

  The sum of the squares of the first ten natural numbers is,
  12 + 22 + ... + 102 = 385

  The square of the sum of the first ten natural numbers is,
  (1 + 2 + ... + 10)2 = 552 = 3025

  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

// create a range function that returns [from, to]
let range = (from, to, step = 1) => [from].concat(Array.from(new Array(to - from).keys(), i => i += from + 1).filter(i => (i - from) % step === 0));

const range100 = range(1, 100);

const squareOfSum = Math.pow(range100.reduce( (acc, e) => acc + e), 2);

const sumOfSquare = range100.reduce( (acc, e) => acc += Math.pow(e, 2));

const result = squareOfSum - sumOfSquare;

console.log(result);
