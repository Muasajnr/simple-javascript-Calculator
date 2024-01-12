const input = document.getElementById("input");
let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;

const clearInput = () => {
    currentNum = '';
    prevNum = '';
    result = null;
    currentOperator = null;
    input.value = '';
}

const addNumber = (number) => {
    currentNum += number;
    input.value = `${prevNum} ${currentOperator || ''} ${currentNum}`;
}


const calculateResult = () => {
    let calculation;
    const prevNumFloat = parseFloat(prevNum);
    const currentNumFloat = parseFloat(currentNum);
    switch(currentOperator) {
        case '+':
            calculation = prevNumFloat + currentNumFloat;
            break;
        case '-':
            calculation = prevNumFloat - currentNumFloat;
            break;
        case '*':
            calculation = prevNumFloat * currentNumFloat;
            break;
        case '/':
            calculation = prevNumFloat / currentNumFloat;
            break;
        default:
            return;
    }
    result = calculation;
    input.value = calculation;
    currentNum = ''
}

const setOperator = (operator) => {
    if (currentOperator !== null || result !== null) {
        calculateResult();
    }
    prevNum = currentNum;
    currentNum = '';
    currentOperator = operator;
    input.value = `${prevNum} ${operator} `;
}


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.value;
        if (buttonValue === 'C') {
            clearInput();
        } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
            setOperator(buttonValue);
        } else if (buttonValue === '=') {
            calculateResult();
        } else {
            addNumber(buttonValue);
        }
    });
});