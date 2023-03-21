function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


function playRound(playerSelection, computerSelection) {
    // convert playerSelection to lowercase
    playerSelection = playerSelection.toLowerCase();


    // check for a tie
    if (playerSelection === computerSelection) {
       return "It's a tie!";
  }

    // check for player win scenarios
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {

        return `Player Wins! ${playerSelection} beats ${computerSelection}`;
  }
    else if (computerSelection === 'rock' && playerSelection === "scissors" || 
        computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection === 'rock') {

       return `Computer Wins! ${computerSelection} beats ${playerSelection}`;
    }

    
}
    

    function game() {
        let playerScore = 0;
        let computerScore = 0;
        for (let i = 0; i < 5; i++) {
            const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);  
            
            if (result.startsWith("Player Win")) {
                playerScore++;
            } else if (result.startsWith("Computer Win")) {
                computerScore++;
            }

            console.log(`Round ${i + 1}:`);
            console.log(result);
            console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
        }

        if (playerScore > computerScore) {
            console.log("Congratulations!! You won the game");
        } else if (playerScore < computerScore) {
            console.log("Ooops you lost! Computer has won the game");
        } else {
            console.log("is a tie");
        }

    }

    game();