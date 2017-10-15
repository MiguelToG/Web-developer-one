var firstL1 = document.querySelectorAll("li");

for (var i = 0; i < firstL1.length; i++) {
	firstL1[i].addEventListener("mouseover",function(){

		this.classList.add("selected");
	});

	firstL1[i].addEventListener("mouseout",function(){

		this.classList.remove("selected");
	});

	firstL1[i].addEventListener("click",function(){

		this.classList.add("done");
	});
}

