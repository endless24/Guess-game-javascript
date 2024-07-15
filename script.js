'use strict';
// setting the random number
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// setting the score
let score = Number(document.querySelector('.score').textContent);

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// handling event on check btn
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // when there is no value in the input
  if (!guessNumber) {
    displayMessage('⛔️ No number');

    // when player wins
  } else if (guessNumber === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    displayMessage('🎉 Correct - Number');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guessNumber is wrong
  } else if (guessNumber !== secretNumber) {
    // when you are out of scores
    score--;
    document.querySelector('.score').textContent = score;
    if (score > 0) {
      displayMessage(
        guessNumber > secretNumber ? '📈 Too hight!' : '📉 Too low!'
      );

      document.querySelector('.guess').value = '';
    } else {
      document.querySelector('.score').textContent = score;

      displayMessage('🤯 You lost the game!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
