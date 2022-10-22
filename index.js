let options = ["rock", "paper", "scissors"];
let playerScore = 0
let computerScore = 0
let playerSelection = getPlayerChoice()

/* Making a Variable to chose a random item from Array for the "Computer" */
function getComputerChoice(){
    return options[Math.floor(Math.random()*options.length)];
} 

let computerSelection = getComputerChoice();

/* Selecting the rules of winning and adjusting the score */
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie"
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player"
    }
    else{
        return "Computer"
    }
}

/* Selecting the winner of 1 round*/

function playRound(playerSelection, computerSelection){
    if(checkWinner(playerSelection, computerSelection) == "Player"){
        playerScore++;
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`)
        console.log(`Your score: ${playerScore} `)
        return `Computer score: ${computerScore}`
    }
    else if(checkWinner(playerSelection, computerSelection) == "Computer"){
        computerScore++;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)
        console.log(`Your score: ${playerScore}`)
        return `Computer score: ${computerScore}`
    }
    else{
        console.log(`It's a tie!`)
        console.log(`Your score: ${playerScore}`)
        return `Computer score: ${computerScore}`
    }
}

/* Getting the Player input  */
function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors?")
        if(choice == null){
            continue
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

/* The final Algorithm of 5rounds */
function game(){
    for(let i = 0 ; i < 5 ; i++){
        playerSelection = getPlayerChoice()
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"); /* To seperate the rounds */
    }
    if(playerScore > computerScore){
        console.log("Game Over")
        console.log("You won the game!")
    }
    else if(playerScore< computerScore){
        console.log("Game Over")
        console.log("You lost the game!")
    }
    else{
        console.log("Game Over")
        console.log("It's a draw!")
    }
}

game();