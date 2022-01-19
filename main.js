"use strict";
const body = document.querySelector("body");
const message = document.querySelector(".heading-secondary");
const rightScore = document.querySelector(".number");
const score = document.querySelector(".score");
const attemptUser = document.querySelector(".attempt-user");

const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

const foundNumber = Math.trunc(Math.random() * 20) + 1;
let attemptScore = 20;

rightScore.textContent = foundNumber;
btnCheck.addEventListener("click", function () {
  const guess = Number(attemptUser.value);
  if (!guess) {
    message.textContent = "⛔ No number!";
  } else if (guess === foundNumber) {
    message.textContent = "🎉 Correct Number";
    body.style.backgroundColor = "aquamarine";
    body.style.color = "#333";
    rightScore.style.width = "25rem";
  } else if (guess > foundNumber) {
    if (attemptScore > 1) {
      message.textContent = "📈 Too high!";
      attemptScore--;
      score.textContent = attemptScore;
    } else {
      message.textContent = "💥 You lost the game!";
      score.textContent = 0;
      body.style.backgroundColor = "red";
    }
  } else if (guess < foundNumber) {
    if (attemptScore > 1) {
      message.textContent = "📉 Too low!";
      attemptScore--;
      score.textContent = attemptScore;
    } else {
      message.textContent = "💥 You lost the game!";
      score.textContent = 0;
      body.style.backgroundColor = "red";
    }
  }
});
