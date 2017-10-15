var someobject = {

	movies : [
	{name : "I'm leyend",rating : 5, watched : true },
	{name : "The avengers",rating : 4.5, watched : false },
	{name : "Spiderman homecoming",rating : 5, watched : true },
	{name : "The ring",rating : 3.5, watched : false },
	]
};

someobject.movies.forEach(function(hello){
	if(hello.watched === true){
		console.log("You have seen \"" +hello.name+ "\"" + "-" + hello.rating + " stars");
		document.write("You have seen \"" +hello.name+ "\"" + "-" + hello.rating + " stars");
	}
	else{
		console.log("You have not seen \"" +hello.name +"\"" + "-" +hello.rating + " stars");	
		document.write("You have seen \"" +hello.name+ "\"" + "-" + hello.rating + " stars");
	}
});



