// Variables for scores
let userScore = 0;
let computerScore = 0;

// Get elements
const userImage = document.getElementById('user-image');
const computerImage = document.getElementById('computer-image');
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');
const resultText = document.getElementById('result').querySelector('p');

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to decide the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

// Function to play the game
function playGame(userChoice) {
    const computerChoice = getComputerChoice();

 

    // Determine winner
    const winner = determineWinner(userChoice, computerChoice);

    // Update result text and scores
    if (winner === 'user') {
        resultText.textContent = 'You win this round!';
        userScore++;
    } else if (winner === 'computer') {
        resultText.textContent = 'Computer wins this round!';
        computerScore++;
    } else {
        resultText.textContent = "It's a tie!";
    }

    // Update scoreboard
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
}

// Function to reset the game
function resetGame() {
    userScore = 0;
    computerScore = 0;
    userImage.src = 'background.png';
    computerImage.src = 'ackground.png';
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
    resultText.textContent = 'Choose Rock, Paper, or Scissors to begin!';
}
