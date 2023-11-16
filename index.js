const rock = "assets/rock-hand.png"
const paper = "assets/paper-hand.png"
const scissors ="assets/scissors-hand.png"

var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");

var box1 = document.getElementById("box1")

var player;
var computer;
var compScore = 0
var playerScore = 0

var score = document.getElementById("score")
console.log(rockButton)
rockButton.addEventListener("click", () =>{
    console.log("player", player);
    box1.innerHTML = `<img src="${rock}" class="pictures" >`
    player="rock"
    comp()
    
})

paperButton.addEventListener("click", () => {
    box1.innerHTML = `<img src="${paper}" class="pictures">`
    player ="paper"
    comp()
})
scissorsButton.addEventListener("click",() =>{
    box1.innerHTML = `<img src="${scissors}" class="pictures">`
    player = "scissors"
    comp()
})

var box2 = document.getElementById("box2")

function comp(){
    let number = Math.ceil((Math.random()*3)) 
    if(number == 1){
        box2.innerHTML = `<img src="${paper}" class="pictures" >`
        computer = "paper"
        scores()
    }
    else if(number == 2){
        box2.innerHTML = `<img src="${scissors}" class="pictures">`
        computer = "scissors"
        scores()
    }
    else{
        box2.innerHTML = `<img src="${rock}"  class="pictures">`
        computer = "rock"
        scores()
    }
}

function scores(){
    
    if(player == "rock" && computer == "paper"){
        playerScore++
    }
    else if(player == "paper" && computer == "scissors"){
        playerScore++
    }
    else if(player == "scissors" && computer == "rock"){
        playerScore++
    }
    else if(player == "rock" && computer == "rock"){
        jump;
    }
    else if(player == "paper" && computer == "paper"){
        jump;
    }
    else if(player == "scissors" && computer == "ecissors"){
        jump;
    }
    else{
        compScore++
    }
    display()

}

var message =  document.getElementById("winMessage")
var won = document.getElementById("won")
var playAgain = document.getElementById("playAgain")
function display(){
    score.innerHTML=`${compScore}-${playerScore}`
    if (playerScore >= 5 || compScore >= 5){
        won.style.visibility='visible'
        rockButton.style.visibility='hidden'
        paperButton.style.visibility='hidden'
        scissorsButton.style.visibility='hidden'
        winMessage.textContent = "Computer Won";
        winMessage.style.color = "white"
    }
    else{
        winMessage.textContent = "You Won";
        winMessage.style.color = "white";
    }
}
playAgain.addEventListener("click",() => {
    location.reload()
})