// alert('Press any key to begin!');

// Select random plant name
const plants =                     // Word list
    [   
        'air plant',
        'aloe',
        'bird of paradise',
        'burros tail', 
        'cactus',
        'devils ivy',
        'english ivy',
        'fiddle leaf fig',
        'heartleaf philodendron',
        'jade plant',
        'maidenhair fern',
        'monstera', 
        'peperomia',
        'pilea peperomioides',
        'pinstripe calathea',
        'pothos', 
        'prayer plant',
        'rattlesnake plant',
        'rubber plant',
        'sansevieria',
        'staghorn fern',
        'string of hearts',
        'string of pearls',
        'succulent',
        'tillandsia',
        'zz plant',
    ];

// Use Math.floor to round the random number down to the nearest whole number
let randomIndex = Math.floor(Math.random() * plants.length);
let thePlant = plants[randomIndex];
// Print these values to the console
console.log(randomIndex);
console.log(thePlant);

generatePlantLetters();

// Create event listener for when a key is pressed
document.onkeyup = keyUpHandler

// Move guessed letters into an array
let letters = 'abcdefghijklmnopqrstuvwxyz ';
letters = letters.toUpperCase();
let guessedLetters = [];

// The number of guesses the player has
let guessesRemaining = 10;
document.getElementById('guessesRemaining').innerHTML = guessesRemaining;

// This is the game logic

// Get input from user when a key is pressed
function keyUpHandler(event) {
    // Filter non letters
    if (!letters.includes(event.key.toUpperCase())) {
        return;
    }
    
    // Ignore redundant input from user
    // On key press, check if the letter has already been pressed
    if (guessedLetters.includes(event.key)) {
        // If it has not been pressed, return true
        return;
    } else {
        // If it has been pressed, return false
        guessedLetters.push(event.key);
            
    }
    
    // Show pressed keys in console
    console.log('Key pressed: ' + guessedLetters);
    
    // Display the letters that have been guessed
    document.getElementById('guessedLetters').innerHTML = guessedLetters.join(', ');
    
    // Check if pressed letter is included in name of current plant 
    if (checkIfPlantHasLetter(event.key)) {
        // had the letter
        
    } else {
        // did not have the letter

        // Decrement guess count
        guessesRemaining -= 1;
        
        // Display the number of remaining guesses under 'Guesses Remaining'
        console.log('Number of guesses remaining: ' + guessesRemaining);
        document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
        
        // Have one leaf fall from leaf drop graphic with each incorrect guess
    }

    // draw the letters to the DOM
    drawLetters();
    
    // If all letters in the word have been guessed, win
    var allLettersGuessed = true;
    for (i = 0; i < plantLetters.length; i++) {
        if (plantLetters[i].visible === false) {
            allLettersGuessed = false;
        }
    }
    if (allLettersGuessed) {
        win();
    }

    // If zero guesses left, lose (call a lose function)
    if (guessesRemaining === 0) {
        lose();
    }
}

// When hint button is clicked, show relevant image



// These are the functions

// Invoke a win
function win() {
    // Display number of wins in browser
    let wins = parseInt(document.getElementById('winCount').innerHTML);
    
    // Increase win count by 1
    wins += 1;
    document.getElementById('winCount').innerHTML = wins;

    console.log('You win!');
    
    // Display win screen
    let winScreen = document.getElementById('winScreen');
    winScreen.style.visibility = 'visible';
}

// Invoke a loss
function lose() {
    // Display number of losses in browser
    let losses = parseInt(document.getElementById('lossCount').innerHTML);
    
    // Increase loss count by 1
    losses += 1;
    
    document.getElementById('lossCount').innerHTML = losses;
    console.log('You lose!');
    
    // Display lose screen
    let loseScreen = document.getElementById('loseScreen');
    loseScreen.style.visibility = 'visible';
}

// Reset plant after win or loss
function reset() {
    // Reset guesses remaining
    guessesRemaining = 10;
    document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
    
    // Empty guessed letters array
    guessedLetters = [];
    document.getElementById('guessedLetters').innerHTML = guessedLetters.join(', ');
    
    // Select new plant
    randomIndex = Math.floor(Math.random() * plants.length);
    thePlant = plants[randomIndex];
    console.log('Reset. New plant: ' + thePlant);

    // Make win screen and lose screen hidden on reset
    winScreen.style.visibility = 'hidden';
    loseScreen.style.visibility = 'hidden';

    generatePlantLetters();
    drawLetters();
}

// Check if plant contains a letter and make correctly guessed letters visible
function checkIfPlantHasLetter(guessedLetter) {
    var hasLetter = false;
    console.log('checking if ' + guessedLetter + ' is in thePlant');
    // Loop over letters in plantLetters (for letter in plantLetters)
    for (var i = 0; i < plantLetters.length; i++) {
        var letter = plantLetters[i];
        console.log('checking if ' + guessedLetter + ' is equal to ' + letter.value);
        // If the current letter is the guessedLetter, set visible to true, and hasLetter to true
        if (letter.value === guessedLetter) {
            letter.visible = true;
            hasLetter = true;
        }
    }
    
    return hasLetter;
}

// Draw letters onto the screen
function drawLetters() {
    var html = '';

    for (var i = 0; i < plantLetters.length; i++) {
        if (plantLetters[i].visible) {
            html += plantLetters[i].value;
        }
        else {
            // If not, draw an underscore in place of the letter
            html += '_';
        }
    }

    console.log(html);
    document.getElementById('currentPlant').innerHTML = html;
}

function generatePlantLetters() {
    // Create empty list for randomly selected plant and push to screen
    plantLetters = [];
    for (var i = 0; i < thePlant.length; i++) {
        var letterObject = {
            value: thePlant.charAt(i),
            visible: false
        }
        plantLetters.push(letterObject);
    }
    console.log('plant letters: ', plantLetters);
}