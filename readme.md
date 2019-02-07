# Tiffany B and Jon K Number Guesser Project

This is the third project assigned to the students of Turing Front End Mod-1. We were asked to create a functional number guessing game and each project was delegated to a two person team.

# Goals

## Starting range of numbers is between 1 - 100, with the ability for the user to add a custom range.
## A random number is generated as the winning number.
## Two players are able to enter numbers as a guess.
## Buttons available for clearing input fields, resetting game, and displaying error messages.
## Return on the guess should indicate whether the guess was too high, too low, or correct.
## Display the final results of each match in UI.
## Site must be functional.

# Example Code



function updateResponseOne() {
  if (guessOne === ranNum) {
    responseOne.innerText = "BOOM!";
    increaseRange();
    getTheNumber(low, high);
    makeCard();
    clearGame();
  } else if (guessOne < ranNum) {
    responseOne.innerText = "that's too low";
  } else if (guessOne > ranNum) {
    responseOne.innerText = "that's too high";
  } else {
    responseOne.innerText = "Try to guess!";
  }
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

# Media Queries

## A media query was set when screen size hits 768px to adjust size.

# Screenshots

## Our Project

![image](https://user-images.githubusercontent.com/43790434/52418522-76a7e680-2aab-11e9-83d2-63ea227a1930.png)

## Turing Comp

![image](https://user-images.githubusercontent.com/43790434/52418647-b8389180-2aab-11e9-970b-5fa2be9f5831.png)
