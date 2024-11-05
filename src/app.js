'use strict';

// Write your code here
const {generateRandomNumber} = require('./modules/generateRandomNumber'); 
const {checkIsValidUserInput} = require('./modules/checkIsValidUserInput'); 

function app() {
    const secretNumber = generateRandomNumber(); 
    let attempts = 0; 

    while (true) {
        const userGuess = checkIsValidUserInput(); 
        attempts += 1; 
        const [bulls, cows] = getBullsAndCows(secretNumber, userGuess); 

        
        console.log(`Bulls: ${bulls}, Cows: ${cows}`);

        
        if (bulls === 4) {
            console.log('Congratulations! You guessed the number!'); 
            break; 
        }
    }
}

// Call the main function to start the game
app();

