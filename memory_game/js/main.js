console.log("Up and Running");


var cards =[
  {
    rank:'king',
    suit:'hearts',
    cardImage:"images/king-of-hearts.png"
  },
{
  rank:'king',
  suit:'diamonds',
  cardImage:"images/king-of-diamonds.png"
},
  {
    rank:'queen',
    suit:'hearts',
    cardImage:"images/queen-of-hearts.png"
  },
{
    rank:'queen',
    suit:'diamonds',
    cardImage:"images/queen-of-diamonds.png"
  }
];

var cardsInPlay = [];

var checkForMatch = function() {

if (cardsInPlay.length === 2){
  if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
}
else {
alert("Sorry, try again");
}
}
};

var flipCard = function() {

var cardsId = this.getAttribute('data-id');
var card = cards[cardsId];
this.setAttribute('src', card.cardImage);
this.setAttribute("class", "clicked");
console.log(this);
cardsInPlay.push(card.rank);
if (cardsInPlay.length === 2) {
    checkForMatch();
  };
};

 var createBoard = function() {
for (var i = 0; i < cards.length; i++) {


var cardElement = document.createElement("img");
cardElement.setAttribute("src", "images/back.png");
cardElement.setAttribute("data-id", i );
var board = document.getElementById("game-board");

cardElement.addEventListener('click', flipCard);
  board.appendChild(cardElement);

};

};
createBoard();
