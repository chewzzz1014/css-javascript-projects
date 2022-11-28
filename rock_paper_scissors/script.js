"use strict"

const btns = document.querySelectorAll(".btn");
const table = document.querySelector(".table-body");

let isGameOver = false;
const maxAttempts = 5;
let attempt = 0;

const scores = {
  player: 0,
  computer: 0
};

const choices = [
  { rock: 0 },
  { paper: 1 },
  { scissors: 2 }
];

const display = {
  player: document.querySelector(".score"),
  computer: scores.computer
}

btns[0].addEventListener("click", (e) => {
  console.log("Rock!");
  playGame(0);
})

btns[1].addEventListener("click", (e) => {
  console.log("Paper!");
  playGame(1);
})

btns[2].addEventListener("click", (e) => {
  console.log("Scissors!");
  playGame(2);
})

function generateComputerChoice() {
  return Math.floor(Math.random() * 3);
}

function playGame(playerChoice, computerChoice = generateComputerChoice()) {

  // console.log(`Computer choice: ${computerChoice}`)

  if (!isGameOver) {
    console.log(attempt)
    // draw
    if (playerChoice == computerChoice) {
      attempt++;
      addTableColumn("Draw");
    }
    // player wins
    else if ((playerChoice == 0 && computerChoice == 2) || (playerChoice == 1 && computerChoice == 0) || (playerChoice == 2 && computerChoice == 1)) {
      scores.player += 1;
      attempt++;
      updateScoreDisplay();
      addTableColumn("Player Wins");
    }
    // computer wins
    else {
      scores.computer += 1;
      attempt++;
      updateScoreDisplay();
      addTableColumn("Computer Wins");
    }
    checkIsGameOver();
  }

}

function checkIsGameOver() {
  if (attempt == (maxAttempts - 1)) {
    isGameOver = true;
    if (scores.player > scores.computer) {
      display.player.innerHTML += " - <span class='text-success'>Player wins the Game!</span>"
    } else if (scores.player < scores.computer) {
      display.player.innerHTML += " - <span class='text-danger'>Computer wins the Game :(</span>"
    } else {
      display.player.innerHTML += " - <span class='text-warning'>Draw!</span>"
    }
  }
}

function isLastRound() {
  if (attempt === (maxAttempts - 1)) {
    btns.forEach((btn) => btn.setAttribute("disabled", ""));
    return true;
  }
  return false;
}

function addTableColumn(result) {
  const tr = document.createElement("TR");
  const th = document.createElement("TD");
  const td1 = document.createElement("TD");
  const td2 = document.createElement("TD");
  const td3 = document.createElement("TD");

  th.textContent = attempt;
  td1.textContent = scores.player;
  td2.textContent = scores.computer;
  td3.textContent = result;

  if (isLastRound()) {
    tr.classList.add("table-danger");
  }

  tr.insertAdjacentElement("beforeend", th);
  tr.insertAdjacentElement("beforeend", td1);
  tr.insertAdjacentElement("beforeend", td2);
  tr.insertAdjacentElement("beforeend", td3);
  table.insertAdjacentElement("beforeend", tr);
}

function updateScoreDisplay() {
  display.player.textContent = scores.player;
}

