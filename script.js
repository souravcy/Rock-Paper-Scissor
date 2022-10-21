function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choice;
}

window.addEventListener("click", playerSelection);

function playerSelection(e) {
  if (`${e.target.className}` == "rock btn") {
    updateScore(playRound(0, getComputerChoice()));
  } else if (`${e.target.className}` == "paper btn") {
    updateScore(playRound(1, getComputerChoice()));
  } else if (`${e.target.className}` == "scissor btn")
    updateScore(playRound(2, getComputerChoice()));
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) return 0;
  else if (
    playerSelection - computerSelection == 1 ||
    (playerSelection == 0 && computerSelection == 2)
  )
    return 1;
  else if (
    computerSelection - playerSelection == 1 ||
    (computerSelection == 0 && playerSelection == 2)
  )
    return 2;
}

function updateScore(winner) {
  if (winner == 0) console.log(`Its a tie.`);
  else if (winner == 1) {
    let container = document.querySelector(".playerscore");
    container.textContent++;
    haveWinner(container.textContent, winner);
  } else if (winner == 2) {
    let container = document.querySelector(".computerscore");
    container.textContent++;
    haveWinner(container.textContent);
  }
}

function haveWinner(num, player) {
  if (num == 5) {
    let text = document.querySelector(".winner");
    if (player == 1) text.textContent = "!!!Player wins!!!";
    else text.textContent = "!!!Computer wins!!!";
    setTimeout(() => {
      document.location.reload();
    }, 2000);
  }
}
