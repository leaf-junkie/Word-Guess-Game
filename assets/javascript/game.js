// alert('Press any key to begin!');

// Select random plant name
const plants =                     // Word list
    [   
        'monstera', 
        'pothos', 
        'string of hearts',
        'english ivy',
        'devils ivy',
        'rubber plant',
        'zz plant',
        'fiddle leaf fig',
        'succulent',
        'maidenhair fern',
        'jade plant',
        'heartleaf philodendron',
        'cactus',
        'prayer plant',
        'aloe',
        'pinstripe calathea',
        'bird of paradise',
        'pilea peperomioides',
        'rattlesnake plant',
        'sansevieria',
        'air plant',
        'tillandsia',
        'staghorn fern',
        'peperomia',
        'string of pearls',
        'burros tail' 
    ];

// Use Math.floor to round the random number down to the nearest whole number
let randomIndex = Math.floor(Math.random() * plants.length);
let thePlant = plants[randomIndex];
// Print these values to the console
console.log(randomIndex);
console.log(thePlant);

// Create empty list for randomly selected plant and push to screen
plantLetters = [];
for (var letter in thePlant) {
    var letterObject = {
        value: letter,
        visible: false
    }
    plantLetters.push(letter);
}

// Create event listener for when a key is pressed
document.onkeyup = keyUpHandler

// Move guessed letters into an array
let letters = 'abcdefghijklmnopqrstuvwxyz';
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

    // draw the letters
    drawLetters();
    document.getElementsByClassName('current-plant').innerHTML = plantLetters.join(' ');    
}

// When hint button is clicked, show relevant image


// If zero guesses left, lose (call a lose function) and reset guesses remaining
if (guessesRemaining === 0) {
    lose();
}

// These are the functions

// Invoke a win
function win() {
    console.log('You win!');
    // Display number of wins in browser
    let wins = parseInt(document.getElementById('winCount').innerHTML);
    wins += 1;
    document.getElementById('winCount').innerHTML = wins;

    // Display win screen
    let winScreen = document.getElementById('winScreen');
    winScreen.style.visibility = 'visible';
}

// Invoke a loss
function lose() {
    console.log('You lose!');
    // Display number of losses in browser
    let losses = parseInt(document.getElementById('lossCount').innerHTML);
    losses += 1;
    document.getElementById('lossCount').innerHTML = losses;
    
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
    console.log(thePlant);

    // Make win screen and lose screen hidden on reset
    winScreen.style.visibility = 'hidden';
    loseScreen.style.visibility = 'hidden';
}

// Check if plant contains a letter and make correctly guessed letters visible
function checkIfPlantHasLetter(guessedLetter) {
    var hasLetter = false;

    // Loop over letters in plantLetters (for letter in plantLetters)
    for (var letter in plantLetters) {
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
    for (var letter in plantLetters) {
        if (letter.visible) {
            html += letter.value;
        }
        else {
            // If not, draw an underscore in place of the letter
            html += '_';
        }
        document.getElementsByClassName('current-plant').innerHTML = guessedLetters;
    }
    document.getElementsByClassName('the-plant').innerHTML = html;
}