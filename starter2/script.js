'use strict';
const modal = document.querySelector('.modal');
const clicked = function () {
  document.querySelector('.modal').classList.toggle('hidden');
  document.querySelector('.overlay').classList.toggle('hidden');
};
document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    document.querySelector('.overlay').classList.toggle('hidden');
  }
});
