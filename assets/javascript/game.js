const plantsArray =
    [   
        {
            name: 'air plant',
            url: '../word-guess-game/assets/images/hints/air-plant.JPG'
        },
        {
            name: 'aloe',
            url: '../word-guess-game/assets/images/hints/aloe.JPG'
        },
        {
            name: 'bird of paradise',
            url: '../word-guess-game/assets/images/hints/bird-of-paradise.JPG' 
        },
        {
            name: 'burros tail',
            url: '../word-guess-game/assets/images/hints/burros-tail.JPG' 
        },
        {
            name: 'cactus',
            url: '../word-guess-game/assets/images/hints/cactus.JPG' 
        },
        {
            name: 'devils ivy',
            url: '../word-guess-game/assets/images/hints/devils-ivy.JPG' 
        },
        {
            name: 'english ivy',
            url: '../word-guess-game/assets/images/hints/english-ivy.JPG' 
        },
        {
            name: 'fiddle leaf fig',
            url: '../word-guess-game/assets/images/hints/fiddle-leaf-fig.JPG' 
        },
        {
            name: 'heartleaf philodendron',
            url: '../word-guess-game/assets/images/hints/heartleaf-philodendron.JPG' 
        },
        {
            name: 'jade plant',
            url: '../word-guess-game/assets/images/hints/jade-plant.JPG' 
        },
        {
            name: 'maidenhair fern',
            url: '../word-guess-game/assets/images/hints/maidenhair-fern.JPG' 
        },
        {
            name: 'monstera',
            url: '../word-guess-game/assets/images/hints/monstera.JPG' 
        },
        {
            name: 'peperomia',
            url: '../word-guess-game/assets/images/hints/peperomia.JPG' 
        },
        {
            name: 'pilea peperomioides',
            url: '../word-guess-game/assets/images/hints/pilea-peperomioides.JPG' 
        },
        {
            name: 'pinstripe calathea',
            url: '../word-guess-game/assets/images/hints/pinstripe-calathea.JPG' 
        },
        {
            name: 'pothos',
            url: '../word-guess-game/assets/images/hints/pothos.JPG' 
        },
        {
            name: 'prayer plant',
            url: '../word-guess-game/assets/images/hints/prayer-plant.JPG' 
        },   
        {
            name: 'rattlesnake plant',
            url: '../word-guess-game/assets/images/hints/rattlesnake-plant.JPG' 
        },
        {
            name: 'rubber plant',
            url: '../word-guess-game/assets/images/hints/rubber-plant.JPG' 
        },
        {
            name: 'sansevieria',
            url: '../word-guess-game/assets/images/hints/sansevieria.JPG' 
        },
        {
            name: 'staghorn fern',
            url: '../word-guess-game/assets/images/hints/staghorn-fern.JPG'
        },
        {
            name: 'string of hearts',
            url: '../word-guess-game/assets/images/hints/string-of-hearts.JPG'
        },       
        {
            name: 'string of pearls',
            url: '../word-guess-game/assets/images/hints/string-of-pearls.JPG'
        },
        {
            name: 'succulent',
            url: '../word-guess-game/assets/images/hints/succulent.JPG'
        },       
        {
            name: 'tillandsia',
            url: '../word-guess-game/assets/images/hints/tillandsia.JPG'
        },
        {
            name: 'zz plant',
            url: '../word-guess-game/assets/images/hints/zz-plant.JPG'
        }    
    ];

const leafdropGraphicArray = [
    {
        id: 'leafdrop10',
        url: './assets/images/sprites/ficus-10.jpg'
    },
    {
        id: 'leafdrop9',
        url: './assets/images/sprites/ficus-9.jpg'
    },
    {
        id: 'leafdrop8',
        url: './assets/images/sprites/ficus-8.jpg'
    },
    {
        id: 'leafdrop7',
        url: './assets/images/sprites/ficus-7.jpg'
    },
    {
        id: 'leafdrop6',
        url: './assets/images/sprites/ficus-6.jpg'
    },
    {
        id: 'leafdrop5',
        url: './assets/images/sprites/ficus-5.jpg'
    },
    {
        id: 'leafdrop4',
        url: './assets/images/sprites/ficus-4.jpg'
    },
    {
        id: 'leafdrop3',
        url: './assets/images/sprites/ficus-3.jpg'
    },
    {
        id: 'leafdrop2',
        url: './assets/images/sprites/ficus-2.jpg'
    },
    {
        id: 'leafdrop1',
        url: './assets/images/sprites/ficus-1.jpg'
    },
    {
        id: 'leafdrop0',
        url: './assets/images/sprites/ficus-0.jpg'
    }
];

let randomIndex = Math.floor(Math.random() * plantsArray.length);
let thePlant = plantsArray[randomIndex];

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

// Get input from user when a key is pressed
function keyUpHandler(event) {
    // Filter non letters
    if (!letters.includes(event.key.toUpperCase())) return;
    // Ignore redundant input from user
    if (guessedLetters.includes(event.key)) {
    } else {
        guessedLetters.push(event.key);    
    }
        
    // Display the letters that have been guessed
    document.getElementById('guessedLetters').innerHTML = guessedLetters.join(', ');
    
    // Check if pressed letter is included in name of current plant 
    if (checkIfPlantHasLetter(event.key)) {
    } else {
        // Decrement guess count
        guessesRemaining -= 1;
        // Display the number of remaining guesses under 'Guesses Remaining'
        console.log('Number of guesses remaining: ' + guessesRemaining);
        document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
        // TODO: Update leaf-drop graphic
        // document.getElementById('leaf-drop').src=`${currentGraphic}`;
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


// Close modals
function closeModals() {
    winModal.style.visibility = 'hidden';
    loseModal.style.visibility = 'hidden';

    // const modal = document.getElementsByClassName('modal');
    // modal.classList.remove('is-active');
    // modal.setAttribute('aria-hidden', 'true');
    // modal.setAttribute('style', 'display: none');
}

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

    // Hide modals
    winModal.style.visibility = 'hidden';
    loseModal.style.visibility = 'hidden';

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