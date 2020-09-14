const button = document.querySelectorAll('.btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const bg = document.querySelector('.bg');

button.forEach((item) => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        bg.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    bg.style.display = 'none';
});