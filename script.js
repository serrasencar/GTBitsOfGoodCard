const card = document.getElementById('card');
document.getElementById('to-back')?.addEventListener('click', () => card.classList.add('is-flipped'));
document.getElementById('to-front')?.addEventListener('click', () => card.classList.remove('is-flipped'));