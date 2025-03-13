const firstElement = document.getElementById('firstElement');
const secondElement = document.querySelector('.secondElement');
const thirdElement = document.querySelector('p');

firstElement.textContent = 'Updated first element content.';
secondElement.textContent = 'Updated second element content.';
thirdElement.textContent = 'Updated third element content.';

firstElement.style.color = 'purple';
firstElement.style.backgroundColor = 'lightgray';
firstElement.style.fontSize = '22px';
firstElement.style.fontStyle = 'normal';

secondElement.style.color = 'orange';
secondElement.style.backgroundColor = 'darkblue';
secondElement.style.fontSize = '28px';
secondElement.style.fontWeight = 'normal';

thirdElement.style.color = 'white';
thirdElement.style.backgroundColor = 'black';
thirdElement.style.fontSize = '35px';
thirdElement.style.fontStyle = 'italic';
