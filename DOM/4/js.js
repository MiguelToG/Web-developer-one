var h1 = document.querySelector("h1");

h1.style.color = "red";

var p = document.querySelector("p");
p.textContent = "Doesn't matter what you put in here, it always changes"
p.classList.add("big");
p.classList.toggle("big");
var li = document.getElementsByTagName("p")[0];

//li.textContent = "Hi there ";