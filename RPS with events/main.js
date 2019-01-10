let userWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll(".btn");
const newGame = document.querySelector("#newgame");
const userScoreboard = document.querySelector("#player-score");
const computerScoreboard = document.querySelector("#computer-score");

// Sets scoreboard to update score based on wins
function updateScoreboard() {
  userScoreboard.textContent = userWins;
  computerScoreboard.textContent = computerWins;
}

updateScoreboard();

// Function resets scoreboard
function resetScore() {
  computerWins = 0;
  userWins = 0;
}

// Function Returns Computer's Choice
function computerPlay() {
  var random = Math.floor((Math.random() * 3) + 1);
  if(random === 1) {
    return("r");
  } else if(random === 2) {
    return("p");
  } else {
    return("s");
  }
}

// Function plays one round of RPS
function playRound (user, computer) {
  if (user == "r" && computer == "s" || user == "p" && computer == "r" || user == "s" && computer == "p") {
    alert("User win");
    userWins++;
  } else if (computer == "r" && user == "s" || computer == "p" && user == "r" || computer == "s" && user == "p") {
    alert("Computer win");
    computerWins++
  } else {
    alert("Round tie, try again")
  }
  updateScoreboard();
}

function playGame (user, computer) {
  playRound (user, computer);
  if (userWins == 5) {
    alert("You win the game! Congratulations, you're luckier than a computer!")
    resetScore();
    updateScoreboard();
  }
  else if (computerWins == 5) {
    alert("The computer wins the game!")
    resetScore();
    updateScoreboard();
  }
}

// Plays round of RPS on button click, taking button clicked as userChoice

buttons.forEach((button => {
  button.addEventListener('click', (e) => {
    let userChoice = button.id;
    let computerChoice = computerPlay();
    playGame(userChoice, computerChoice);
  });
}));

newGame.addEventListener('click', () => {
  resetScore();
  updateScoreboard();
  alert("Score has been reset");
});


