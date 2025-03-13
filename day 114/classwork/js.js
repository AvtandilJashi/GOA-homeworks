const changeTextButton = document.getElementById('changeTextButton');
const inputField = document.getElementById('inputField');
const outputText = document.getElementById('outputText');

changeTextButton.addEventListener('click', () => {
  const inputValue = inputField.value;  
  outputText.textContent = inputValue;  
});
