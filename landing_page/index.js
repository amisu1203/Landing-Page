const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const modal = document.querySelector('.modal');

function displayModal() {
    modal.classList.toggle('hidden');
}

btnOpen.addEventListener('click', displayModal);
btnClose.addEventListener('click', displayModal);
