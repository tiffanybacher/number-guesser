// GLOBAL VARIABLES

var minInput = document.querySelector('#min-range');
var maxInput = document.querySelector('#max-range');
var nameOneInput = document.querySelector('#name-input-1');
var nameTwoInput = document.querySelector('#name-input-2');
var guessOneInput = document.querySelector('#guess-1');
var guessTwoInput = document.querySelector('#guess-2');
var updateButton = document.querySelector('.range-update');
var submitGuessBtn = document.querySelector('.submit-guess');
var clearButton = document.querySelector('.clear-game');
var resetButton = document.querySelector('.reset-game');
var curMinText = document.querySelector('.min-number');
var curMaxText = document.querySelector('.max-number');
var nameOneText = document.querySelectorAll('.name-1');
var nameTwoText = document.querySelectorAll('.name-2');
var guessOneText = document.querySelector('.current-guess-1');
var guessTwoText = document.querySelector('.current-guess-2');
var responseOne = document.querySelector('.response-1');
var responseTwo = document.querySelector('.response-2');
var errMessage = document.querySelector('.error');
var cardBookmark = document.querySelector('.winner-cards');
var winnerSide = document.querySelector('.winner-side');
var card = document.querySelector('.card');
var winName = document.querySelector('.winner-name');
var removeAllBtn = document.querySelector('.delete-all-btn');

var low = 1;
var high = 100;
var ranNum;
var nameOne;
var nameTwo;
var guessOne;
var guessTwo;
var guessCount = 0;
var winName;

// EVENT LISTENERS

updateButton.addEventListener('click', setRange);
submitGuessBtn.addEventListener('click', updateNames);
submitGuessBtn.addEventListener('click', getGuesses);
submitGuessBtn.addEventListener('click', updateGuessOne);
submitGuessBtn.addEventListener('click', updateGuessTwo);
submitGuessBtn.addEventListener('click', updateResponseOne);
submitGuessBtn.addEventListener('click', updateResponseTwo);
clearButton.addEventListener('click', clearGame);
resetButton.addEventListener('click', resetGame);
cardBookmark.addEventListener('click', removeCard);
winnerSide.addEventListener('click', removeAllCards);


// FUNCTIONS

setDefaultRange();

function setDefaultRange() {
  low = 1;
  high = 100;
  curMinText.innerText = 1;
  curMaxText.innerText = 100;
  getTheNumber(1, 100);
}

function getTheNumber(low, high) {
  ranNum = Math.floor(Math.random() * (high - low) + low);
  console.log(ranNum);
}

function setRange(event) {
  event.preventDefault();
  low = parseInt(minInput.value);
  if (low <= 0) {
    low = 1;
  }
  high = parseInt(maxInput.value);
  if (low > high) {
    disableChallengerField();
    errMessage.style.display = 'inline';
    alert("Please enter a valid range");
  } else {
    errMessage.style.display = 'none';
  }
  if (minInput.value === '' || maxInput.value === '') {
    disableChallengerField();
    errMessage.style.display = 'inline';
    alert("Please enter a valid range");
  }
  if (low < high) {
    enableChallengerField();
    clearRangeInputs();
  }
  getTheNumber(low, high);
}

function disableChallengerField() {
  curMinText.innerText = 0;
  curMaxText.innerText = 0;
  submitGuessBtn.disabled = true;
  nameOneInput.disabled = true;
  nameTwoInput.disabled = true;
  guessOneInput.disabled = true;
  guessTwoInput.disabled = true;
}

function enableChallengerField() {
  curMinText.innerText = low;
  curMaxText.innerText = high;
  submitGuessBtn.disabled = false;
  nameOneInput.disabled = false;
  nameTwoInput.disabled = false;
  guessOneInput.disabled = false;
  guessTwoInput.disabled = false;
}

function clearRangeInputs() {
  minInput.value = '';
  maxInput.value = '';
}

