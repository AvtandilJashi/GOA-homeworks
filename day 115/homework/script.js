let images = document.querySelectorAll('.slider img');
let dotsContainer = document.querySelector('.dots');
let index = 0;

images.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
});

function showSlide(i) {
    images[index].classList.remove('active');
    dotsContainer.children[index].classList.remove('active');
    index = i;
    images[index].classList.add('active');
    dotsContainer.children[index].classList.add('active');
}

setInterval(() => {
    showSlide((index + 1) % images.length);
}, 3000);
