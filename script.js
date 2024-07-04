let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randind = Math.floor(Math.random()*3);
    let compChoice = options[randind];
    return compChoice;
};

const drawGame = () => {
    console.log("Game Draw");
    let msg = document.getElementById("msg");
    msg.innerText = "Game Draw. Try Again!"
    msg.style.backgroundColor = "black";
};
const showWinner = (userWin,userChoice,compChoice) => {
    let msg = document.getElementById("msg");
    if(userWin){
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose!");
        msg.innerText = `You Lose! ${compChoice.toUpperCase()} beats Your ${userChoice.toUpperCase()}`;
        msg.style.backgroundColor = "red";
    }
};

const updateScore = (userWin) => {
    userWin? userScore++:compScore++;
};
const playGame = (userChoice) => {
    console.log("User-Choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("Comp-Choice =", compChoice);
    if(compChoice === userChoice){
        drawGame();
    }else{
        let userWin = true;
        if(compChoice === "rock"){
            if(userChoice === "scissors"){
                userWin = false;
            }
        }else if(compChoice === "paper"){
            if(userChoice === "rock"){
                userWin = false;
            }
        }else{
            if(userChoice === "paper"){
                userWin = false;
            }
        }
        showWinner(userWin,userChoice,compChoice);
        updateScore(userWin);
    }

    let uScore = document.getElementById("user-score");
    uScore.innerText = `${userScore}`;
    let cScore = document.getElementById("computer-score");
    cScore.innerText = `${compScore}`;

};

choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});