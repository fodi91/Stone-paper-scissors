// EventListeners and display elements
const play = document.getElementById('playButton');
play.addEventListener('click', inputs);
const resetButton = document.getElementById('gameReset');
gameReset.addEventListener('click', reset);
const displayResult = document.getElementById('result');
const displayPoints = document.getElementById('points');
const displayRounds = document.getElementById('rounds');
const opponentInputOptions = ['Kő', 'Papír', 'Olló']
let userInput;
let opponentInput;
let points = 0;
let countOfRounds = 0;
function inputs() {
    
    // user input
    const stones = document.getElementById('stones');
    const paper = document.getElementById('paper');   
    const scissors = document.getElementById('scrissors');
    if (stones.checked) {
        userInput = stones.value;
    }
    if (paper.checked) {
        userInput = paper.value;
    }
    if (scissors.checked) {
        userInput = scissors.value;
    }
    // generate opponentInput
    opponentInput = opponentInputOptions[Math.floor(Math.random() * 3)];
    roundCounts();
    game();
    
}
// game logic
function game() {
    displayResult.style.display = 'block';
    if (userInput === undefined) {
        displayResult.innerHTML = 'Válassz ki egy értéket.'
		displayResult.style.background = "black";
	
    }
    else if (userInput === opponentInput) {
        
        displayResult.innerHTML = 'A te választásod ' + userInput + ' volt. Az ellenfeled választása ' + opponentInput + '. Az eredmény döntetlen. Nem kaptál pontot.';
        points += 0;
        displayResult.style.background = "black";
        
    }
    else if (userInput === 'Kő' && opponentInput === 'Papír') {
        displayResult.innerHTML = 'A te választásod ' + userInput + ' volt. Az ellenfeled választása ' + opponentInput + '. Vesztettél! 10 pontot levontunk tőled.';
        points -= 10;
        displayResult.style.background = "red";
        
    }
    else if (userInput === 'Kő' && opponentInput === 'Olló') {
        displayResult.innerHTML = 'A te választásod ' + userInput + ' volt. Az ellenfeled választása ' + opponentInput + '. Nyertél! 10 pontot kaptál.';
        points += 10;
        displayResult.style.background = "green";
        
    }
    else if (userInput === 'Papír' && opponentInput === 'Kő') {
        displayResult.innerHTML = 'A te választásod ' + userInput + ' volt. Az ellenfeled választása ' + opponentInput + '. Nyertél! 10 pontot kaptál.';
        points += 10;
        displayResult.style.background = "green";
    }
    else if (userInput === 'Papír' && opponentInput === 'Olló') {
        displayResult.innerHTML = 'A te választásod ' + userInput + ' volt. Az ellenfeled választása ' + opponentInput + '. Vesztettél! 10 pontot levontunk tőled.';
        points -= 10;
        displayResult.style.background = "red";
        
    }
    else if (userInput === 'Olló' && opponentInput === 'Kő') {
        displayResult.innerHTML = 'A te választásod ' + userInput + ' volt. Az ellenfeled választása ' + opponentInput + '. Vesztettél! 10 pontot levontunk tőled.';
        points -= 10;
        displayResult.style.background = "red";
           
    }
    else if (userInput === 'Olló' && opponentInput === 'Papír') {
        displayResult.innerHTML = 'A te választásod ' + userInput + ' volt. Az ellenfeled választása ' + opponentInput + '. Nyertél! 10 pontot kaptál.';
        points += 10;
        displayResult.style.background = "green";
        
           
    }
    stones.checked = false;
    paper.checked = false;
    scrissors.checked = false;
    userInput = undefined;
    displayPoints.innerHTML = 'Pontszámod: ' + points;

}
function roundCounts() {
    if (userInput === undefined){
        countOfRounds;
        displayRounds.innerHTML = 'Lejátszott körök száma: ' +  countOfRounds;
    } else {
    countOfRounds++;
    displayRounds.innerHTML = 'Lejátszott körök száma: ' +  countOfRounds;
    }
}
function reset() {
    countOfRounds = 0;
    displayRounds.innerHTML = 'Lejátszott körök száma: ' +  countOfRounds;
    points = 0;
    displayPoints.innerHTML = 'Pontszámod: ' + points;
    displayResult.style.display = 'none';
    userInput = undefined;
    
}

