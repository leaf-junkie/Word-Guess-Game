// alert('Press any key to begin!');

// Select random plant name
// var plant = {
//     name: "air plant", 
//     index: "0", 
//     src: "../word-guess-game/assets/images/hints/air-plant.JPG"
// };

const plantsArray =
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

    // // These are the image links - Include these as object properties
    // <img class="hint-img" id="airPlant" z-index="10" src="../word-guess-game/assets/images/hints/air-plant.JPG" class="clearfix" style="max-width: 100%; visibility: "/>
    // <img class="hint-img" id="aloe" z-index="20" src="../word-guess-game/assets/images/hints/aloe.JPG" class="clearfix" style="max-width: 100%; visibility: "/>
    // <img class="hint-img" id="birdOfParadise" z-index="30" src="../word-guess-game/assets/images/hints/bird-of-paradise.JPG" class="clearfix" style="max-width: 100%; visibility: "/>
    // <img class="hint-img" id="burrosTail" z-index="4" src="../word-guess-game/assets/images/hints/burros-tail.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="cactus" z-index="5" src="../word-guess-game/assets/images/hints/cactus.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="devilsIvy" z-index="6" src="../word-guess-game/assets/images/hints/devils-ivy.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="englishIvy" z-index="7" src="../word-guess-game/assets/images/hints/english-ivy.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="fiddleLeafFig" z-index="8" src="../word-guess-game/assets/images/hints/fiddle-leaf-fig.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="heartleafPhilodendron" z-index="9" src="../word-guess-game/assets/images/hints/heartleaf-philodendron.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="jadePlant" z-index="10" src="../word-guess-game/assets/images/hints/jade-plant.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="maidenhairFern" z-index="11" src="../word-guess-game/assets/images/hints/maidenhair-fern.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="monstera" z-index="12" src="../word-guess-game/assets/images/hints/monstera.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="peperomia" z-index="13" src="../word-guess-game/assets/images/hints/peperomia.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="pileaPeperomioides" z-index="14" src="../word-guess-game/assets/images/hints/pilea-peperomioides.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="pinstripeCalathea" z-index="15" src="../word-guess-game/assets/images/hints/pinstripe-calathea.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="posthos" z-index="16" src="../word-guess-game/assets/images/hints/pothos.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="prayerPlant" z-index="17" src="../word-guess-game/assets/images/hints/prayer-plant.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="rattlesnakePlant" z-index="18" src="../word-guess-game/assets/images/hints/rattlesnake-plant.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="rubberPlant" z-index="19" src="../word-guess-game/assets/images/hints/rubber-plant.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="sansevieria" z-index="20" src="../word-guess-game/assets/images/hints/sansevieria.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="staghornFern" z-index="21" src="../word-guess-game/assets/images/hints/staghorn-fern.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="stringOfHearts" z-index="22" src="../word-guess-game/assets/images/hints/string-of-hearts.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="stringOfPearls" z-index="23" src="../word-guess-game/assets/images/hints/string-of-pearls.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="succulent" z-index="24" src="../word-guess-game/assets/images/hints/succulent.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="tillandsia" z-index="25" src="../word-guess-game/assets/images/hints/tillandsia.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>
    // <img class="hint-img" id="zzPlant" z-index="26" src="../word-guess-game/assets/images/hints/zz-plant.JPG" class="clearfix" style="max-width: 100%; visibility: hidden"/>

// Use Math.floor to round the random number down to the nearest whole number
let randomIndex = Math.floor(Math.random() * plantsArray.length);
let thePlant = plantsArray[randomIndex];
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

// TODO: When hint button is clicked, show relevant image
// -


// Invoke a win
function win() {
    // Display number of wins in browser
    let wins = parseInt(document.getElementById('winCount').innerHTML);
    
    // Increase win count by 1
    wins += 1;
    document.getElementById('winCount').innerHTML = wins;

    console.log('win');
    
    // Display win modal
    document.getElementById('winModal').classList.add('is-active');

    // let winScreen = document.getElementById('winScreen');
    // winScreen.style.visibility = 'visible';
}

// Invoke a loss
function lose() {
    // Display number of losses in browser
    let losses = parseInt(document.getElementById('lossCount').innerHTML);
    
    // Increase loss count by 1
    losses += 1;
    
    document.getElementById('lossCount').innerHTML = losses;
    console.log('lose');
    
    // Display lose modal
    document.getElementById('loseModal').classList.add('is-active');

    // let loseScreen = document.getElementById('loseScreen');
    // loseScreen.style.visibility = 'visible';
}

// Reset the word when the game ends
function reset() {
    // Reset guesses remaining
    guessesRemaining = 10;
    document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
    
    // Empty guessed letters array
    guessedLetters = [];
    document.getElementById('guessedLetters').innerHTML = guessedLetters.join(', ');
    
    // Select new plant
    randomIndex = Math.floor(Math.random() * plantsArray.length);
    thePlant = plantsArray[randomIndex];
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
    // Loop over letters in plantLetters (for letter in plantLetters)
    for (var i = 0; i < plantLetters.length; i++) {
        var letter = plantLetters[i];
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
}