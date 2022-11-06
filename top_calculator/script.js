const btnNums = document.querySelectorAll(".num");
const btnUtils = document.querySelectorAll(".utils");
const btnOp = document.querySelectorAll(".op");
const displayField = document.querySelector(".display");

const operators = ["+", "-", "*", "/", '=']
const calculatorOp = ["CLEAR", "DELETE"]
let currentInput = '';
let currentOperation = [];

btnNums.forEach((ele, idx) => {
    ele.addEventListener("click", (e) => {
        currentInput += idx;
        display(currentInput);
    })
})

btnUtils.forEach((ele, idx) => {
    ele.addEventListener("click", (e) => {
        if (operators[idx] !== '=') {
            if (ongoingOperaton === 0) {
                currentOperation.push(operators[idx]);
                currentInput += operators[idx];
            } else if (ongoingOperaton > 0) {
                const operands = currentInput.split(currentOperation);
                currentInput = calculate(operands[0], operands[1], currentOperation);
                currentOperation = [];
                display(currentInput);
            }
        }
        else {
            const operands = currentInput.split(currentOperation);
            currentInput = calculate(operands[0], operands[1], currentOperation);
            currentOperation = '';
            ongoingOperaton = 0;
            display(currentInput);
        }
    })
})

btnOp.forEach((ele, idx) => {
    ele.addEventListener("click", (e) => {
        if (idx === 0)
            clearInput();
        else if (idx === 1)
            deleteInput();
    })
})

////////////////////////////////////////////////////////////////////
function calculate(n1, n2, op) {
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    switch (op) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
    }
}

function clearInput() {
    currentInput = '';
    currentOperation = [];
    display(currentInput);
}

function deleteInput() {
    currentInput = currentInput.slice(0, currentInput.length - 1);
    display(currentInput);
}

function display(s) {
    displayField.textContent = s;
    console.log(s);
}
