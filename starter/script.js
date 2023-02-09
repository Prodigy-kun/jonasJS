'use strict';
let rand = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  let currScore = Number(document.querySelector('.score').textContent);
  let highscore = document.querySelector('.highscore').textContent;
  const checker = function (guess) {
    if (guess == false) {
      document.querySelector('.message').textContent =
        'Enter a real number😡😡';
      document.querySelector('.guess').value = '';
      document.querySelector('.guess').focus();
    } else if (guess === rand) {
      document.querySelector('.message').textContent = 'Correct Number!🏆';
      document.querySelector('body').style.backgroundColor = 'green';
      if (currScore > highscore) {
        document.querySelector('.highscore').textContent = currScore;
      }
    } else if (guess < rand) {
      document.querySelector('.message').textContent = 'Too Low ☹';
      currScore--;
      document.querySelector('.score').textContent = currScore;
      document.querySelector('.guess').value = '';
      document.querySelector('.guess').focus();
    } else {
      document.querySelector('.message').textContent = 'Too High ☹';
      document.querySelector('.guess').value = '';
      currScore--;
      document.querySelector('.score').textContent = currScore;
      document.querySelector('.guess').focus();
    }
    if (currScore === 0) {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.message').textContent = 'Game Over ☹';
      document.querySelector('.score').textContent = 0;
    }
  };
  checker(guess);
});
document.querySelector('.again').addEventListener('click', function () {
  rand = Math.trunc(Math.random() * 20) + 1;
  console.log(rand);
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
});
