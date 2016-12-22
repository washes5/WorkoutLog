$(document).ready(function(){

	var test = $.ajax({
			type: "GET",
			url: "http://localhost:3000/api/test"
		});
		test.done(function(data){
			console.log(data);
		});

		test.fail(function(){
			console.log("Oh no!");
		});

	$("#testAPI").on("click", function(){
		console.log("It's working");
	});
});