var player1 = document.getElementById("p1");
var player2 = document.getElementById("p2");
var p1 = document.getElementById("player1");
var p2 = document.getElementById("player2");
var cont = 0;
var cont2 = 0;

var reset = document.getElementById("res");

var gameOver = false;
var winningScore = document.querySelector("#winningScore");
var winning = 5;
var numInput = document.querySelector("input");
player1.addEventListener("click",function(){
	if(!gameOver){
		cont++;
		if (cont === winning) {
			gameOver = true;
			p1.classList.add("gameover");
		}
		document.getElementById("player1").textContent = cont;	
	}
	


});

player2.addEventListener("click",function(){
	if (!gameOver) {
		cont2++;
		if (cont2 === winning) {
			gameOver = true;
			p2.classList.add("gameover");
		}
		document.getElementById("player2").textContent = cont2;	
	}
	


});


reset.addEventListener("click",function(){
	resets();
});

function resets(){
	gameOver = false;
	cont = 0;
	cont2 = 0;
	document.getElementById("player1").innerHTML = cont;	
	document.getElementById("player2").innerHTML = cont2;
	p1.classList.remove("gameover");
	p2.classList.remove("gameover");	
}

numInput.addEventListener("change",function(){
	winningScore.innerHTML = this.value;
	winning = Number(this.value);
	resets();
});