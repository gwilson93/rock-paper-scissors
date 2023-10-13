function getComputerChoice() {
  let gameOption = Math.floor(Math.random() * 3);
  let choice
  switch (gameOption) {
    case 0:
      return choice = "rock";
      break;
    case 1:
      return choice = "paper";
      break;
    case 2:
      return choice = "scissors";
  }
}

function playerSelection() {
  let choice = prompt("Please choose rock, paper, or scissors").toLowerCase();
  return choice;
}

function playRound(playerChoice,computerChoice) {
  switch (playerChoice + computerChoice) {
    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      return "lost";
      break;
    case "scissorspaper":
    case "paperrock":
    case "rockscissors":
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

game()