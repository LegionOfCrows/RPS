function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    switch(choice){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:   
            return "scissors"
        }
    }
function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase()
    if (player === computerSelection) {
        console.log("TIE")
    } else if (player === "rock"){
        if (computerSelection === "paper"){
            console.log("YOU LOSE")
        } else {
            console.log("YOU WIN")
        }
    } else if (player === "paper"){
        if (computerSelection === "scissors"){
            console.log("YOU LOSE")
        } else {
            console.log("YOU WIN")
        }   
    } else if (player === "scissors"){
        if (computerSelection === "rock"){
            console.log("YOU LOSE")
        } else {
            console.log("YOU WIN")
        }   
    }}

const playerSelection = "rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))