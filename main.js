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


function roundPlay() {
  let computerSelection = computerPlay();
  let playerSelection = userPlay();
  if (computerSelection == "rock" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "paper") {
    return "Tie!";
  }
    else if (computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper") {
      return "Computer Wins!";
    }
    else {
      return "User Wins!";
    }
}


