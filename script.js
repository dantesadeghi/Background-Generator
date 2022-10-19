var cssBackground = document.querySelector("h3");
var colorOne = document.getElementsByTagName("input")[0];
var colorTwo = document.getElementsByTagName("input")[1];
var body = document.getElementById("gradient");
var randomButton = document.querySelector("button");

function setGradient() {
	changeBackgroundStyle();
	setCurrentCssBackgroundText();
}

function randomizeColors() {
	const randomColorOne = generateRandomHexColor();
	const randomColorTwo = generateRandomHexColor();

	// Changing the input element values as well
	colorOne.value = randomColorOne;
	colorTwo.value = randomColorTwo;

	changeBackgroundStyle();
	setCurrentCssBackgroundText();
}

function changeBackgroundStyle() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ colorOne.value 
		+ ", " 
		+ colorTwo.value
		+ ")";
}

function generateRandomHexColor() { // Generating random hex-value colors
	var x = Math.round(0xffffff * Math.random()).toString(16);
	var y = (6 - x.length);
	var z = "000000";
	var z1 = z.substring(0, y);
	var randomColor = '#' + z1 + x;
	return randomColor;
}

function setCurrentCssBackgroundText(){
	cssBackground.textContent = body.style.background;
}

colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);

// Random button will randomize the colorOne and colorTwo
randomButton.addEventListener("click", randomizeColors);