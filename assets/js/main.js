// console.log("Hello World from main.js!");

// //Today: Event Listeners and Intervals

// //Event Listeners

// // window.addEventListener("mousemove", onMouseMove);
// // // event references are always lowercase

// // function onMouseMove () {
// // 	console.log("mouse moved");
// // }

// //or:
// window.addEventListener("mousemove", function ( e ) {
// 	console.log ( e );
// 	});

// var box = document.querySelector ( ".box" );

// box.addEventListener( "mouseenter", function () {
// 	box.style.width = "150px";
// 	box.style.height = "150px";
// });

// box.addEventListener (" ");

// //mouseenter & mouseleave
// //mouseover & mouseout

///////////////////Memory Game/////////////////

// Shuffle
// deal
// flip cards
// Check for match
// —> yes: set aside
// —> no: flick back

// Shuffle
var counter = document.createElement("div");
counter.classList.add("counter");
document.body.appendChild(counter);
var time = 0;
var timer = setInterval(timing, 1000);
function timing() {
	counter.innerHTML = time;
	time++;
	console.log(time);
}
function shuffle ( o ){
    for ( var j, x, i = o.length; i; j = Math.floor ( Math.random () * i ), x = o[--i], o[i] = o[j], o[j] = x );
    return o;
};

function dealCards ( deck ) {
	for ( var i = 0; i < deck.length; i++ ) {
		var card = document.createElement ( "div" );
		card.setAttribute ( "class", "card" );
		card.setAttribute ( "data-color", deck[i].color );
		card.setAttribute ( "data-suit", deck[i].suit );
		card.setAttribute("data-number", deck[i].number);
		card.innerHTML = deck[i].number + deck[i].suit;
		document.body.appendChild(card);

		card.addEventListener("click", (onCardClick));
	}
}
function onCardClick(e) {
	// console.log(e);
	// console.dir(this);
	// this.classList.toggle("flipped");
	var flippedCards=document.querySelectorAll(".flipped");
	if( flippedCards.length < 2) {

		if(!this.classList.contains("flipped") && !this.classList.contains("matched")) {
			this.classList.add("flipped");

			if( flippedCards.length == 1) {
			checkForMatch(this, flippedCards[0]);
			}
		}
	}


}
function checkForMatch(card1 , card2) {
	console.log("check");
	if(card1.dataset.number == card2.dataset.number && card1.dataset.suit == card2.dataset.suit) {
		console.log("it's a match");
		card1.classList.remove("flipped");
		card2.classList.remove("flipped");
		card1.classList.add("matched");
		card2.classList.add("matched");

		checkForWin();
	} else {
		setTimeout(function() {
			card1.classList.remove("flipped");
			card2.classList.remove("flipped");
		}, 500)
		console.log("try again");
	}

}
function checkForWin() {
	var totalMatched = document.querySelectorAll(".matched").length;
	var totalCards = document.querySelectorAll(".card").length;
	if(totalCards == totalMatched) {
		setTimeout(function() {
			// alert("you have won")
			createModal();
			clearInterval(timer);
		}, 500)
	}
}
// window.addEventListener("click", function ( e ) {
// 	// console.log(e);
// 	if (e.target.dataset.project == "web design") {
// 		//do something
// 	}
// });

