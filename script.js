let player_score = 0;
let cpu_score = 0;
let result = "";

game();

function game(){
    let playerChoice = prompt("Rock Paper or Scissors");
    let computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    if(player_score == 3){
        result = "You Win!"
        return;
    }
    else if(cpu_score == 3){
        result = "Computer Wins!"
        return;
    }
    else{
        game();
    }
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == "Rock"){
        if(computerChoice == "Paper"){
            cpu_score+=1;
            console.log("Computer Wins This Round!");
        }
        else if(computerChoice == "Scissors"){
            player_score+=1;
            console.log("You Wins This Round!");
        }
        else{
            console.log("Tie!");
        }
    }
    else if(playerChoice == "Paper"){
        if(computerChoice == "Scissors"){
            cpu_score+=1;
            console.log("Computer Wins This Round!");
        }
        else if(computerChoice == "Rock"){
            player_score+=1;
            console.log("You Wins This Round!");
        }
        else{
            console.log("Tie!");
        }
    }
    else{
        if(computerChoice == "Rock"){
            cpu_score+=1;
            console.log("Computer Wins This Round!");
        }
        else if(computerChoice == "Paper"){
            player_score+=1;
            console.log("You Wins This Round!");
        }
        else{
            console.log("Tie!");
        }
    }
}

function getComputerChoice(){
    const rand = Math.floor(Math.random() * 3) + 1;
    if(rand == 1){
        return "Rock";
    }
    else if(rand == 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

console.log(result);