var numberOfSquares = 6;
var colors = []; // the random colors
var pickedColor; 
var squares = document.querySelectorAll(".square"); // each square 
var colorDisplay = document.querySelector("h1 span"); // the display
var messageDisplay = document.querySelector("#message"); // the display of the message
var h1 = document.querySelector("#heading"); // the display of the h1
var resetButton = document.querySelector("#reset"); // our button
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	// mode buttons event listeners (easy hard);
	setUpModeButtons();
	setUpSquares(); // squares listeners
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i< modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numberOfSquares = 3;
		} else {
			numberOfSquares = 6;
		}
		reset();
	});
	}
}

function setUpSquares() {
	// loop through each square
	for(var i = 0; i < squares.length; i++){
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			// compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				// call function changeColors and asign the clicked color
				changeColors(clickedColor);
				heading.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numberOfSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match the picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i =0; i < squares.length; i++){
		// if there is a color
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// RESETBUTTON
resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// add num random colors to array
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}
	// return that array
	return arr;
} 

function randomColor() {
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", " + g + ", "+ b + ")";
}
