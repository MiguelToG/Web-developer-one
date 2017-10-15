var button = document.querySelector("button");

var body = document.querySelector("body");
var bool = false;

// button.addEventListener("click",function(){

// 	if(!bool){
// 		body.style.background = "blue";	
// 	}
// 	else{
// 		body.style.background = "white";
// 	}
// 	bool = !bool;
// });

button.addEventListener("click",function(){

	body.classList.toggle("purple");
});