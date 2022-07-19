/*
Rock Paper Scissors
we need 3 button for client
if client click one of them 

the game was start 
one function random click to one of them 

the counter will count the score


*/

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3 + 1); //define 1-2-3
  let result;
  if (choice == 1) {
    result = "Rock";
  } else if (choice == 2) {
    result = "Paper";
  } else {
    result = "Scissors";
  }
  return result;
};

const getPlayerChoice = () => {
  let choice = prompt("get your choice: (Rock ,Paper , Scissors)");
  return choice;
};

const singleRoundGame = () => {
  let pcSelect = getComputerChoice().toLowerCase();

  let clientSelect = getPlayerChoice().toLowerCase();

  console.log(pcSelect);



  if (clientSelect == "rock" && pcSelect == "rock") {
    console.log("Draw :(");
  } else if (clientSelect == "rock" && pcSelect == "paper") {
    console.log("You Lose");
    pcScore++;
  } else if (clientSelect == "rock" && pcSelect == "scissors") {
    console.log("You Win ");
    playerScore++;
  } else if (clientSelect == "paper" && pcSelect == "rock") {
    console.log("You Win ");
    playerScore++;
  } else if (clientSelect == "paper" && pcSelect == "paper") {
    console.log("Draw :(");
  } else if (clientSelect == "paper" && pcSelect == "scissors") {
    console.log("You Lose");
    pcScore++;
  } else if (clientSelect == "scissors" && pcSelect == "rock") {
    console.log("You Lose");
    pcScore++;
  } else if (clientSelect == "scissors" && pcSelect == "paper") {
    console.log("You Win ");
    playerScore++;
  } else if (clientSelect == "scissors" && pcSelect == "scissors") {
    console.log("Draw :(");
  }
};

const game = (round) => {
    
  for (let i = 0; i < round; i++) {
    singleRoundGame();
  }
};

