/*
  Largest palindrome product
  Problem 4

  A palindromic number reads the same both ways. The largest palindrome made
  from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two 3-digit numbers.
*/
const isPalindrome = number => [...number.toString()].reduce((acc, curr, i, arr) => acc ? curr === arr.pop() : acc, true) // haha

let limit = 999 * 999;

function* getPalindrome(upperLimit) {
  for(let i = upperLimit; i > 10000; i--) {
    if(isPalindrome(i)) { // all 6 digit palindrome are multiple of 11
      yield i;
    }
  }
}

const palidromeIterator = getPalindrome(limit);

let exit = false;

for(value of palidromeIterator) {
  for(let i = 999; i > 99; i--) {

    if(value % i === 0 && value / i >= 100 && value / i < 1000) {
      console.log(value);
      exit = true;
      break;
    }
  }

  if(exit) break;
}
