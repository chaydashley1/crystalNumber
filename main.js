


	// No pase de 100
	var random = [];

	for (var b = 1; b < 100; b++) {
		random.push(b);
	}

	// crystal numbers array
	var crystals = [];

	for (var a = 1; a < 8; a++) {

		crystals.push(a);
	}

	var matchNumber;
	var crystalNumbers = []; 

	var crystal1;
	var crystal2;
	var crystal3;
	var crystal4;

  var userTotal = 0; 

	var wins = 0;
    var losses = 0;
    
// --------FUNCTIONS---------


	function selectRandom(arr) {

		var d = arr[Math.floor(Math.random() * arr.length)];
		matchNumber = d;
		$("#randomNumber").html(matchNumber);

		console.log("numero random : " + matchNumber);

	} 


	function selectCrystalRandom(arr) {

		for (var e = 0; e < 4; e++){

			var a = arr[Math.floor(Math.random() * arr.length)];

			crystalNumbers.push(a);
		}


	} 

	function valorCrystals(arr) {

		
		for (i = 0; i < arr.length; i++) {

		$("#button-" + (i+1)).attr("value", arr[i]);
		console.log(this);
		}
		crystal1 = arr[0];
		crystal2 = arr[1];
		crystal3 = arr[2];
		crystal4 = arr[3];
	} 

	function restartGame(number) {

		crystalNumbers = []; 

		selectRandom(random);

		selectCrystalRandom(crystals);

		valorCrystals(crystalNumbers);

		userTotal = 0;
		$("#totalNumber").html(userTotal);

		alert(number);
	} 

	selectRandom(random); 
	selectCrystalRandom(crystals); 
	valorCrystals(crystalNumbers);


		$("#button-1").on("click", function() {

			userTotal += crystal1;
			$("#totalNumber").html(userTotal);
		});

		$("#button-2").on("click", function() {

			userTotal += crystal2;
			$("#totalNumber").html(userTotal);
		});

		$("#button-3").on("click", function() {

			userTotal += crystal3;
			$("#totalNumber").html(userTotal);
		});

		$("#button-4").on("click", function() {

			userTotal += crystal4;
			$("#totalNumber").html(userTotal);
		});

	$("button").on("click", function() {
		if (userTotal == matchNumber) {

			wins++;
			console.log(userTotal);
			$("#totalNumber").html(userTotal);
			$("#wins").html("Wins: " + wins);


			setTimeout(function() {restartGame("YOU WIN!!")}, );
		}

		else if (userTotal > matchNumber){

			losses++;
			$("#totalNumber").html(userTotal);
			$("#losses").html("Losses: " + losses);

			setTimeout(function() {restartGame("Loose!")},);
		}
	});


