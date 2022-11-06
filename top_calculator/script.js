const btnNums = document.querySelectorAll(".num");
const btnUtils = document.querySelectorAll(".utils");
const btnOp = document.querySelectorAll(".op");
const displayField = document.querySelector(".display");

const operators = ['=', "+", "-", "*", "/"]
const calculatorOp = ["CLEAR", "DELETE"]
let currentInput = '';
let currentOperationCount = 0, currentOperation = '';

btnNums.forEach((ele, idx) => {
    ele.addEventListener("click", (e) => {
        currentInput += idx;
        display(currentInput);
    })
})

btnUtils.forEach((ele, idx) => {
    ele.addEventListener("click", (e) => {
        if (operators[idx] !== '=' && currentOperationCount === 0 && (currentInput.length > 0)) {
            currentOperationCount++;
            currentOperation = operators[idx];
            currentInput += operators[idx];
            display(currentInput)
        }
        else if (operators[idx] === '=') {
            currentInput = "" + calculate(currentInput, currentOperation);
            currentOperationCount = 0;
            currentOperation = '';
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

function calculate(s, op) {
    let n = s.split(op);
    n1 = parseFloat(n[0]);
    n2 = parseFloat(n[1]);

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
    currentOperation = 0;
    display(currentInput);
}

function deleteInput() {
    if (currentInput.length > 0) {
        let last = currentInput[currentInput.length - 1];
        if (typeof parseInt(last) !== 'number') {
            currentOperationCount--;
            console.log("yayy1 " + currentOperationCount)
        }
        currentInput = currentInput.slice(0, currentInput.length - 1);
        display(currentInput);
    }
}

function display(s) {
    displayField.textContent = s;
    console.log(s);
}
