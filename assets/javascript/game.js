const plantsArray =
    [   
        {
            id: "airPlant",
            name: 'air plant',
            url: './assets/images/hints/air-plant.JPG'
        },
        {
            id: "aloe",
            name: 'aloe',
            url: './assets/images/hints/aloe.JPG'
        },
        {
            id: "birdOfParadise",
            name: 'bird of paradise',
            url: './assets/images/hints/bird-of-paradise.JPG' 
        },
        {
            id: "burrosTail",
            name: 'burros tail',
            url: './assets/images/hints/burros-tail.JPG' 
        },
        {
            id: "cactus",
            name: 'cactus',
            url: './assets/images/hints/cactus.JPG' 
        },
        {
            id: "devilsIvy",
            name: 'devils ivy',
            url: './assets/images/hints/devils-ivy.JPG' 
        },
        {
            id: "englishIvy",
            name: 'english ivy',
            url: './assets/images/hints/english-ivy.JPG' 
        },
        {
            id: "fiddleLeafFig",
            name: 'fiddle leaf fig',
            url: './assets/images/hints/fiddle-leaf-fig.JPG' 
        },
        {
            id: "heartleafPhilodendron",
            name: 'heartleaf philodendron',
            url: './assets/images/hints/heartleaf-philodendron.JPG' 
        },
        {
            id: "jadePlant",
            name: 'jade plant',
            url: './assets/images/hints/jade-plant.JPG' 
        },
        {
            id: "maidenhairFern",
            name: 'maidenhair fern',
            url: './assets/images/hints/maidenhair-fern.JPG' 
        },
        {
            id: "monstera",
            name: 'monstera',
            url: './assets/images/hints/monstera.JPG' 
        },
        {
            id: "peperomia",
            name: 'peperomia',
            url: './assets/images/hints/peperomia.JPG' 
        },
        {
            id: "pileaPeperomioides",
            name: 'pilea peperomioides',
            url: './assets/images/hints/pilea-peperomioides.JPG' 
        },
        {
            id: "pinstripeCalathea",
            name: 'pinstripe calathea',
            url: './assets/images/hints/pinstripe-calathea.JPG' 
        },
        {
            id: "pothos",
            name: 'pothos',
            url: './assets/images/hints/pothos.JPG' 
        },
        {
            id: "prayerPlant",
            name: 'prayer plant',
            url: './assets/images/hints/prayer-plant.JPG' 
        },   
        {
            id: "rattlesnakePlant",
            name: 'rattlesnake plant',
            url: './assets/images/hints/rattlesnake-plant.JPG' 
        },
        {
            id: "rubberPlant",
            name: 'rubber plant',
            url: './assets/images/hints/rubber-plant.JPG' 
        },
        {
            id: "sansevieria",
            name: 'sansevieria',
            url: './assets/images/hints/sansevieria.JPG' 
        },
        {
            id: "staghornFern",
            name: 'staghorn fern',
            url: './assets/images/hints/staghorn-fern.JPG'
        },
        {
            id: "stringOfHearts",
            name: 'string of hearts',
            url: './assets/images/hints/string-of-hearts.JPG'
        },       
        {
            id: "stringOfPearls",
            name: 'string of pearls',
            url: './assets/images/hints/string-of-pearls.JPG'
        },
        {
            id: "succulent",
            name: 'succulent',
            url: './assets/images/hints/succulent.JPG'
        },       
        {
            id: "tillandsia",
            name: 'tillandsia',
            url: './assets/images/hints/tillandsia.JPG'
        },
        {
            id: "zzPlant",
            name: 'zz plant',
            url: './assets/images/hints/zz-plant.JPG'
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
let currentPlant = plantsArray[randomIndex];

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
        console.log('Remaining guesses: ' + guessesRemaining);
        document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
        // TODO: Update leaf-drop graphic
        // document.getElementById('leaf-drop').src=`${currentGraphic}`;
    }

    // draw the letters to the DOM
    drawLetters();
    
    // If all letters in the word have been guessed, win
    var allLettersGuessed = false;
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

function changeLeafDropGraphic() {
    switch(guessesRemaining) {
        case 0: 
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf0').setAttribute('style', 'display: block');
            break;
        case 1:
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf1').setAttribute('style', 'display: block');
            break;
        case 2:
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf2').setAttribute('style', 'display: block');
            break;
        case 3:
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf3').setAttribute('style', 'display: block');
            break;
        case 4:
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf4').setAttribute('style', 'display: block');
            break;
        case 5:
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf5').setAttribute('style', 'display: block');
            break;
        case 6:
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf6').setAttribute('style', 'display: block');
            break;
        case 7:
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf7').setAttribute('style', 'display: block');
            break;
        case 8:
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf8').setAttribute('style', 'display: block');
            break;
        case 9:
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf9').setAttribute('style', 'display: block');
            break;
        case 10:
            document.getElementsByClassName('lose-a-leaf').setAttribute('style', 'display: none');
            document.getElementById('leaf10').setAttribute('style', 'display: block');
            break;
        // default: document.getElementById('leaf10').setAttribute('style', 'display: block');
        default: return;
    }
}
// // When hint button is clicked, show relevant image
// function showHint() {
//     // add event listener to hint button to listen for clicks
//     document.getElementsByClassName('hint-img')
//         // show the appropriate image
//         for (let i = 0; i < 0; i++) {
//             // if current plant is equal to plantsArray name, 
//             if (currentPlant == plantsArray[i].name) {
//                 // then the object's id is equal to the hint's id
//                 document.getElementById(plantsArray[i].id).style.display = 'block';
//             } 
//             else return;
//         }
//     );
// }


// Close modals
function closeModals() {
    winModal.style.visibility = 'hidden';
    loseModal.style.visibility = 'hidden';
}

// Invoke a win
function win() {
    // Display number of wins in browser
    let wins = parseInt(document.getElementById('winCount').innerHTML);
    // Increase win count by 1
    wins += 1;
    document.getElementById('winCount').innerHTML = wins;
    console.log('Win');
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
    console.log('Lose');
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
    currentPlant = plantsArray[randomIndex];
    console.log('Reset. New plant: ' + currentPlant);

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
    for (var i = 0; i < currentPlant.length; i++) {
        var letterObject = {
            value: currentPlant.charAt(i),
            visible: false
        }
        plantLetters.push(letterObject);
    }
}