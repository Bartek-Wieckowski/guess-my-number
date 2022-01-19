"use strict";
const message = document.querySelector(".heading-secondary");
const rightScore = document.querySelector(".number");
const score = document.querySelector(".score");
const attemptUser = document.querySelector(".attempt-user");
<<<<<<< HEAD

message.textContent = "Bart działa";
rightScore.textContent = 13;
score.textContent = 90;
attemptUser.value = 30;
=======
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");

btnCheck.addEventListener("click", function () {
  const guess = Number(attemptUser.value);
  if (!guess) {
    message.textContent = "⛔ No number!";
  }
});
>>>>>>> test