function startGame () {

	var totalCards = 8;

	var deck = [
	    {color: "red",   number: "A" , suit: "&hearts;"},
	    {color: "red",   number: "2" , suit: "&hearts;"},
	    {color: "red",   number: "3" , suit: "&hearts;"},
	    {color: "red",   number: "4" , suit: "&hearts;"},
	    {color: "red",   number: "5" , suit: "&hearts;"},
	    {color: "red",   number: "6" , suit: "&hearts;"},
	    {color: "red",   number: "7" , suit: "&hearts;"},
	    {color: "red",   number: "8" , suit: "&hearts;"},
	    {color: "red",   number: "9" , suit: "&hearts;"},
	    {color: "red",   number: "10", suit: "&hearts;"},
	    {color: "red",   number: "J" , suit: "&hearts;"},
	    {color: "red",   number: "Q" , suit: "&hearts;"},
	    {color: "red",   number: "K" , suit: "&hearts;"},
	    {color: "red",   number: "A" , suit: "&diams;"},
	    {color: "red",   number: "2" , suit: "&diams;"},
	    {color: "red",   number: "3" , suit: "&diams;"},
	    {color: "red",   number: "4" , suit: "&diams;"},
	    {color: "red",   number: "5" , suit: "&diams;"},
	    {color: "red",   number: "6" , suit: "&diams;"},
	    {color: "red",   number: "7" , suit: "&diams;"},
	    {color: "red",   number: "8" , suit: "&diams;"},
	    {color: "red",   number: "9" , suit: "&diams;"},
	    {color: "red",   number: "10", suit: "&diams;"},
	    {color: "red",   number: "J" , suit: "&diams;"},
	    {color: "red",   number: "Q" , suit: "&diams;"},
	    {color: "red",   number: "K" , suit: "&diams;"},
	    {color: "black", number: "A" , suit: "&spades;"},
	    {color: "black", number: "2" , suit: "&spades;"},
	    {color: "black", number: "3" , suit: "&spades;"},
	    {color: "black", number: "4" , suit: "&spades;"},
	    {color: "black", number: "5" , suit: "&spades;"},
	    {color: "black", number: "6" , suit: "&spades;"},
	    {color: "black", number: "7" , suit: "&spades;"},
	    {color: "black", number: "8" , suit: "&spades;"},
	    {color: "black", number: "9" , suit: "&spades;"},
	    {color: "black", number: "10", suit: "&spades;"},
	    {color: "black", number: "J" , suit: "&spades;"},
	    {color: "black", number: "Q" , suit: "&spades;"},
	    {color: "black", number: "K" , suit: "&spades;"},
	    {color: "black", number: "A" , suit: "&clubs;"},
	    {color: "black", number: "2" , suit: "&clubs;"},
	    {color: "black", number: "3" , suit: "&clubs;"},
	    {color: "black", number: "4" , suit: "&clubs;"},
	    {color: "black", number: "5" , suit: "&clubs;"},
	    {color: "black", number: "6" , suit: "&clubs;"},
	    {color: "black", number: "7" , suit: "&clubs;"},
	    {color: "black", number: "8" , suit: "&clubs;"},
	    {color: "black", number: "9" , suit: "&clubs;"},
	    {color: "black", number: "10", suit: "&clubs;"},
	    {color: "black", number: "J" , suit: "&clubs;"},
	    {color: "black", number: "Q" , suit: "&clubs;"},
	    {color: "black", number: "K" , suit: "&clubs;"},
	];
	shuffle(deck);

	//deal: we need an array of objects

	var pickedCards = deck.slice( 0, totalCards/2 );
	// console.log(pickedCards);

	pickedCards = pickedCards.concat(pickedCards);				//concat: add an array in an array

	shuffle(pickedCards);
	// console.log(pickedCards);

	dealCards(pickedCards);
	time=0;


}
function createModal() {
	$overlay = document.createElement("div");
	$overlay.classList.add("overlay");
	document.body.appendChild($overlay);
	var $modal = document.createElement("div");
	$modal.classList.add("modal");
	document.body.appendChild($modal);
	$modal.innerHTML = "<p>you have won! It took you " + time + " seconds</p>";
	var $restart = document.createElement("button"); 
	var $close = document.createElement("button"); 
	$restart.classList.add("restart");
	$close.classList.add("close");
	$restart.innerHTML = "Restart";
	$close.innerHTML = "close"; 
	$modal.appendChild($restart);
	$modal.appendChild($close);
	$restart.addEventListener("click", restartGame);
	$close.addEventListener("click", closeGame);

}
function closeGame() {
	console.log(" close clicked");
	var $modal = document.querySelector(".modal");
	var $overlay = document.querySelector(".overlay");
	$modal.parentNode.removeChild($modal);
	$overlay.parentNode.removeChild($overlay);
}
function restartGame() {
	console.log("reset");
	var $modal = document.querySelector(".modal");
	var $overlay = document.querySelector(".overlay");
	$modal.parentNode.removeChild($modal);
	$overlay.parentNode.removeChild($overlay);
	var $cards = document.querySelectorAll(".card");
	for (var i = $cards.length - 1; i >= 0; i--) {
		$cards[i].parentNode.removeChild($cards[i]);
	}
	startGame();
	timer = setInterval(timing, 1000);
}

window.addEventListener( "load", startGame );





//take cards from array (4)
//clone cards, find matches
//Put cards in DOM



















