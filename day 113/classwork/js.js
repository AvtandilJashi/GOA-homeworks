let myDiv = document.getElementById('myDiv');
let increaseBtn = document.getElementById('increaseBtn');
let decreaseBtn = document.getElementById('decreaseBtn');

increaseBtn.addEventListener('click', () => {
  myDiv.classList.remove('small');
  myDiv.classList.add('large');
});

decreaseBtn.addEventListener('click', () => {
  myDiv.classList.remove('large');
  myDiv.classList.add('small');
});
