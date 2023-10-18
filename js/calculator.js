//	Create alias for document.getElementById
const $ = (id) => document.getElementById(id);

const calculateResult = () => {
  const num1 = parseFloat($("num1").value);
  const num2 = parseFloat($("num2").value);
  const operator = $("operator").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    $("result").value = "You Must Input A Number";
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      if (num2 === 0) {
        result = "Illegal Divide By Zero";
      } else {
        result = (num1 / num2).toFixed(2);
      }

      break;

    default:
      result = "Invalid operator";
      break;
  }

  $("result").value = result;
};

// Arrow function to clear the input fields
const clearFields = () => {
  $("num1").value = "";
  $("num2").value = "";
  $("operator").value = "+";
  $("result").value = "";
  num1.focus();
};

// Attach event listeners to the Calculate and Clear buttons
$("calculate").addEventListener("click", calculateResult);
$("clear").addEventListener("click", clearFields);
