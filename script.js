$(document).ready(function() {
	generateGrid(10, 1);

	$(".button:first").click(function() {
		$("#container").empty();
		var gridsize = +prompt("How many rows would you like to generate?");
		generateGrid(gridsize, 1);
	});

	$(".button:nth-child(2)").click(function() {
		$("#container").empty();
		var gridsize = +prompt("How many rows would you like to generate?");
		generateGrid(gridsize, 2);
	});

	$(".button:nth-child(3)").click(function() {
		$("#container").empty();
		var gridsize = +prompt("How many rows would you like to generate?");
		generateGrid(gridsize, 3);
	});

	$(".button:nth-child(4)").click(function() {
		$("#container > div > div").css("background-color", "white");
	});
});

function generateGrid(size, color) {
	var grid = 800 / size;
	for ( i = 0; i < size; i++) {
		// need to set row class properties to prevent bugs with scaling
		$("#container").append("<div></div>")
	}
	for ( j = 0; j < size; j++) {
		$("#container > div").append("<div></div>")
	}
	$("#container > div > div").css({"height": grid, "width": grid, "display": "inline-block", 
		"margin-bottom": "-5px"});
	$("#container > div > div").mouseenter(function() {
		if ( color === 1 ) {
			$(this).css("background-color", "#EC583A");
		}
		else if ( color === 2) {
  		var random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
			$(this).css("background-color", random);
		}
		else if (color === 3) {
			$(this).css("opacity", "+=0.1")
		}
	});
};