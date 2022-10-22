rockimage = "images/rock.svg";
paperimage = "images/paper.svg";
scissorimage = "images/scissor.svg";

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choice;
}

function updateImage(playerChoice, computerChoice) {
  let containerPlayer = document.querySelector("#playerimage");
  let containerComputer = document.querySelector("#computerimage");
  if (playerChoice == 0) containerPlayer.setAttribute("src", rockimage);
  else if (playerChoice == 1) containerPlayer.setAttribute("src", paperimage);
  else if (playerChoice == 2) containerPlayer.setAttribute("src", scissorimage);
  if (computerChoice == 0) containerComputer.setAttribute("src", rockimage);
  else if (computerChoice == 1)
    containerComputer.setAttribute("src", paperimage);
  else if (computerChoice == 2)
    containerComputer.setAttribute("src", scissorimage);
}

function playerSelection(e) {
  if (`${e.target.className}` == "choiceimage rock") {
    let playerChoice = 0;
    let computerChoice = getComputerChoice();
    updateImage(playerChoice, computerChoice);
    updateScore(playRound(playerChoice, computerChoice));
  } else if (`${e.target.className}` == "choiceimage paper") {
    let playerChoice = 1;
    let computerChoice = getComputerChoice();
    updateImage(playerChoice, computerChoice);
    updateScore(playRound(playerChoice, computerChoice));
  } else if (`${e.target.className}` == "choiceimage scissor") {
    let playerChoice = 2;
    let computerChoice = getComputerChoice();
    updateImage(playerChoice, computerChoice);
    updateScore(playRound(playerChoice, computerChoice));
  }
}

function playRound(playerSelection, computerSelection) {
  let containerSign=document.querySelector(".sign");
  let containerPlayer = document.querySelector("#playerimage");
  let containerComputer = document.querySelector("#computerimage");
  let text = document.querySelector(".select");
  if (playerSelection == computerSelection) {
    containerSign.textContent="=";
    containerPlayer.setAttribute('style', 'background:  rgb(239, 201, 14);');
    containerComputer.setAttribute('style', 'background:  rgb(239, 201, 14);');
    text.textContent = "Round : Tied";
    return 0;
  } else if (
    playerSelection - computerSelection == 1 ||
    (playerSelection == 0 && computerSelection == 2)
  ) {
    containerSign.textContent=">";
    containerPlayer.setAttribute('style', 'background: rgb(30,206,85);');
    containerComputer.setAttribute('style', 'background: rgb(236,76,76);');
    text.textContent = "Round won by : Player";
    return 1;
  } else if (
    computerSelection - playerSelection == 1 ||
    (computerSelection == 0 && playerSelection == 2)
  ) {
    containerSign.textContent="<";
    containerPlayer.setAttribute('style', 'background: rgb(236,76,76);');
    containerComputer.setAttribute('style', 'background: rgb(30,206,85);');
    text.textContent = "Round won by : Computer";
    return 2;
  }
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
    let text = document.querySelector(".select");
    if (player == 1) text.textContent = "!!!Player wins!!!";
    else text.textContent = "!!!Computer wins!!!";
    window.removeEventListener("click",playerSelection);
    setTimeout(() => {
      document.location.reload();
    }, 2000);
  }
}

window.addEventListener("click", playerSelection);
