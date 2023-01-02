'use strict';
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
console.log(randomNumber);
const scores = new Array('0');
let highScore = Math.max.apply(Math, scores);
document.querySelector('.highscore').textContent = highScore;
document
  .querySelector('.check')
  .addEventListener('click', function buttonClick() {
    let userNumber = Number(document.querySelector('.guess').value);
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('body').style.backgroundColor = 'red';
    }
    if (userNumber > randomNumber) {
      document.querySelector('.message').textContent = 'Number too high';
      score--;
    } else if (userNumber < randomNumber) {
      document.querySelector('.message').textContent = 'Number too low';
      score--;
    } else if (userNumber === randomNumber) {
      document.querySelector('.message').textContent = 'Vola! Correct Number';
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').textContent = randomNumber;
      if (score > Math.max.apply(Math, scores)) {
        document.querySelector('.highscore').textContent = score;
      }
      scores.push(score);
    } else if (!userNumber) {
      document.querySelector('.message').textContent =
        'Please enter valid number';
    }
    document.querySelector('.score').textContent = score;
  });

document.querySelector('.again').addEventListener('click', function reset() {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
