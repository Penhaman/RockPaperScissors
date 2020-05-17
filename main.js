let playerMove = undefined;
let computerMove = undefined;
const verify = ["rock", "paper", "scissors"];
let result;
let resultPlayer = 0;
let resultCPU = 0;

//Função para gerar a jogada do computador
function computerPlay(){
    let move = ["rock", "paper", "scissors"];
    computerMove = move[Math.floor(Math.random() * move.length)];
    return computerMove;
}

function game(){





//Função para pedir jogada à pessoa
function playerSelection() {
    playerMove = prompt("Rock, Paper or scissors?");
    return playerMove.toLowerCase();
}

playerSelection();

console.log(playerMove);

if(playerMove == computerMove) {
    console.log("It's a tie!")
} if (playerMove == "rock" && computerMove=="paper") {
    console.log("Computer wins, paper");
    resultCPU++;
} if (playerMove =="rock" && computerMove=="scissors") {
    console.log("Rock breaks the scissors, player wins!");
    resultPlayer++;
} if (playerMove=="paper" && computerMove=="rock") {
    console.log("Paper rolls over rock, player wins!");
    resultPlayer++;
} if (playerMove =="paper" && computerMove=="scissors") {
    console.log("scissors cuts, cpu wins");
    resultCPU++;
} if (playerMove=="scissors" && computerMove=="rock"){
    console.log("Rock smashes the scissors, cpu wins");
    resultCPU++;
} if(playerMove =="scissors" && computerMove=="paper") {
    console.log("scissors slashes, player wins!");
    resultPlayer++;
} else if (playerMove != verify[0] && playerMove!=verify[1] && playerMove!=verify[2]) {
    console.log("no way");
}


}
for (let i = 0; i < 5; i++) {
    computerPlay();
    console.log(computerMove);
    game();
}
if(resultPlayer > resultCPU) {
    result= resultPlayer-resultCPU;
    console.log("Player: " + resultPlayer + " CPU: " + resultCPU);
    console.log("Player wins by " + result + "!");
} else {
    result = resultCPU - resultPlayer;
    console.log("Player: " + resultPlayer + " CPU: " + resultCPU);
    console.log("CPU wins by " + result +"!");
}


