function computerPlay() {
    let i = Math.floor((Math.random() * 3) + 1);
    let a = ""
    if (i === 1){a = "rock"}
    else if (i === 2){a = "paper"}
    else {a = "scissor"}
    return a
}

function playRound(playerSelection,computerSelection) {
    let a = ""
    if (playerSelection === "rock" && computerSelection === "rock"){a = "Tie"}
    else if (playerSelection === "paper" && computerSelection === "rock"){a = "Player wins"}
    else if (playerSelection === "scissor" && computerSelection === "rock"){a = "Computer wins"}
    else if (playerSelection === "rock" && computerSelection === "paper"){a = "Computer wins"}
    else if (playerSelection === "paper" && computerSelection === "paper"){a = "Tie"}
    else if (playerSelection === "scissor" && computerSelection === "paper"){a = "Player wins"}
    else if (playerSelection === "rock" && computerSelection === "scissor"){a = "Player wins"}
    else if (playerSelection === "paper" && computerSelection === "scissor"){a = "Computer wins"}
    else if (playerSelection === "scissor" && computerSelection === "scissor"){a = "Tie"}
    return a
}

function game(btnSelected) {
    let c = 0;
    let p = 0;
//    debugger;
    for (let i = 0; i < 5; i++) {
//        let input = prompt("Rock, Paper or Scissors?");
//        let a = input.toLowerCase();
        let a = btnSelected;
        let b = computerPlay();
        if (playRound(a,b) == "Computer wins"){c++}
        else if (playRound(a,b) == "Tie"){c++;p++}
        else if (playRound(a,b) == "Player wins"){p++}
        else {}
    };
    return c+" - "+p;
}

const container = document.querySelector('#container');

const btnRock = document.querySelector('#btnRock');
btnRock.addEventListener('click', () => {
    container.innerHTML = 'Martin ' + game('rock') + ' Computer'
//    console.log(game('rock'));
});

const btnPaper = document.querySelector('#btnPaper');
btnPaper.addEventListener('click', () => {
    container.innerHTML = 'Martin ' + game('paper') + ' Computer'
});

const btnScissor = document.querySelector('#btnScissor');
btnScissor.addEventListener('click', () => {
    container.innerHTML = 'Martin ' + game('scissor') + ' Computer'
});