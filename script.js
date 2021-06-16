function computerPlay() {
    let ops = ["rock", "paper", "scissors"];
    return ops[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
        return "You both tied with rock!";
    }
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock!";
    }
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors!";
    }
    if(playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
        return "You both tied with paper!";
    }
    if(playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        return "You Win! paper beats rock!";
    }
    if(playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        return "You lose! scissors beats paper!";
    }
    if(playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
        return "You both tied with scissors!";
    }
    if(playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!";
    }
    if(playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        return "You win! scissors beats paper!";
    }
}

function game() {
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0; i < 5; i++) {
        let ps = window.prompt("Enter rock, paper, or scissors:");
        let res = playRound(ps.toLowerCase(), computerPlay());
        if(res.toLowerCase().includes("win")) {
            playerScore++;
        } else if(res.toLowerCase().includes("lose")) {
            compScore++;
        }
        console.log(res + " Score: Player - " + playerScore + ", Computer - " + compScore);
    }
    console.log("Final Score: Player - " + playerScore + ", Computer - " + compScore);
}

game();