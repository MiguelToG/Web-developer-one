var h1 = document.querySelector("h1");

h1.style.color = "pink";
var body = document.querySelector("body");

isblue = false;
setInterval(function(){

if (!isblue) {
		body.style.background = "Blue";
	}
	else{
		body.style.background = "white";
	}
isblue = !isblue;

}, 1000);
	

