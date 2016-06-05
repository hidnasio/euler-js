/*
 Smallest multiple
 Problem 5

 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

 What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

// create a range function that returns [from, to]
let range = (from, to, step = 1) => [from].concat(Array.from(new Array(to - from).keys(), i => i += from + 1).filter(i => (i - from) % step === 0));

const range20 = range(2, 20);

let i;

for(i = 20; i <= Number.MAX_SAFE_INTEGER; i += 20) {
  if(range20.reduce((acc, e) => acc ? i % e === 0 : acc, true))
    break;
}

console.log(i);
