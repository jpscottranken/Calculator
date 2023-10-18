//	Create alias for document.getElementById
const $ = (id) => document.getElementById(id);

function calculateResult() {
  const num1 = parseFloat($("num1").value);
  const num2 = parseFloat($("num2").value);
  const operator = $("operator").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    $("result").value = "You Must Input A Number";
    return;
  }

  if (operator === "+") {
    result = add(num1, num2);
  } else if (operator === "-") {
    result = subtract(num1, num2);
  } else if (operator === "*") {
    result = multiply(num1, num2);
  } else if (operator === "/") {
    result = divide(num1, num2);
  } else {
    result = "Invalid operator";
  }

  $("result").value = result;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Illegal Divide By Zero";
  } else {
    return (num1 / num2).toFixed(2);
  }
}

// Arrow function to clear the input fields
function clearFields() {
  $("num1").value = "";
  $("num2").value = "";
  $("operator").value = "+";
  $("result").value = "";
  num1.focus();
}

// Attach event listeners to the Calculate and Clear buttons
$("calculate").addEventListener("click", calculateResult);
$("clear").addEventListener("click", clearFields);
