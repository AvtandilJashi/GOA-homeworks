function addItem() {
    const input = document.getElementById('itemInput');
    const ul = document.getElementById('itemList');
    if (input.value.trim() !== "") {
      const li = document.createElement('li');
      li.textContent = input.value;
      ul.appendChild(li);
      input.value = "";
    }
  }
  
  function clearList() {
    document.getElementById('itemList').innerHTML = '';
  }
  
  function changeCounter(amount) {
    const counter = document.getElementById('counter');
    let value = parseInt(counter.textContent);
    value += amount;
    counter.textContent = value;
  }
  
  function generateColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const box = document.getElementById('colorBox');
    box.style.backgroundColor = rgb;
    box.textContent = rgb;
  }
  
  const slides = [
    "https://via.placeholder.com/200x120?text=1",
    "https://via.placeholder.com/200x120?text=2",
    "https://via.placeholder.com/200x120?text=3"
  ];
  let currentSlide = 0;
  
  function updateSlider() {
    document.getElementById('sliderBox').innerHTML = `<img src="${slides[currentSlide]}" alt="">`;
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }
 
  function showMessage() {
    const input = document.getElementById('msgInput');
    const box = document.getElementById('messageBox');
    if (input.value.trim() !== "") {
      box.textContent = input.value;
    } else {
      box.textContent = "გთხოვთ შეიყვანოთ ტექსტი";
    }
  }
  
  function clearMessage() {
    document.getElementById('msgInput').value = '';
    document.getElementById('messageBox').textContent = '';
  }
  