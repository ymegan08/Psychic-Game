// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Creating variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Game starts once user presses a letter
document.onkeyup = function (event) {

    var userGuess = event.key;
    guessesMade.push(" " + userGuess); // Add history to array of guesses made

    // If user guesses correctly, user wins and game ends 
    if (userGuess == computerGuess) {
        wins++;
        guessesLeft = 9;
        guessesMade = [];
    }

    // If user guesses incorrectly, decrement number of guesses left
    if (userGuess != computerGuess) {
        guessesLeft --;
    }

    // If there are no more guesses left, refresh history, increment losses, and end game
    if (guessesLeft == 0) {
        losses++;
        guessesLeft = 9;
        guessesMade = [];
    }

    // Display tracked information on html
    var activegame =
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>' +
    '<p>Guesses Left: ' + guessesLeft + '</p>' +
    '<p>Your Guesses so far: ' + guessesMade + '</p>';

    // Reference the HTML with Javascript
    document.getElementById("game").innerHTML = activegame;
}