console.log("Up and Running");


var cards =[
  {
    rank:"king",
    suit:"hearts",
    cardImage:"images/king-of-hearts.png"
  },
{
  rank:"king",
  suit:"diamonds",
  cardImage:"images/king-of-diamonds.png"
},
  {
    rank:"queen",
    suit:"hearts",
    image:"images/queen-of-hearts.png"
  },
{
    rank:"queen",
    suit:"diamonds",
    image:"images/queen-of-diamonds.png"
  }
];

var cardsInPlay = [];

var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
}
else {
console.log("Sorry, try again.");
}
}

var flipCard = function(cardsId) {

  checkForMatch();

  console.log("User Flipped " + cards[cardsId].rank);
  cardsInPlay.push(cards[cardsId].rank);

  if (cardsInPlay.length === 2) {
   if (cardsInPlay[0] === cardsInPlay[1]) {
     alert("You found a match");
   }
   else {
     alert("Sorry, Try again");
   }
};
console.log(cards.cardImage);
C:\Users\T-Time\fundamentals\memory_game
