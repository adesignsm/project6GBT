var currentSong = document.createElement("audio");
currentSong.setAttribute("src", "media/music/song1.mp3");

var PlayPauseCounter = 0;
var switchCounter = 0;

var track1 = document.getElementById("track1");
var track2 = document.getElementById("track2");
var track3 = document.getElementById("track3");
var track4 = document.getElementById("track4");

var songTitle = document.getElementById("song-title");

var downloadButton = document.getElementById("download-button");
console.log(downloadButton);

// downloadButton.onmouseenter = function(e) { //download button function

// 	downloadButton.setAttribute("href", "media/music/downloadZip.zip");
// }

track1.onmousedown = function(e) {

	songTitle.innerHTML = "[ Musician - song 1 ]";
}

track2.onmousedown = function(e) {

	songTitle.innerHTML = "[ Musician - song 2 ]";
}

track3.onmousedown = function(e) {

	songTitle.innerHTML = "[ Musician - song 3 ]";
}

track4.onmousedown = function(e) {

	songTitle.innerHTML = "[ Musician - song 4 ]";
}

document.getElementById("play-pause-button").addEventListener("click", function(e) {

	if (PlayPauseCounter <= 0) {

		console.log("play");

		currentSong.play();

		if (switchCounter <= 0) {

			songTitle.innerHTML = "[ Musician - song 1 ]";
			switchCounter++;
			PlayPauseCounter++;
		} 

		PlayPauseCounter++;
	
	} else if (PlayPauseCounter >= 1) {

		console.log("pause");

		currentSong.pause();

		PlayPauseCounter--;
	}

}, false);

document.getElementById("next-button").addEventListener("click", function(e) {

	console.log("next");

	if (switchCounter == 0) {

		songTitle.innerHTML = "[ Musician - song 1 ]"; 

		currentSong.setAttribute("src", "media/music/song1.mp3");
		currentSong.load();
		currentSong.play();

		switchCounter++;
	
	} else  if (switchCounter == 1) {

		songTitle.innerHTML = "[ Musician - song 2 ]"; 

		currentSong.setAttribute("src", "media/music/song2.mp3");
		currentSong.load();
		currentSong.play();

		switchCounter++;
	
	} else if (switchCounter == 2) {

		songTitle.innerHTML = "[ Musician - song 3 ]"; 

		currentSong.setAttribute("src", "media/music/song3.mp3");
		currentSong.load();
		currentSong.play();

		switchCounter++;

	} else if (switchCounter == 3) {

		songTitle.innerHTML = "[ Musician - song 4 ]";

		currentSong.setAttribute("src", "media/music/song4.mp3");
		currentSong.load();
		currentSong.play();
	}

}, false);

document.getElementById("prev-button").addEventListener("click", function(e) {

	console.log("previous");

	if (switchCounter == 3) {

		songTitle.innerHTML = "[ Musician - song 4 ]"; 

		currentSong.setAttribute("src", "media/music/song4.mp3");
		currentSong.play();

		switchCounter--;
	
	} else if (switchCounter == 2) {

		songTitle.innerHTML = "[ Musician - song 3 ]"; 

		currentSong.setAttribute("src", "media/music/song3.mp3");
		currentSong.play();

		switchCounter--;
	
	} else if (switchCounter == 1) {

		songTitle.innerHTML = "[ Musician - song 2 ]";

		currentSong.setAttribute("src", "media/music/song2.mp3");
		currentSong.play();
	
		switchCounter--;
	
	} else if (switchCounter == 0) {

		songTitle.innerHTML = "[ Musician - song 1 ]";

		currentSong.setAttribute("src", "media/music/song1.mp3");
		currentSong.play();		
	}

}, false);

track1.addEventListener("click", function(e) {

	currentSong.setAttribute("src", "media/music/song1.mp3");
	currentSong.load();
	currentSong.play();

}, false);

track2.addEventListener("click", function(e) {

	currentSong.setAttribute("src", "media/music/song2.mp3");
	currentSong.load();
	currentSong.play();
	
}, false);

track3.addEventListener("click", function(e) {

	currentSong.setAttribute("src", "media/music/song3.mp3");
	currentSong.load();
	currentSong.play();
	
}, false);

track4.addEventListener("click", function(e) {

	currentSong.setAttribute("src", "media/music/song4.mp3");
	currentSong.load();
	currentSong.play();
	
}, false);
