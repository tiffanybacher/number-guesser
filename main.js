// GLOBAL VARIABLES

var minInput = document.querySelector('#min-range');
var maxInput = document.querySelector('#max-range');
var updateButton = document.querySelector('.range-update');
var curMin = document.querySelector('.min-number');
var curMax = document.querySelector('.max-number');
var nameOneInput = document.querySelector('#name-input-1');
var nameTwoInput = document.querySelector('#name-input-2');
var guessOneInput = document.querySelector('#guess-1');
var guessTwoInput = document.querySelector('#guess-2');
var submitGuessBtn = document.querySelector('.submit-guess');
var clearButton = document.querySelector('.clear-game');
var resetButton = document.querySelector('.reset-game');
var challengerOneText = document.querySelectorAll('.name-1');
var challengerTwoText = document.querySelectorAll('.name-2');
var guessOneDefault = document.querySelector('.current-guess-1');
var guessTwoDefault = document.querySelector('.current-guess-2');
var responseOne = document.querySelector('.response-1');
var responseTwo = document.querySelector('.response-2');
var errMessage = document.querySelector('.error');

var low = 1;
var high = 100;
var ranNum;
var guessOne;
var guessTwo;
var nameOne;
var nameTwo;

// EVENT LISTENERS

updateButton.addEventListener('click', setRange);
submitGuessBtn.addEventListener('click', nameUpdate);
submitGuessBtn.addEventListener('click', guessUpdate);
submitGuessBtn.addEventListener('click', guessCompare);
submitGuessBtn.addEventListener('click', updateResponseOne);
submitGuessBtn.addEventListener('click', updateResponseTwo);
clearButton.addEventListener('click', clearGame);
resetButton.addEventListener('click', resetGame);



// FUNCTIONS

getTheNumber(1, 100);

function disableChallengerField() {
  curMin.innerText = 0;
  curMax.innerText = 0;
  submitGuessBtn.disabled = true;
  nameOneInput.disabled = true;
  nameTwoInput.disabled = true;
  guessOneInput.disabled = true;
  guessTwoInput.disabled = true;
}

function enableChallengerField() {
  curMin.innerText = low;
  curMax.innerText = high;
  submitGuessBtn.disabled = false;
  nameOneInput.disabled = false;
  nameTwoInput.disabled = false;
  guessOneInput.disabled = false;
  guessTwoInput.disabled = false;
}

function setRange(event) {
  event.preventDefault();
  low = parseInt(minInput.value);
  high = parseInt(maxInput.value);
  if (low > high) {
    disableChallengerField();
    errMessage.style.display = 'inline';
    alert("Please enter a valid range");
  } else {
    errMessage.style.display = 'none';
  };
  if (minInput.value === '' || maxInput.value === '') {
    disableChallengerField();
    errMessage.style.display = 'inline';
    alert("Please enter a valid range");
  };
  if (low < high) {
    enableChallengerField();
    curMin.innerText = low;
    curMax.innerText = high;
    minInput.value = '';
    maxInput.value = '';
  };
  getTheNumber(low, high);
  console.log(ranNum);
}

function getTheNumber(low, high) {
  ranNum = Math.floor(Math.random() * (high - low) + low);
  return ranNum;
}

function nameUpdate(event) {
  event.preventDefault();
  nameOne = nameOneInput.value;
  nameTwo = nameTwoInput.value;
  if (nameOneInput.value === '' || nameTwoInput.value === '') {
    alert("Please enter a valid name");
  }
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
  guessOneDefault.innerText = guessOne;
  guessTwoDefault.innerText = guessTwo;
  clearButton.disabled = false;
  resetButton.disabled = false;
}

function guessCompare() {
  if (guessOne < low || guessOne > high) {
    alert("Please enter a guess within the set range");
  }
  if (guessTwo < low || guessTwo > high) {
    alert("Please enter a guess within the set range");
  }
  if (isNaN(guessOne) === true || isNan(guessTwo) === true) {
    alert("Please enter a valid number");
  }
}

function updateResponseOne() {
  if (guessOne === ranNum) {
    responseOne.innerText = "BOOM!";
  } else if (guessOne < ranNum) {
    responseOne.innerText = "that's too low";
  } else if (guessOne > ranNum) {
    responseOne.innerText = "that's too high";
  } else {
    responseOne.innerText = "Try to guess!";
  }
}

function updateResponseTwo() {
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

function clearGame(event) {
  event.preventDefault();
  guessOneInput.value = '';
  guessTwoInput.value = '';
  submitGuessBtn.disabled = false;
}

function resetGame(event) {
  event.preventDefault();
  minInput.value = '';
  maxInput.value = '';
  curMin.innerText = 1;
  curMax.innerText = 100;
  nameOneInput.value = '';
  nameTwoInput.value = '';
  guessOneInput.value = '';
  guessTwoInput.value = '';
  clearButton.disabled = true;
  resetButton.disabled = true;
  guessOneDefault.innerText = 0;
  guessTwoDefault.innerText = 0;
  responseOne.innerText = 'Try to guess!';
  responseTwo.innerText = 'Try to guess!';
  for (var i = 0; i < challengerOneText.length; i++) { 
    challengerOneText[i].innerText = 'Challenger 1 Name';
  }
  for (var i = 0; i < challengerTwoText.length; i++) {
    challengerTwoText[i].innerText = 'Challenger 2 Name';
  }
  getTheNumber(1, 100);
}