function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	return choice;
}
function getPlayerChoice() {
	let choice = prompt("Please enter your choice (Rocks/Paper/Scissor): ");
	choice = choice.toLowerCase();
	if (choice == "rocks") return 0;
	else if (choice == "paper") return 1;
	else if (choice == "scissor") return 2;
	else {
		console.log("Please enter correct choice.");
		getPlayerChoice();
	}
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
function showWinner(winner) {
	if (winner == 0) console.log(`Its a tie.`);
	else if (winner == 1) console.log(`The winner is Player.`);
	else if (winner == 2) console.log(`The winner is Computer.`);
}
function game() {
	for (let i = 0; i < 2; i++) {
		let winner = playRound(getPlayerChoice(), getComputerChoice());
		showWinner(winner);
	}
}
game();
