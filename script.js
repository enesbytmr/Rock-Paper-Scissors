/*
Rock Paper Scissors
we need 3 button for client
if client click one of them 

the game was start 
one function random click to one of them 

the counter will count the score


*/
let playerScoreCount = 0;
let computerScoreCount =0;
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

const selectionButtons = document.querySelectorAll("[data-selection")
const playerScore = document.querySelector(".playerScore")
const pcScore = document.querySelector(".pcScore")
const resultText = document.querySelector(".resultText")
const playRound = () =>{
  let pcSelect = getComputerChoice().toLowerCase()
  let playerSelection = makeSelection(selection);
  console.log(pcSelect)
  console.log(playerSelection)

}
selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    makeSelection(selectionName)
  })
})

function makeSelection(selection){
  let pcSelect = getComputerChoice().toLowerCase()
  

if (selection == "rock" && pcSelect == "rock") {
  resultText.innerText = "Draw :("
} else if (selection == "rock" && pcSelect == "paper") {
  resultText.innerText = "You Lose"
  ++computerScoreCount
  pcScore.innerHTML = playerScoreCount;
} else if (selection == "rock" && pcSelect == "scissors") {
  resultText.innerText = "You Win"
  ++playerScoreCount;
  playerScore.innerHTML=playerScoreCount
} else if (selection == "paper" && pcSelect == "rock") {
  resultText.innerText = "You Win"
  ++playerScoreCount
  playerScore.innerHTML=playerScoreCount
} else if (selection == "paper" && pcSelect == "paper") {
  resultText.innerText = "Draw :("
} else if (selection == "paper" && pcSelect == "scissors") {
  resultText.innerText = "You Lose"
  ++computerScoreCount;
  pcScore.innerHTML = computerScoreCount;
} else if (selection == "scissors" && pcSelect == "rock") {
  resultText.innerText = "You Lose"
  ++computerScoreCount;
  pcScore.innerHTML = computerScoreCount;
} else if (selection == "scissors" && pcSelect == "paper") {
  resultText.innerText = "You Win"
  ++playerScoreCount
  playerScore.innerHTML=playerScoreCount
} else if (selection == "scissors" && pcSelect == "scissors") {
  resultText.innerText = "Draw :("
}

if(playerScoreCount == 5 && computerScoreCount < 5){
  
  alert('You Win')
  playerScoreCount =0
  computerScoreCount= 0
  playerScore.innerHTML=playerScoreCount
  pcScore.innerHTML = computerScoreCount;
}else if(computerScoreCount == 5 && playerScoreCount< 5 ){
  
  alert('You Lose')
  playerScoreCount =0
  computerScoreCount= 0
  pcScore.innerHTML = computerScoreCount;
  playerScore.innerHTML=playerScoreCount
}
};


  
  

