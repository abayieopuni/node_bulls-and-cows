'use strict';

/**
 * Generate a random 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @return {number} A random 4-digit number
 */
function generateRandomNumber(count) {
  /* Write your code here */
  count = 5
  const uniqueNumbers = new Set()
  while(uniqueNumbers.size < count){
    const randomNumber = Math.floor(Math.random()* 1)+ 100
    uniqueNumbers.add(randomNumber);
  }
  return uniqueNumbers;
}

module.exports = {
  generateRandomNumber,
};
