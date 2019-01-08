let playerWins = 0;
let computerWins = 0;

// Function Returns Computer's Choice
function computerPlay() {
  var random = Math.floor((Math.random() * 3) + 1);
  if(random === 1) {
    return("rock");
  } else if(random === 2) {
    return("paper");
  } else {
    return("scissors");
  }
}

// Function Returns User Choice
function userPlay() {
  let userChoiceCase = prompt("Enter Rock, Paper, or Scissors");
  let userChoice = userChoiceCase.toLowerCase();

  if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
    return userChoice;
  } else if (userChoice ===null || userChoice ==="") {
    alert ("You need to enter rock, paper, or scissors!")
    userPlay();
  } else {
    alert ("Enter rock, paper, or scissors");
    userPlay();
  }
}


function playRound() {
  let computerSelection = computerPlay();
  let playerSelection = userPlay();
  if (computerSelection == "rock" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "paper") {
    return "Tie!";
  }
    else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper") {
      computerWins++;
      return "Computer Wins!";
    }
    else {
      playerWins++;
      return "User Wins!";
    }
}

function playGame() {

  for (let i = 0; i < 5; i++) {
    playRound();
    console.log("Round End! You: " + playerWins + " Computer Wins: " + computerWins);
  }
  if (playerWins > computerWins) {
    return "You win the game, congratulations! You are very skilled!";
  }
  else {
    return "The computer wins the game, you bad.";
  }
}


