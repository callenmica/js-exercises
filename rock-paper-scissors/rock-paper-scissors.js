let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();
/*
            if (!score) {
              score = {
                wins: 0,
                losses: 0,
                ties: 0
              }
            }
            */

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "tie.";
    } else if (computerMove === "paper") {
      result = "you lose.";
    } else if (computerMove === "scissors") {
      result = "you win.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "you win.";
    } else if (computerMove === "paper") {
      result = "tie.";
    } else if (computerMove === "scissors") {
      result = "you lose.";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "you lose.";
    } else if (computerMove === "paper") {
      result = "you win.";
    } else if (computerMove === "scissors") {
      result = "tie.";
    }
  }

  if (result === "you win.") {
    score.wins++;
  } else if (result === "you lose.") {
    score.losses++;
  } else if (result === "tie.") {
    score.ties++;
  }

  //localStorage only supports strings
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = `you
        <img src="${playerMove}-emoji.png" class="move-icon" />
        vs
        <img src="${computerMove}-emoji.png" class="move-icon" />
        computer`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function updateResultElement(result) {
  document.querySelector(".js-result").innerHTML = `${result}`;
}

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}
