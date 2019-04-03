var lfollowX = 0;
var lfollowY = 0;

var x = 0;
var y = 0;

var friction = 1 / 10;

function moveBackgroundIMAGE() {

	x += (lfollowX - x) * friction;
	y += (lfollowY - y) * friction;

	translate = "translate(" + x + "px, " + y + "px) scale(1.1)";

	$("#interchanging-bg-image").css({

		"-webkit-transform": translate,
		"-moz-transform": translate,
		"transform": translate
	});

	window.requestAnimationFrame(moveBackgroundIMAGE);
}

$(window).on("mousemove click", function(e) {

	var lmouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
	var lmouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));

	lfollowX = (20 * lmouseX) / 100;
	lfollowY = (10 * lmouseY) / 100;
});

moveBackgroundIMAGE();