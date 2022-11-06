const btnNums = document.querySelectorAll(".num");
const btnUtils = document.querySelectorAll(".utils");
const btnOp = document.querySelectorAll(".op");
const displayField = document.querySelector(".display");

let currentInput = '';
let currentOperationCount = 0, currentOperation = '';

btnNums.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        currentInput += e.target.value;
        display(currentInput);
    })
})

btnUtils.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        if (e.target.value === '.') {
            currentInput += e.target.value;
            display(currentInput)
        }
        else if (e.target.value !== '=' && currentOperationCount === 0 && (currentInput.length > 0)) {
            currentOperationCount++;
            currentOperation = e.target.value;
            currentInput += e.target.value;
            display(currentInput)
        }
        else if (e.target.value === '=') {
            currentInput = "" + calculate(currentInput, currentOperation);
            currentOperationCount = 0;
            currentOperation = '';
            display(currentInput);
        }
    })
})

btnOp.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        if (e.target.value === 'CLEAR')
            clearInput();
        else if (e.target.value === 'DELETE')
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
