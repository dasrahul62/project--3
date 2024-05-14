let display = document.querySelector('.display');

function appendInput(value) {
  if (display.textContent === '0') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }
}

function clearDisplay() {
  display.textContent = '0';
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch (error) {
    display.textContent = 'Error';
  }
}
