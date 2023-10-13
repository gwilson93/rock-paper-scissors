function getComputerChoice() {
  let gameOption = Math.floor((Math.random) * 3);
  switch (gameOption) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors"
  }
  return choice
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
      return "won";
      break;
    case "scissorspaper":
    case "paperrock":
    case "rockscissors":
      return "lost";
      break;
    default:
      return "tie"
  }
}

