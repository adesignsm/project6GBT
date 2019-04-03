var hours = 999;
var minutes = 999;
var seconds = 999;

var countdownTime = setInterval(function() {

	hours--;
	minutes--;
	seconds--;

	document.getElementById("alarm-clock").textContent = hours + ":" + minutes + ":" + seconds;

	if (hours <= 1 && minutes <= 1 && seconds <= 1) {

		document.getElementById("alarm-clock").textContent = "00:00:00";
		clearInterval(countdownTime);
	}

}, -999999);

$(document).ready(function() {

	var $loadingPage = $("#loading-page");
	var $loadBar = $("#loading-bar");
	var $details = $("#details-container");
	var $finDetails = $("#fin-anim");

	$loadBar.animate({width: "29%"}, 4300);
	$details.delay(4800).fadeIn(500);

	$loadingPage.delay(7000).fadeOut(1000);
});

