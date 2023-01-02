'use strict';
let randomDice = Math.trunc(Math.random() * 6) + 1;
let player0 = 0;
let player1 = 0;
let activePlayer = 0;
const rollDice = document.querySelector('.btn--roll');

rollDice.addEventListener('click', function () {
  randomDice = Math.trunc(Math.random() * 6) + 1;
  if (randomDice !== 1) {
    console.log(typeof 'player' + activePlayer);
    console.log(typeof player0);
    // console.log(player0);
  }
  /*document.querySelector(
    `#current--${activePlayer}`
  ).textContent = `player${activePlayer}`;
  console.log(document.querySelector(`#current--${activePlayer}`));*/
});
