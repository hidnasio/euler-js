/*
  10001st prime
  Problem 7

  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

  What is the 10 001st prime number?
*/

function* primeGenerator() {
  const primes = [2];

  yield 2;

  for(let i = 3; i <= Number.MAX_SAFE_INTEGER; i += 2) {
    if(primes.reduce( (acc, e) => acc ? i % e !== 0 : acc, true)) {
      primes.push(i);
      yield i;
    }
  }
}

const repeat = (number, iterator) => {
  const {value, done} = iterator.next();
  return !done && number > 1 ? repeat(--number, iterator) : value
}

const getPrimeNumber = n => repeat(n, primeGenerator());

console.log(getPrimeNumber(10001));
