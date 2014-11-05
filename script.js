$(document).ready(function() {
	generateGrid(20,20);

	$(".row > div").mouseenter(function() {
		$(this).addClass("highlight");
	});

	$(".button:nth-child(2)").click(function() {
		$(".row > div").removeClass("highlight");
	});

	$(".button:first").click(function() {
		$("#container").empty();
		var rows = +prompt("How many rows would you like to generate?");
		var cells = +prompt("And how many columns?");
		// function doesn seem to work inside here
		generateGrid(rows, cells);
	});
});

function generateGrid(rows, cells) {
	var rh = 800 / rows;
	var cw = 800 / cells;
	for ( i = 0; i < rows; i++) {
		// need to set row class properties to prevent bugs with scaling
		$("#container").append("<div class='row'></div>")
	}
	for ( j = 0; j < cells; j++) {
		$(".row").append("<div></div>")
	}
	$(".row > div").css({"height": rh, "width": cw, "display": "inline-block", 
		"margin-bottom": "-5px"})
};