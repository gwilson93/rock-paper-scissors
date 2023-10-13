function getComputerChoice() {
  gameOption = Math.floor((Math.random) * 3);
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