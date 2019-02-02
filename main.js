// GLOBAL VARIABLES

var minInput = document.querySelector('#min-range');
var maxInput = document.querySelector('#max-range');
var updateButton = document.querySelector('.range-update');
var nameOneInput = document.querySelector('#name-input-1');
var nameTwoInput = document.querySelector('#name-input-2');
var guessOneInput = document.querySelector('#guess-1');
var guessTwoInput = document.querySelector('#guess-2');
var submitGuessBtn = document.querySelector('.submit-guess');

var low;
var high;
var ranNum;
var guessOne;
var guessTwo;

// EVENT LISTENERS

updateButton.addEventListener('click', setRange);
submitGuessBtn.addEventListener('click', nameUpdate);
submitGuessBtn.addEventListener('click', guessUpdate);
submitGuessBtn.addEventListener('click', updateResponseOne);
submitGuessBtn.addEventListener('click', updateResponseTwo);
// submitGuessBtn.addEventListener('click', activateButton);

// FUNCTIONS

getTheNumber(1, 100)

function setRange(event) {
  event.preventDefault();
  low = parseInt(minInput.value);
  high = parseInt(maxInput.value);
  var curMin = document.querySelector('.min-number');
  var curMax = document.querySelector('.max-number');
  curMin.innerText = low;
  curMax.innerText = high;
  getTheNumber(low, high);
  minInput.value = '';
  maxInput.value = '';
}

function getTheNumber(low, high) {
  ranNum = Math.floor(Math.random() * (high - low) + low);
  console.log(ranNum);
  return ranNum;
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
  guessOne = parseInt(guessOneInput.value);
  guessTwo = parseInt(guessTwoInput.value);
  var guessOneDefault = document.querySelector('.current-guess-1');
  var guessTwoDefault = document.querySelector('.current-guess-2');
  guessOneDefault.innerText = guessOne;
  guessTwoDefault.innerText = guessTwo;
  guessOneInput.value = '';
  guessTwoInput.value = '';
}

function updateResponseOne() {
  var responseOne = document.querySelector('.response-1');
  console.log(guessOne);
  if (guessOne === ranNum) {
    responseOne.innerText = "BOOM!";
    console.log("BOOM!")
  } else if (guessOne < ranNum) {
    responseOne.innerText = "that's too low";
    console.log("that's too low")
  } else if (guessOne > ranNum) {
    responseOne.innerText = "that's too high";
    console.log("that's too high")
  } else {
    responseOne.innerText = "Try to guess!";
  }
}

function updateResponseTwo() {
  var responseTwo = document.querySelector('.response-2');
  if (guessTwo === ranNum) {
    responseTwo.innerText = "BOOM!";
  }
    else if (guessTwo < ranNum) {
    responseTwo.innerText = "that's too low";
  } else if (guessTwo > ranNum) {
    responseTwo.innerText = "that's too high";
  } else {
    responseTwo.innerText = "Try to guess!";
  }
}


// function activateButton {
//   var resetButton = document.querySelector('.reset-game');
//   var clearButton = document.querySelector('.clear-game');
//   Activate Buttons
// }