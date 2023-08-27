let cpu_score = 0;
let player_score = 0;
console.log(1);

game(cpu_score, player_score);

function getComputerChoice(){
    const rand = Math.floor(Math.random() * 3) + 1
    if(rand == 1){
        console.log("works");
        return "Rock";
    }
    else if(rand == 2){
        console.log("works");
        return "Paper";
    }
    else{
        console.log("works");
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){ 
    if(playerSelection == "Rock"){
        if(computerSelection == "Rock"){
            console.log("Tie!"); 
        }
        else if(computerSelection == "Paper"){
            console.log("You Lose!");
            cpu_score+=1; 
        }
        else{
            console.log("You Win!");
            player_score+=1; 
        }
    }
    if(playerSelection == "Paper"){
        if(computerSelection == "Paper"){
            console.log("Tie!");
        }
        else if(computerSelection == "Scissors"){
            console.log("You Lose!");
            cpu_score+=1;
        }
        else{
            console.log("You Win!");
            player_score+=1;
        }
    }
    if(playerSelection == "Scissors"){
        if(computerSelection == "Scissors"){
            console.log("Tie!");
        }
        else if(computerSelection == "Rock"){
            console.log("You Lose!");
            cpu_score+=1;
        }
        else{
            console.log("You Win!");
            player_score+=1;
        }
    }
}

function game(cpu_score, player_score){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt();
    playRound(computerSelection, playerSelection);
    if(cpu_score == 3){
        console.log("Computer Wins!");
        return;
    }
    if(player_score == 3){
        console.log("You Win!");
        return;
    }
    else{
        game(cpu_score, player_score);
    }
}