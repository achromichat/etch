
/*
IDEAS!!!
DONE - Allow changing of the fade time
Button to switch from drag and fade mode to click to color mode
Radio buttons to change color of thing, or set it in prompt
*/

var gridnum;
var fadeTime;
var totalgrid;
var fadeString;
function getGridNum() {
	function checker(toCheck, max, min) {
		if (toCheck > max || toCheck < min || !($.isNumeric(toCheck))) {
			input = prompt("Come on, dawg. Give me something I can work with. " + min + "-" + max);
			return checker(input, max, min);
		} else {
			return toCheck;
		}
	}
	//Gridnum accept and check
	gridnum = prompt("How many rows/cols? Be reasonable.");
	gridnum = checker(gridnum, 100, 4);
	//fadeTime accept and check
	fadeTime = prompt("How sticky you want your colors, 1-10?");
	fadeTime = checker(fadeTime, 10, 1);

	totalgrid = gridnum * gridnum;
	fadeString = fadeTime.toString();
	fadeString = 'background ' + fadeString + 's' + ' linear';
}
function gridmaker(x) {
	var $container = $('div.container');
	for (i = 0; i < x; i++) {
		$container.append('<div class="box"></div>')
	}
	var dimension = 960 / gridnum;
	$('div.box').css({'width':dimension, 'height':dimension});
}

function griddestroy() {
	$('div').remove('.box');
	console.log("DESTROY");
}
function enablehover() {
	$('div.box').hover(
		function() {
			$(this).css({'background-color':'blue', 'transition':'background 0s linear'});
		}, 
		function() {
			$(this).css({'background-color':'white', 'transition': fadeString});
		}
	);
}
function resetter() {
	getGridNum(); 
	griddestroy(); 
	gridmaker(totalgrid); 
	enablehover();
}


$(document).ready(function() {
	resetter();
})