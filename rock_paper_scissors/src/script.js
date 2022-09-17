"use strict"

// click on button for entering playerSelection
// display result after each round
// display running score and announce winner once any player got 5 points

let playerScore = 0, computerScore=0, winner;
let playerSelection, computerSelection;
///////////////////////////////////////////
let buttons = document.body.querySelector(".buttons");
buttons.onclick = function(event){
  let option = event.target.closest("a");
  switch(option.className){
    case "rock":
        playerSelection = 0;
        break;
    case "paper":
        playerSelection = 1;
        break;
    case "scissors":
        playerSelection= 2;
        break;
  }
  alert(playerSelection);
  document.body.querySelector(".result").innerHTML = playGame(playerSelection);
  alert(playerSelection);
  document.body.querySelector(".score").innerHTML = getPlayerScore();
}

//////////////////////////////////////////////

function playGame(playerSelection){
//  if (playerScore<5 && computerScore<5){
    return printResultPerRound();
  //  printFinalWinner();
//  }
}

function getPlayerScore(){
  return playerScore;
}
/////////////////////////////////////////////

function printResultPerRound(playerSelection){
  computerSelection = getChoice();
  playerSelection = getChoice(playerSelection);
  return `You: ${playerSelection}\nComputer: ${computerSelection}\n${playRound(playerSelection, computerSelection)}`;
}

function getChoice(n=Math.floor(Math.random() *(2-0+1))){
  // return Rock / Paper / Scissors
  let output = ["Rock", "Paper", "Scissors"];
  return output[n];
}

function playRound(playerSelection, computerSelection){

  /*
  Scenarios:
       - Rock beat Scissors
       - Paper beats Rock
       - Scissors beats Paper
       - Draw
  Desired output:
        - playerSelection [win/lose]! [] beats []
  */
  if ( (playerSelection == "Rock" && computerSelection == "Scissors")
  || (playerSelection == "Paper" &&  computerSelection == "Rock")
  || (playerSelection == "Scissors" && computerSelection == "Paper") )
  {
    increasePlayerScore();
    return `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`;
  }

  else if (playerSelection == computerSelection){
      return `Draw! You choose ${playerSelection.toLowerCase()} and computer choose ${computerSelection.toLowerCase()}`;
  }

  else{
    increaseComputerScore();
    return `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
  }

}

function increasePlayerScore(){
    return ++playerScore;
}

function increaseComputerScore(){
  return ++computerScore;
}

function printFinalWinner(){
  if(playerScore > computerScore)
      winner = "You";
  else if (computerScore>playerScore)
      winner = "Computer"
  else
      return `Draw! Your score is ${playerScore} and computer score is ${computerScore}. Nobody wins and ${5-computerScore-playerScore} rounds draw.`;
  return `${winner} wins. Your score is ${playerScore} and computer score is ${computerScore}. ${5-computerScore-playerScore} rounds draw.`;
}
