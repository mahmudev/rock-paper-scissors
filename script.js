let score = localStorage.getItem("score") || 0;
let computerScore = localStorage.getItem("computerScore") || 0;
document.getElementById("score").textContent = score;
document.getElementById("computerScore").textContent = computerScore;

function playGame(playerSelection) {
  const options = ["rock", "paper", "scissors"];
  const computerSelection = options[Math.floor(Math.random() * options.length)];
  let result = "";
  if (playerSelection === computerSelection) {
    result = "Tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    result = "You win!";
    score++;
  } else {
    result = "Computer wins!";
    computerScore++;
  }
  document.getElementById(
    "result"
  ).innerHTML = `You chose <span class="results">${playerSelection}</span>, Computer chose <span class="results">${computerSelection}</span>. <span>${result}</span>`;
  document.getElementById("score").textContent = score;
  document.getElementById("computerScore").textContent = computerScore;
  localStorage.setItem("score", score);
  localStorage.setItem("computerScore", computerScore);
}
