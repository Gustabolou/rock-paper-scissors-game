const choices = ['rock 🪨', 'paper 📄', 'scissors ✂️'];
const playerDisplay = document.querySelector('#playerDisplay');
const computerDisplay = document.querySelector('#computerDisplay');
const resultDisplay = document.querySelector('#resultDisplay');
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  playerDisplay.textContent = `Player chose: ${playerChoice}`;
  computerDisplay.textContent = `Computer chose: ${computerChoice}`;

    resultDisplay.classList.remove('win', 'lose');

    const result = getResults(playerChoice, computerChoice);
    resultDisplay.textContent = result; 

    setTimeout(() => {
        if (result.includes("Player won!")) {
        resultDisplay.classList.add('win');
        } else if (result.includes("Computer won!")) {
        resultDisplay.classList.add('lose');
        }
        console.log("Classes atuais:", resultDisplay.classList.value);
    }, 10);
}

function hasPlayerWon(playerChoice, computerChoice) {
  return (
    (playerChoice === "rock 🪨" && computerChoice === "scissors ✂️") ||
    (playerChoice === "scissors ✂️" && computerChoice === "paper 📄") ||
    (playerChoice === "paper 📄" && computerChoice === "rock 🪨")
  );
}

function getResults(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return `It's a tie! Both chose ${playerChoice}`;
  } 
  if (hasPlayerWon(playerChoice, computerChoice)) {
    playerScore++;
    return `Player won! Score: Player ${playerScore} - Computer ${computerScore}`;
  } else {
    computerScore++;
    return `Computer won! Score: Player ${playerScore} - Computer ${computerScore}`;
  }
}
