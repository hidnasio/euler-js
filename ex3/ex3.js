/*
  largest prime factor
  problem 3

  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?
*/

let number = 600851475143;

let i;

for(i = 2; i < number; i++) {
  if(number % i === 0) {
    number = number / i;
    i--;
  }
}
console.log(i);
