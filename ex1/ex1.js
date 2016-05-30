/**
  https://projecteuler.net/problem=1

  Multiples of 3 and 5
  Problem 1

  If we list all the natural numbers below 10
  that are  multiples of 3 or 5, we get 3, 5,
  6 and 9. The sum of these multiples is 23.

  Find the sum of all the multiples of 3 or 5
  below 1000.
 **/

console.log(
  Array.from(Array(1000).keys()).reduce((a,e) => { return e % 3 === 0 || e % 5 === 0 ? a + e : a })
);