function updateNames() {
  nameOne = nameOneInput.value || 'Challenger 1';
  nameTwo = nameTwoInput.value || 'Challenger 2';
  if (nameOne === '' || nameTwo === '') {
    alert("Please enter a valid name");
  } else {
    for (var i = 0; i < nameOneText.length; i++) { 
      nameOneText[i].innerText = nameOne;
    }
    for (var i = 0; i < nameTwoText.length; i++) {
      nameTwoText[i].innerText = nameTwo;
    }
  }
  if (nameOne === 'Challenger 1' || nameTwo === 'Challenger 2') {
    alert("Please enter a valid name");
  }
}

function clearNameInputs() {
  nameOneInput.value = '';
  nameTwoInput.value = '';
}

function getGuesses() {
  guessOne = parseInt(guessOneInput.value);
  guessTwo = parseInt(guessTwoInput.value);
  guessCount += 2;
  activateButtons();
}

function activateButtons() {
  resetButton.disabled = false;
  clearButton.disabled = false;
}

function updateGuessOne() {
if (guessOne < low || guessOne > high) {
    alert("Please enter a guess within the set range");
  } else if (isNaN(guessOne) === true) {
    alert("Please enter a valid number");
  } else {
    guessOneText.innerText = guessOne;
  }
}

function updateGuessTwo() {
  if (guessTwo < low || guessTwo > high) {
    alert("Please enter a guess within the set range");
  } else if (isNaN(guessTwo) === true) {
    alert("Please enter a valid number");
  } else {
    guessTwoText.innerText = guessTwo;
  }
}

function updateResponseOne() {
  if (guessOne === ranNum) {
    responseOne.innerText = "BOOM!";
    winName = nameOne;
    chooseWinner();
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
    winName = nameTwo;
    chooseWinner();
   }
    else if (guessTwo < ranNum) {
    responseTwo.innerText = "that's too low";
  } else if (guessTwo > ranNum) {
    responseTwo.innerText = "that's too high";
  } else {
    responseTwo.innerText = "Try to guess!";
  }
}

function chooseWinner() {
    increaseRange();
    getTheNumber(low, high);
    makeCard();
    clearGame();
}

function increaseRange() {
  low -= 10;
  high += 10;
  if (low <= 0) {
    low = 1;
    curMinText.innerText = 1;
  } else {
    curMinText.innerText = low;
  }
  curMaxText.innerText = high;
}

function clearGame() {
  guessOneInput.value = '';
  guessTwoInput.value = '';
}

function resetGame() {
  clearGame();
  clearRangeInputs();
  clearNameInputs();
  setDefaultText();
  setDefaultRange();
  disableButtons();
}

function setDefaultText() {
  guessOneText.innerText = 0;
  guessTwoText.innerText = 0;
  responseOne.innerText = 'Try to guess!';
  responseTwo.innerText = 'Try to guess!';
  for (var i = 0; i < nameOneText.length; i++) { 
    nameOneText[i].innerText = 'Challenger 1 Name';
  }
  for (var i = 0; i < nameTwoText.length; i++) {
    nameTwoText[i].innerText = 'Challenger 2 Name';
  }
}

function disableButtons() {
  clearButton.disabled = true;
  resetButton.disabled = true;
}

function makeCard() {
  removeAllBtn.style.display = 'inline';
  cardBookmark.innerHTML += 
   `<article class="card">
    <h4 class="card-name name-1">${nameOne.toUpperCase()}</h4><h5> vs. </h5><h4 class="card-name name-2">${nameTwo.toUpperCase()}</h4>
    <h2 class="winner-name">${winName.toUpperCase()}</h2>
    <h2>WINNER</h2>
    <h5 class="num-guesses">${guessCount}</h5><h5> GUESSES</h5>
    <button class="delete-btn">X</button>
    </article>`;
}

function removeCard() {
  if (event.target.className === 'delete-btn') {
    event.target.parentElement.remove();
  }
}

function removeAllCards() {
  if (event.target.className === 'delete-all-btn') {
    cardBookmark.innerHTML = ``;
    removeAllBtn.style.display = 'none';
  }
}