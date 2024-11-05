'use strict';

/**
 * Checks that the user input is valid.
 * Valid user input is a 4-digit number that does not start with 0
 * and does not contain any duplicate digits.
 *
 * @param {string} userInput - The user input
 * @return {boolean} - True if the user input is valid, false otherwise
 */
function checkIsValidUserInput(userInput) {
  /* Write your code here */
  if (typeof userInput !== 'string' || userInput.length !== 4) {
    return false;
}


const seenDigits = new Set();


for (let character of userInput) {
    
    if (!/\d/.test(character)) {
        return false;
    }
   
    if (seenDigits.has(character)) {
        return false;
    }
 
    seenDigits.add(character);
}

return true;
}

module.exports = {
  checkIsValidUserInput,
};
