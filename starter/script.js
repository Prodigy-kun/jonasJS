'use strict';
//cfghvjbk
let rand = Math.trunc(Math.random() * 20) + 1;
const displayer = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  let currScore = Number(document.querySelector('.score').textContent);
  let highscore = document.querySelector('.highscore').textContent;
  const checker = function (guess) {
    if (guess == false) {
      displayer('Enter a real number😡😡');
      document.querySelector('.guess').value = '';
      document.querySelector('.guess').focus();
    } else if (guess === rand) {
      displayer('Correct Number!🏆');
      document.querySelector('.number').textContent = rand;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '2em';
      if (currScore > highscore) {
        document.querySelector('.highscore').textContent = currScore;
      }
    } else if (guess !== rand) {
      displayer(`Too ${guess > rand ? 'High ☹' : 'Low ☹'}`);
      currScore--;
      document.querySelector('.score').textContent = currScore;
      document.querySelector('.guess').value = '';
      document.querySelector('.guess').focus();
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      displayer('Game Over ☹');
      document.querySelector('.score').textContent = 0;
    }
  };
  checker(guess);
});
document.querySelector('.again').addEventListener('click', function () {
  rand = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  displayer('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
});
