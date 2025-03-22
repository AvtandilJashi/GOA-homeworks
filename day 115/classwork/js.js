let images = [
    slide.src = 'image2.png'
];

let num = 0;
function nextPhoto() {
    let slide = document.querySelector('#slide');
    num ++;
    if (num >= images.length) {
        num = 0;
    };
    slide.src = images[num];
}

function previousPhoto() {
    let slide = document.querySelector('#slide');
    num --;
    if (num < 0) {
        num = images.length - 1;
    };
    slide.src = images[num];
}