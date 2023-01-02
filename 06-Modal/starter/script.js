'use strict';

/*To show all the elements with same class, we should use querySelectorAll instead of querySelector*/
const showButtons = document.querySelectorAll('.show-modal');
const modalHide = document.querySelector('.modal');
const overlayHide = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-modal');

for (let i = 0; i < showButtons.length; i++) {
  showButtons[i].addEventListener('click', function () {
    modalHide.classList.remove('hidden');
    overlayHide.classList.remove('hidden');
  });
}
function closeModal() {
  overlayHide.classList.add('hidden');
  modalHide.classList.add('hidden');
}
closeButton.addEventListener('click', closeModal);
overlayHide.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalHide.classList.contains('hidden')) {
    closeModal();
  }
});
