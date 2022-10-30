const canvas = document.querySelector("#canvas");
const boxes = document.querySelectorAll("#canvas > div");
const btnClear = document.querySelector(".btn-clear");
const btnEraser = document.querySelector(".btn-eraser");
const btnRainbow = document.querySelector(".btn-rainbow");
const btnRandomColor = document.querySelector(".btn-random-color");
const btnSmall = document.querySelector(".btn-small");
const btnMedium = document.querySelector(".btn-medium");
const btnLarge = document.querySelector(".btn-large");

let currentStatus = 'RANDOM';

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
paint();



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

function paint() {
    boxes.forEach((ele) => {
        const selectedBox = ele;
        selectedBox.addEventListener("mouseenter", (e) => {
            if (currentStatus === 'RANDOM') {
                alert("yayy")
                e.target.style.backgroundColor = getColor();
                e.target.style.opacity = 1;
            } else if (currentStatus === 'RAINBOW') {

            } else if (currentStatus === 'CLEAR') {

            } else if (currentStatus === 'ERASER') {

            }
        })
    })
}


btnSmall.addEventListener("click", () => {
    clearBoxes();
    createCanvas(size.small.numBoxes);
    changeCanvasSize(size.small.numBoxes, size.small.boxSide)
})

btnMedium.addEventListener("click", () => {
    clearBoxes();
    createCanvas(size.medium.numBoxes);
    changeCanvasSize(size.medium.numBoxes, size.medium.boxSide)
})

btnLarge.addEventListener("click", () => {
    clearBoxes();
    createCanvas(size.large.numBoxes);
    changeCanvasSize(size.large.numBoxes, size.large.boxSide)
})

btnClear.addEventListener("click", () => {
    alert("clear")
    currentStatus = "CLEAR";
})

btnRainbow.addEventListener("click", () => {
    alert("rainbow")
    currentStatus = "RAINBOW";
})

btnRandomColor.addEventListener("click", () => {
    alert("random")
    currentStatus = "RANDOM";
})

btnEraser.addEventListener("click", () => {
    alert("eraser")
    currentStatus = 'ERASER';
})
