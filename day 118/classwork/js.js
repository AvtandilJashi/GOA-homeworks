function convertTemp() {
    const temp = parseFloat(document.getElementById('temperature').value)
    const unit = document.getElementById('unit').value
    const resultBox = document.getElementById('result')
    if (isNaN(temp)) {
      resultBox.textContent = 'შეიყვანე ვალიდური რიცხვი'
      return
    }
    let result
    if (unit === 'CtoF') {
      result = (temp * 9 / 5) + 32
      resultBox.textContent = `${result.toFixed(2)} °F`
    } else {
      result = (temp - 32) * 5 / 9
      resultBox.textContent = `${result.toFixed(2)} °C`
    }
  }
  