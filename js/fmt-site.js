function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
//Added get Score function to get the total score for the dice rolled 3/20/18 AMT
function getScore() {
	activeScore = 0;
	for (i=0; i<dice.length; i++){
		if(dice[i].innerHTML){
		activeScore += parseInt(dice[i].innerHTML);
		}
	}
	scoreBox.innerHTML = activeScore;	
}

function dieRoll() {
    max = getDiceVal("diceSides", 4)
	this.innerHTML = getRandomInt(1, max+1);
	getScore();
}


function rollem() {
    max = getDiceVal("diceSides", 4)
	for (i = 0; i<dice.length; i++){
    	dice[i].innerHTML = getRandomInt(1, max+1);
	}
	getScore();
}

function getDiceVal(textId, min=1, max=20) {
    var diceVal = parseInt(document.getElementById(textId).value);
    if (isNaN(diceVal) || diceVal < min) {
        diceVal = min
    } else if (diceVal > max) {
        diceVal = max
    }
    return diceVal
}

var activeScore = 0;
var scoreBox = document.getElementById('scoredisplay');
var dice = document.getElementById('purse').getElementsByClassName('box');
//for die in dice:
for (i = 0; i<dice.length; i++){
    dice[i].addEventListener("click", dieRoll);
}

var rolo = document.getElementById('the-button');
rolo.addEventListener("click", rollem);
