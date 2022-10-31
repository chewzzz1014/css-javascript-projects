const canvas = document.querySelector("#canvas");
const btnDraw = document.querySelector(".btn-draw");
const btnClear = document.querySelector(".btn-clear");
const btnEraser = document.querySelector(".btn-eraser");
const btnRainbow = document.querySelector(".btn-rainbow");
const btnRandomColor = document.querySelector(".btn-random-color");
const btnSmall = document.querySelector(".btn-small");
const btnMedium = document.querySelector(".btn-medium");
const btnLarge = document.querySelector(".btn-large");

let currentStatus = 'RANDOM', currentSize = 'MEDIUM';

const size = {
    small: {
        numBoxes: 60,
        boxSide: 10
    },
    medium: {
        numBoxes: 30,
        boxSide: 20
    },
    large: {
        numBoxes: 20,
        boxSide: 30
    },
};

createCanvas(size.medium.numBoxes);
const nodes = addNodesEvent();


function addNodesEvent() {
    const addEvent = optionChanged;
    return addEvent();
}

function optionChanged() {
    let nodes = document.querySelectorAll(".grid-item");

    console.log(currentStatus);
    if (currentStatus === 'RANDOM') {
        Array.from(nodes).forEach((ele) => {
            ele.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = getColor();
            })
        })
    } else if (currentStatus === 'RAINBOW') {
        Array.from(nodes).forEach((ele) => {
            ele.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = getRainbowColor();
                console.log(e.target.style.backgroundColor)
            })
        })
    } else if (currentStatus === 'ERASER') {
        Array.from(nodes).forEach((ele) => {
            ele.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "transparent";
            })
        })
    } else if (currentStatus === 'CLEAR') {
        Array.from(nodes).forEach((ele) => {
            ele.style.backgroundColor = "transparent";
        })
    }
    return nodes;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function changeCanvasSize(numBox, sizeSide) {
    canvas.style.gridTemplateRows = `repeat(${numBox}, ${sizeSide}px)`;
    canvas.style.gridTemplateColumns = `repeat(${numBox}, ${sizeSide}px)`;
}

function createCanvas(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const div = document.createElement("div");
            div.classList.add("grid-item");
            canvas.insertAdjacentElement("beforeend", div);
        }
    }
}

function clearBoxes() {
    canvas.innerHTML = "";
};

function randomColor() {
    const color = Math.floor(Math.random() * 256);
    return color;
}

function getColor() {
    const r = randomColor();
    const g = randomColor();
    const b = randomColor();
    if (r <= 80 && g <= 80 || r <= 80 && b <= 80 || g <= 80 && b <= 80 || (r <= 50 || g <= 50 || b <= 50))
        isDark = true;
    return "rgb(" + r + "," + g + "," + b + ")";
}

function getRainbowColor() {
    const colors = [
        "red", "orange", "yellow", "green", "blue", "violet", "purple"
    ];
    return colors[Math.floor(Math.random() * 7)];
}

function randomDraw() {
    let isFill;
    let nodes = document.querySelectorAll(".grid-item");
    Array.from(nodes).forEach((ele) => {
        isFill = Math.floor(Math.random() * 2);
        if (isFill === 1) {
            ele.style.backgroundColor = getColor();
        }
    })
}

/////////////////////////////////////////////////////////////////////////
btnSmall.addEventListener("click", () => {
    currentSize = 'SMALL';
    clearBoxes();
    createCanvas(size.small.numBoxes);
    changeCanvasSize(size.small.numBoxes, size.small.boxSide);
    addNodesEvent();
})

btnMedium.addEventListener("click", () => {
    currentSize = 'MEDIUM';
    clearBoxes();
    createCanvas(size.medium.numBoxes);
    changeCanvasSize(size.medium.numBoxes, size.medium.boxSide);
    addNodesEvent();
})

btnLarge.addEventListener("click", () => {
    currentSize = 'LARGE';
    clearBoxes();
    createCanvas(size.large.numBoxes);
    changeCanvasSize(size.large.numBoxes, size.large.boxSide)
    addNodesEvent();
})

btnClear.addEventListener("click", () => {
    currentStatus = "CLEAR";
    optionChanged();
})

btnRainbow.addEventListener("click", () => {
    currentStatus = "RAINBOW";
    optionChanged();
})

btnRandomColor.addEventListener("click", () => {
    currentStatus = "RANDOM";
    optionChanged();
})

btnEraser.addEventListener("click", () => {
    currentStatus = 'ERASER';
    optionChanged();
})

btnDraw.addEventListener("click", () => {
    currentStatus = 'DRAW';
    switch (currentSize) {
        case 'SMALL':
            clearBoxes();
            createCanvas(size.small.numBoxes);
            changeCanvasSize(size.small.numBoxes, size.small.boxSide);
            randomDraw();
            break;
        case 'MEDIUM':
            clearBoxes();
            createCanvas(size.medium.numBoxes);
            changeCanvasSize(size.medium.numBoxes, size.medium.boxSide);
            randomDraw();
            break;
        case 'LARGE':
            clearBoxes();
            createCanvas(size.large.numBoxes);
            changeCanvasSize(size.large.numBoxes, size.large.boxSide)
            randomDraw();
            break;
    }
})
