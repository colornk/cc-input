function getComputerChoice() {
    let cChoice = Math.floor(Math.random() * 3) + 1;
    if (cChoice === 1) {
        return compChoice = 'Rock';
    } else if (cChoice === 2) {
        return compChoice = 'Paper';
    } else {
        return compChoice = 'Scissors';
    }
};

let playerChoice;
let compChoice;

function playerStart() {
    playerChoice = prompt('Enter Rock, Paper or Scissors!');
    return playerChoice;
}

function compStart() {
    getComputerChoice();
}

function gameStart() {
    getComputerChoice();
    playerStart();
    rockPaperScissors(compChoice, playerChoice);
    console.log('comp::', compChoice);
    console.log('player::', playerChoice)
}

function rockPaperScissors(compChoice, playerChoice = 'Rock') {
    if (compChoice === playerChoice) {
        console.log('TIE!')
    } else if (compChoice === 'Rock' && playerChoice === 'Scissors') {
        console.log('Computer Wins!')
    } else if (compChoice === 'Scissors' && playerChoice === 'Paper') {
        console.log('Computer Wins!')
    } else if (compChoice === 'Paper' && playerChoice === 'Scissors') {
        console.log('Player Wins!')
    } else if (compChoice === 'Rock' && playerChoice === 'Paper') {
        console.log('Player Wins!')
    } else if (compChoice === 'Scissors' && playerChoice === 'Rock') {
        console.log('Player Wins!')
    } else if (compChoice === 'Paper' && playerChoice === 'Rock') {
        console.log('Computer Wins!')
    }
}

gameStart();