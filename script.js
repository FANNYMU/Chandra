var resultDisplayed = false; // Flag to track whether result is displayed or not
var lastOperationWasCalculate = false; // Flag to track whether last operation was calculation or not

function appendToDisplay(value) {
  if (resultDisplayed || lastOperationWasCalculate) { // Reset the display if result is already shown or last operation was calculation
    clearDisplay();
    resultDisplayed = false;
    lastOperationWasCalculate = false;
  }
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  var expression = document.getElementById('display').value;
  try {
    var result = eval(expression);
    document.getElementById('display').value = result;
    resultDisplayed = true; // Set the flag to true
    lastOperationWasCalculate = true; // Set the flag to true
  } catch (error) {
    alert('Invalid expression');
  }
}

function deleteLastCharacter() {
  var displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}   