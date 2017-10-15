var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorD");
var messageDisplay = document.querySelector("#message");
var h1 = document.getElementsByTagName("h1")[0];
var resetButton = document.getElementById("reset");
var modeButtons = document.getElementsByClassName("mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	
	ress();	
}


function ress(){
	//Generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random colors from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "#990000";
	resetButton.textContent = "New colors";


}
function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		// //add initial colors to squares
		// squares[i].style.backgroundColor = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click",function(){
		//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
		//Compare color to picked color
			if (pickedColor === clickedColor) {
				messageDisplay.textContent = "Correct!!!";
				resetButton.textContent = "Play again";
				changeColors(pickedColor);
				h1.style.backgroundColor = clickedColor;
			}	
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}
function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			
			this.textContent === "Easy"	? numberOfSquares = 3: numberOfSquares = 6; 
			// if(this.textContent === "Easy"){
			// 	numberOfSquares = 3;
			// }
			// else{
			// 	numberOfSquares = 6;
			// }
			ress();
		//figure out how many squares to show 
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes	
		});
	}	
}

// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numberOfSquares = 3;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.backgroundColor = "#990000";
// 	messageDisplay.textContent = "";
// 	resetButton.textContent = "New colors";
// });

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberOfSquares = 6;
// 	colors = generateRandomColors(numberOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
		
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
		 
// 	}
// 	h1.style.backgroundColor = "#990000";
// 	messageDisplay.textContent = "";
// 	resetButton.textContent = "New colors";
// });

resetButton.addEventListener("click",function(){
	ress();

	// //Generate all new colors
	// 		colors = generateRandomColors(numberOfSquares);
	// //pick a new random colors from array
	// 		pickeedColor = pickColor();
	// //change colorDisplay to match picked color
	// 		colorDisplay.textContent = pickedColor;
	// //change colors of squares
	// 		for (var i = 0; i < squares.length; i++) {
	// 			squares[i].style.backgroundColor = colors [i];
	// 		}
	// 		messageDisplay.textContent = "";
	// 		h1.style.backgroundColor = "#990000";
	// 		resetButton.textContent = "New colors";
});




function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//Changes each color to a match given color
		squares[i].style.backgroundColor = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		//get a random color and push into arr
		arr.push(randomColor());
	}
	//return an array
	return arr;
}

function randomColor(){
	//Pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	//Pick a green from 0-255
	var g = Math.floor(Math.random() * 256);

	//Pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}