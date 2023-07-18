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
        function playRound(getComputerChoice){
            let computerSelection = getComputerChoice()
            let player = prompt("CHOOSE","rock").toLowerCase()
            if (player === computerSelection) {
                console.log("TIE")
            } else if (player === "rock"){
                if (computerSelection === "paper"){
                    console.log("YOU LOSE")
                    return "LOSE"
                } else {
                    console.log("YOU WIN")
                    return "WIN"
                }
            } else if (player === "paper"){
                if (computerSelection === "scissors"){
                    console.log("YOU LOSE")
                    return "LOSE"
                } else {
                    console.log("YOU WIN")
                    return "WIN"
                }   
            } else if (player === "scissors"){
                if (computerSelection === "rock"){
                    console.log("YOU LOSE")
                    return "LOSE"
                } else {
                    console.log("YOU WIN")
            return "WIN"
        }   
    }}
    function game(){
        let playerScore = 0
        let computerScore = 0
        while (playerScore  != 5 & computerScore != 5) {
            let result =''
            result = playRound(getComputerChoice)
            if( result === "WIN"){
                playerScore = playerScore + 1
            } else if(result === "LOSE"){
                computerScore = computerScore + 1
            } else{
                console.log("TIE")
            }
        }
        if (playerScore > computerScore){
            console.log("YOU WIN THE GAME")
        } else {
            console.log("YOU LOSE THE GAME")
        }
    }
    
    console.log(game())