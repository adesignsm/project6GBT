var song1 = document.getElementById("song1");
var song2 = document.getElementById("song2");
var song3 = document.getElementById("song3");
var song4 = document.getElementById("song4");

var pgBar1 = document.getElementById("progress-bar1");
var pgBar2 = document.getElementById("progress-bar2");
var pgBar3 = document.getElementById("progress-bar3");
var pgBar4 = document.getElementById("progress-bar4");

var currentProgressBar;

var playPause = document.getElementById("play-pause-button");
var next = document.getElementById("next-button");
var preve = document.getElementById("prev-button");

if (switchCounter == 0) {

	currentSong = song1;

} else if (switchCounter == 1) {

	currentSong = song2;

} else if (switchCounter == 2) {

	currentSong = song3;

} else if (switchCounter == 3) {

	currentSong = song4;
}

playPause.onmousedown = function(e) {

	if (PlayPauseCounter == 0) {

		currentSong = currentSong;
		currentProgressBar = pgBar1;

		currentProgressBar.style.display = "block";

		currentSong.play();
	
	} else if (PlayPauseCounter == 1) {

		currentSong.pause();
	}
}

//musicPlayer.js intercepts thus no need for extra code to implement the next and prev button
//Music bar will aniamte according to the song playing in the musicPlayer.js file due
//to the setAttribute function where the song src is already fitted into the current song

song1.ontimeupdate = function() {

	document.getElementById("progress-bar1").setAttribute("value", this.currentTime / this.duration);
}

song2.ontimeupdate = function() {

	document.getElementById("progress-bar2").setAttribute("value", this.currentTime / this.duration);
}

song3.ontimeupdate = function() {

	document.getElementById("progress-bar3").setAttribute("value", this.currentTime / this.duration);
}

song4.ontimeupdate = function() {

	document.getElementById("progress-bar4").setAttribute("value", this.currentTime / this.duration);
}