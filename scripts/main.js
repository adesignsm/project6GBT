$(document).ready(function() {

	var $aboutli = $("#about-li");
	var $trackli = $("#track-li");

	var $aboutLine = $("#about-li .line");
	var $trackLine = $("#track-li .line");

	$aboutli.on("mouseenter", function() {

		$aboutLine.animate({width: "50%"}, 250);
	});

	$aboutli.on("mouseleave", function() {

		$aboutLine.animate({width: "0%"}, 250);
	});

	$trackli.on("mouseenter", function() {

		$trackLine.animate({width: "75%"}, 250);
	});

	$trackli.on("mouseleave", function() {

		$trackLine.animate({width: "0%"}, 250);
	});
});

$(document).ready(function() {

	var $counter = 0;
	var $AScounter = 0;
	var $TScounter = 0;

	var $aboutli = $("#about-li");
	var $displayContainer = $(".display");
	var $aboutContainer = $(".about-display");

	var $trackli = $("#track-li");
	var $trackContainer = $(".track-display");

	var $closeButton = $("#close-container-button");

	$aboutli.on("mouseenter", function() {

		if ($counter == 0) {

			$trackContainer.hide();
			$aboutContainer.show();

			$aboutContainer.animate({left: "95%"}, 100);
			$displayContainer.animate({left: "95%"}, 100);
		}
	});

	$aboutli.on("mouseleave", function() {

		if ($counter == 0) {

			$aboutContainer.animate({left: "100%"}, 100);
			$displayContainer.animate({left: "100%"}, 100);
		}
	});

	$aboutli.on("click", function() {

		$aboutContainer.animate({left: "70%"}, 300);
		$displayContainer.animate({left: "70%"}, 300);
		$closeButton.fadeIn(150);

		$counter++;
		$AScounter++;

		if ($TScounter == 0) {

			$trackContainer.hide();
			$aboutContainer.show();

			$AScounter--;
		}

	});

	$trackli.on("mouseenter", function() {

		if ($counter == 0) {

			$aboutContainer.hide();
			$trackContainer.show();

			$trackContainer.animate({left: "95%"}, 100);
			$displayContainer.animate({left: "95%"}, 100);		
		}
	});

	$trackli.on("mouseleave", function() {

		if ($counter == 0) {

			$displayContainer.animate({left: "100%"}, 100);
			$trackContainer.animate({left: "100%"}, 100);
		}
	});

	$trackli.on("click", function() {

		$trackContainer.animate({left: "70%"}, 300);
		$displayContainer.animate({left: "70%"}, 300);
		$closeButton.fadeIn(100);

		$counter++;
		$TScounter++;

		if ($AScounter == 0) {

			$aboutContainer.hide();
			$trackContainer.show();

			$TScounter--;
		}
	});

	$closeButton.on("click", function() {

		$aboutContainer.animate({left: "100%"}, 300);
		$trackContainer.animate({left: "100%"}, 300);
		$displayContainer.animate({left: "100%"}, 300);

		$closeButton.delay(200).fadeOut(100);

		$counter = 0;
		$AScounter = 0;
		$TScounter = 0;
	});
});

$(document).ready(function() {

	var $length = 999999;

	var $trackArr = [];

	$trackArr.push($("#track1"));
	$trackArr.push($("#track2"));
	$trackArr.push($("#track3"));
	$trackArr.push($("#track4"));

	var $interchangingBG = $("#interchanging-bg-image");
	var $bgImg1 = $("#bg1");
	var $bgImg2 = $("#bg2");
	var $bgImg3 = $("#bg3");
	var $bgImg4 = $("#bg4");

	$trackArr[0].on("click", function() {

		$bgImg1.show();
		$bgImg2.hide();
		$bgImg3.hide();
		$bgImg4.hide();

		$interchangingBG.stop().animate({left: "0"}).animate({left: "-=10%"}, 90000);
	});

	$trackArr[1].on("click", function() {

		$bgImg1.hide();
		$bgImg2.show();
		$bgImg3.hide();
		$bgImg4.hide();

		$interchangingBG.stop().animate({left: "0"}).animate({left: "-=10%"}, 90000);
	});

	$trackArr[2].on("click", function() {

		$interchangingBG.stop().animate({left: "0"}).animate({left: "-=10%"}, 90000);

		$bgImg1.hide();
		$bgImg2.hide();
		$bgImg3.show();
		$bgImg4.hide();
	});

	$trackArr[3].on("click", function() {

		$interchangingBG.stop().animate({left: "0"}).animate({left: "-=10%"}, 90000);

		$bgImg1.hide();
		$bgImg2.hide();
		$bgImg3.hide();
		$bgImg4.show();
	});
});

$(document).ready(function() {

	var $interchangingBG = $("#interchanging-bg-image");
	var $bgImg1 = $("#bg1");
	var $bgImg2 = $("#bg2");
	var $bgImg3 = $("#bg3");
	var $bgImg4 = $("#bg4");

	var $playPause = $("#play-pause-button");
	var $next = $("#next-button");
	var $prev = $("#prev-button");

	var $playPauseCounter = 0;
	var $switchCounter = 0;
	var $prevCounter = 0;

	$playPause.on("click", function() {

		if ($playPauseCounter == 0) {

			$interchangingBG.animate({left: "-=10%"}, 90000);

			$playPauseCounter++;
		
		} else if ($playPauseCounter == 1) {

			$interchangingBG.stop().animate({left: "-=0%"}, 0);

			$playPauseCounter--;
		}
	});

	$next.on("click", function() {

		if ($switchCounter == 0) {

			$bgImg1.hide();
			$bgImg2.show();
			$bgImg3.hide();
			$bgImg4.hide();

			$interchangingBG.stop().animate({left: "0"}).animate({left: "-=10%"}, 90000);

			$switchCounter++;

		} else if ($switchCounter == 1) {

			$bgImg1.hide();
			$bgImg2.hide();
			$bgImg3.show();
			$bgImg4.hide();

			$interchangingBG.stop().animate({left: "0"}).animate({left: "-=10%"}, 90000);

			$switchCounter++;
		
		} else if ($switchCounter == 2) {

			$bgImg1.hide();
			$bgImg2.hide();
			$bgImg3.hide();
			$bgImg4.show();

			$interchangingBG.stop().animate({left: "0"}).animate({left: "-=10%"}, 90000);			
		} 
	});

	$prev.on("click", function() {

		console.log("prev jQ");

		if ($switchCounter == 2) {

			$bgImg1.hide();
			$bgImg2.hide();
			$bgImg3.show();
			$bgImg4.hide();

			$interchangingBG.stop().animate({left: "0"}).animate({left: "-=10%"}, 90000);

			$switchCounter--;
		
		} else if ($switchCounter == 1) {

			$bgImg1.hide();
			$bgImg2.show();
			$bgImg3.hide();
			$bgImg4.hide();

			$interchangingBG.stop().animate({left: "0"}).animate({left: "-=10%"}, 90000);

			$switchCounter--;			
		
		} else if ($switchCounter == 0) {

			$bgImg1.show();
			$bgImg2.hide();
			$bgImg3.hide();
			$bgImg4.hide();

			$interchangingBG.stop().animate({left: "0"}).animate({left: "-=10%"}, 90000);			
		}
	});
});