"use strict";
// variables
const body = document.querySelector("body");
const message = document.querySelector(".heading-secondary");
const rightScore = document.querySelector(".number");
const score = document.querySelector(".score");
const attemptUser = document.querySelector(".attempt-user");
const userHighScore = document.querySelector(".highscore");

const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

let foundNumber = Math.trunc(Math.random() * 20) + 1;
let attemptScore = 20;
let highScore = 0;

// functions
const displayMessage = function (differentMsg) {
  message.textContent = differentMsg;
};
const setCSSeffects = function (colorBG, colorTxt, width) {
  body.style.backgroundColor = colorBG;
  body.style.color = colorTxt;
  rightScore.style.width = width;
};
const secretNumber = function (generateNum) {
  rightScore.textContent = generateNum;
};
const countAttempt = function (attempt) {
  score.textContent = attempt;
};

// events
btnCheck.addEventListener("click", function () {
  const guess = Number(attemptUser.value);
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === foundNumber) {
    secretNumber(foundNumber);
    displayMessage("🎉 Correct Number");
    setCSSeffects("aquamarine", "#333", "25rem");
    if (attemptScore > highScore) {
      highScore = attemptScore;
      userHighScore.textContent = highScore;
    }
  } else if (guess !== foundNumber) {
    if (attemptScore > 1) {
      displayMessage(guess > foundNumber ? "📈 Too high!" : "📉 Too low!");
      attemptScore--;
      countAttempt(attemptScore);
    } else {
      displayMessage("💥 You lost the game!");
      countAttempt(0);
      setCSSeffects("red");
    }
  }
});

btnAgain.addEventListener("click", function () {
  foundNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  attemptScore = 20;
  countAttempt(attemptScore);
  secretNumber("?");
  setCSSeffects("#333", "aquamarine", "18rem");
  attemptUser.value = "";
});
