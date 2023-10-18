// DOM
const btnrules = document.querySelector(".rules-btn")
const btnclose = document.querySelector(".close-btn")
const modalRules = document.querySelector(".modal")

// Show/Hide Rules
btnrules.addEventListener('click', ()=>{
  modalRules.classList.toggle("show-modal")
})
btnclose.addEventListener('click', ()=>{
  modalRules.classList.toggle("show-modal")
})


function getComputerChoice() {
  let gameOption = Math.floor(Math.random() * 3);
  let choice
  switch (gameOption) {
    case 0:
      return choice = "Rock";
      break;
    case 1:
      return choice = "Paper";
      break;
    case 2:
      return choice = "Scissors";
  }
}

function playerSelection() {
  let choice = prompt("Please choose rock, paper, or scissors").toLowerCase();
  formattedChoice = capitalize(choice)
  return formattedChoice;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function playRound(playerChoice,computerChoice) {
  switch (playerChoice + computerChoice) {
    case "RockPaper":
    case "ScissorsRock":
    case "PaperScissors":
      return "lost";
      break;
    case "ScissorsPaper":
    case "PaperRock":
    case "RockScissors":
      return "won";
      break;
    default:
      return "tie";
  }
}

function game() {
  let i = 0
  let playerScore = 0
  let computerScore = 0
  while (i < 5) {
    let player = playerSelection();
    let computer = getComputerChoice();
    let result = playRound(player,computer);

    if (result == "won"){
      console.log(`You Won! ${player} beats ${computer}.`);
      playerScore++;
    }
    else if (result == "lost"){
      console.log(`You Lost! ${computer} beats ${player}.`);
      computerScore++;
    }
    else {
      console.log(`It's a tie! ${player} is the same as ${computer}.`);
    }

    i++;
  }

  if (playerScore > computerScore) {
    console.log(`You Won! The final score is ${playerScore} - ${computerScore}.`);
  }
  else if (playerScore < computerScore) {
    console.log(`You Lost! The final score is ${playerScore} - ${computerScore}.`);
  }
  else {
    console.log(`You Tied! The final score is ${playerScore} - ${computerScore}.`);
  }
}

// game()