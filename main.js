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
var cardBookmark = document.querySelector('.winner-cards');
var card = document.querySelector('.card');
var winName = document.querySelector('.winner-name');
var guesses = document.querySelector('.num-guesses');

var low = 1;
var high = 100;
var ranNum;
var guessOne;
var guessTwo;
var nameOne;
var nameTwo;
var guessCount = 0;
var numCard = 0;

// EVENT LISTENERS

updateButton.addEventListener('click', setRange);
submitGuessBtn.addEventListener('click', nameUpdate);
submitGuessBtn.addEventListener('click', getGuess);
submitGuessBtn.addEventListener('click', guessCompare);
submitGuessBtn.addEventListener('click', guessUpdate);
submitGuessBtn.addEventListener('click', updateResponseOne);
submitGuessBtn.addEventListener('click', updateResponseTwo);
// submitGuessBtn.addEventListener('click', addCard);

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
    minInput.value = '';
    maxInput.value = '';
  };
  getTheNumber(low, high);
}

function getTheNumber(low, high) {
  ranNum = Math.floor(Math.random() * (high - low) + low);
  console.log(ranNum);
  return ranNum;
}

function nameUpdate(event) {
  event.preventDefault();
  nameOne = nameOneInput.value;
  nameTwo = nameTwoInput.value;
  if (nameOne === '' || nameTwo === '') {
    alert("Please enter a valid name");
  } else {
    for (var i = 0; i < challengerOneText.length; i++) { 
      challengerOneText[i].innerText = nameOne;
    } 
    for (var i = 0; i < challengerTwoText.length; i++) {
      challengerTwoText[i].innerText = nameTwo;
    }
  }
}

function getGuess() {
  guessOne = parseInt(guessOneInput.value);
  guessTwo = parseInt(guessTwoInput.value);
  guessCount += 2;
  console.log(guessCount);
  
}

function guessUpdate() {
  guessOneDefault.innerText = guessOne;
  guessTwoDefault.innerText = guessTwo;
  clearButton.disabled = false;
  resetButton.disabled = false;
  // submitGuessBtn.disabled = true;
}

function guessCompare() {
  if (guessOne < low || guessOne > high) {
    alert("Please enter a guess within the set range");
  }
  if (guessTwo < low || guessTwo > high) {
    alert("Please enter a guess within the set range");
  }
  if (isNaN(guessOne) === true) {
    alert("Please enter a valid number");
  }
  if (isNaN(guessTwo) === true) {
    alert("Please enter a valid number");
  }
}

function updateResponseOne() {
  if (guessOne === ranNum) {
    responseOne.innerText = "BOOM!";
    increaseRange();
    getTheNumber(low, high);
    winName = nameOne;
    makeCard(nameOne, nameTwo, winName, guessCount);
    clearGame();
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
    increaseRange();
    getTheNumber(low, high);
    winName = nameTwo;
    makeCard(nameOne, nameTwo, winName, guessCount);
    clearGame();
   }
    else if (guessTwo < ranNum) {
    responseTwo.innerText = "that's too low";
  } else if (guessTwo > ranNum) {
    responseTwo.innerText = "that's too high";
  } else {
    responseTwo.innerText = "Try to guess!";
  }
}

function increaseRange() {
  low -= 10;
  high += 10;
  if (low < 0) {
    low = 1;
    curMin.innerText = 1;
  } else {
    curMin.innerText = low;
  }
  curMax.innerText = high;
}

function clearGame() {
  guessOneInput.value = '';
  guessTwoInput.value = '';
  submitGuessBtn.disabled = false;
  clearButton.disabled = true;
}

function resetGame() {
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


function makeCard(nameOne, nameTwo, winName, guessCount) {
  numCard ++;
  cardBookmark.innerHTML += 
  `<article class="card">
    <h4 class="card-name name-1">${nameOne}</h4><h5> vs. </h5><h4 class="card-name name-2">${nameTwo}</h4>
    <h2 class="winner-name">${winName}</h2>
    <h2>WINNER</h2>
    <h5 class="num-guesses">${guessCount}</h5><h5> GUESSES</h5>
    <button class="delete-btn">X</button>
    </article>`
}
var deleteBut = document.querySelector('.delete-btn');

cardBookmark.addEventListener('click', removeCard);

function removeCard() {
  if (event.target.className === "delete-btn") {
    event.target.parentElement.parentElement.remove()
  }
}