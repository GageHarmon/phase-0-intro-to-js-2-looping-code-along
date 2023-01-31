// Code your solutions in this file

let cards = ["Guadalupe", "Ollie", "Aki"];
const newCards = [];

function writeCards(cards) {
  for (let i = 0; i < cards.length; i++) {
//    console.log(cards);
    newCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
  }
  return newCards;
}

let number = [];

function countDown(number) {
  let i = 10;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}




