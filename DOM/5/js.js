var att = document.getElementsByTagName("img")[0];

att.setAttribute("src","bobtail.jpg");


var a = document.getElementsByTagName("a")[0];

a.setAttribute("href","http://yahoo.com.mx");

var h1 = document.querySelector("h1");

h1.addEventListener("click",function(){

alert("H1 was clicked");

});

var lis = document.getElementsByTagName("li");


for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click",function(){

		this.style.color = "red";
	});
}