function add(a, b) {
    return parseInt(a, 10) + parseInt(b, 10);
}

function subtract(a, b) {
    return parseInt(a, 10) - parseInt(b, 10);
}

function multiply(a, b) {
    return parseInt(a, 10) * parseInt(b, 10);
}

function divide(a, b) {
    return parseInt(a, 10) / parseInt(b, 10);
}

function operate(a, b, operator) {
    if (operator == "+") return add(a, b);
    if (operator == "-") return subtract(a, b);
    if (operator == "x") return multiply(a, b);
    if (operator == "/") return divide(a, b);
}

let firstNumber = ""; //Concatenate digits into this before operator is selected
let secondNumber = ""; //Concatenate digits into this after operator is selected
let operator = ""; 
let result;
const screen = document.querySelector('#screen');
screen.textContent = "";

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "clear") {
            firstNumber = "";
            secondNumber = "";
            operator = "";
            screen.textContent = "";
        }

        else if (button.id == "=" && firstNumber !== "" && operator !== "" && secondNumber !== "") { //Equals 
            result = operate(firstNumber, secondNumber, operator) + "";
            if (result.length > 8) screen.textContent = result.slice(0, 8) + "..."; //Round 
            else screen.textContent = result;
            firstNumber = "";
            secondNumber = "";
            operator = "";
        }

        else if (button.className == "digit" && operator !== "") { //secondNumber
            secondNumber += button.id;
            screen.textContent = secondNumber;
        }

        else if (button.className == 'operator' && operator == "" && firstNumber !== "" && secondNumber == "") { //operator 
            screen.textContent = button.id;
            operator = button.id;
        }

        else if (button.className == "digit" && operator == "") { //firstNumber
            firstNumber += button.id;
            screen.textContent = firstNumber;
        }
        
        else {  
            screen.textContent = "Err syntax"
            firstNumber = "";
            secondNumber = "";
            operator = "";
        }
    });
});



//TODO: style, allow typing and clicking of symbols, add decimal point