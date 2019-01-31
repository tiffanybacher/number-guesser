// GLOBAL VARIABLES

var minInput = document.querySelector('#min-range');
var maxInput = document.querySelector('#max-range');
var updateButton = document.querySelector('.range-update');
var nameOneInput = document.querySelector('#name-input-1');
var nameTwoInput = document.querySelector('#name-input-2');
var guessOneInput = document.querySelector('#guess-1');
var guessTwoInput = document.querySelector('#guess-2');
var submitGuessBtn = document.querySelector('.submit-guess');

// EVENT LISTENERS

updateButton.addEventListener('click', setRange);
submitGuessBtn.addEventListener('click', nameUpdate);
submitGuessBtn.addEventListener('click', guessUpdate);
// submitGuessBtn.addEventListener('click', activateButton);

// FUNCTIONS

function setRange(event) {
  event.preventDefault();
  var low = parseInt(minInput.value);
  var high = parseInt(maxInput.value);
  var curMin = document.querySelector('.min-number');
  var curMax = document.querySelector('.max-number');
  curMin.innerText = low;
  curMax.innerText = high;
  getTheNumber(low, high);
  minInput.value = '';
  maxInput.value = '';
}

function getTheNumber(low, high) {
  var ranNum = Math.floor(Math.random() * (high - low + 1) + low);
  console.log(ranNum);
  };

function nameUpdate(event) {
  event.preventDefault();
  var nameOne = nameOneInput.value;
  var nameTwo = nameTwoInput.value;
  var challengerOneText = document.querySelectorAll('.name-1');
  var challengerTwoText = document.querySelectorAll('.name-2');
  for (var i = 0; i < challengerOneText.length; i++) { 
    challengerOneText[i].innerText = nameOne;
  }
  for (var i = 0; i < challengerTwoText.length; i++) {
    challengerTwoText[i].innerText = nameTwo;
  }
}

function guessUpdate(event) {
  event.preventDefault();
  var guessOne = parseInt(guessOneInput.value);
  var guessTwo = parseInt(guessTwoInput.value);
  var guessOneDefault = document.querySelector('.current-guess-1');
  var guessTwoDefault = document.querySelector('.current-guess-2');
  guessOneDefault.innerText = guessOne;
  guessTwoDefault.innerText = guessTwo;
  guessOneInput.value = '';
  guessTwoInput.value = '';
}

// compare guessOne to randomNumber
// if guessOne = randomNumber
//  then replace .response-1 with 'BOOM'
//  and create new .card
// else if guessOne < randomNumber
//  then replace .response-1 to 'that's too low'
// else
//  then replace .response-1 to 'that's too high'

// compare guessTwo to randomNumber
// if guessTwo = randomNumber
//  then replace .response-2 with 'BOOM'
//  and create new .card
// else if guessTwo < randomNumber
//  then replace .response-2 to 'that's too low'
// else
//  then replace .response-2 to 'that's too high'

// function activateButton {
//   var resetButton = document.querySelector('.reset-game');
//   var clearButton = document.querySelector('.clear-game');
//   Activate Buttons
// }