const canvas = document.querySelector("#canvas");
// const nodes = document.querySelectorAll(".grid-item");
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

startGame();
function startGame() {
    createCanvas(size.medium.numBoxes);
    addNodesEvent();
}



function addNodesEvent() {
    let nodes = document.querySelectorAll(".grid-item");

    const addEvent = optionChanged;
    addEvent(nodes);

}

function optionChanged() {
    let nodes = document.querySelectorAll(".grid-item");

    console.log(currentStatus);
    if (currentStatus === 'RANDOM') {
        Array.from(nodes).forEach((ele) => {
            console.log("ok!")
            ele.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = getColor();
            })
        })
    } else if (currentStatus === 'RAINBOW') {
        Array.from(nodes).forEach((ele) => {
            console.log("ok rainbow!")
            ele.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = getRainbowColor();
                console.log(e.target.style.backgroundColor)
            })
        })
    } else if (currentStatus === 'ERASER') {
        Array.from(nodes).forEach((ele) => {
            console.log("ok rainbow!")
            ele.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "transparent";
            })
        })
    } else if (currentStatus === 'CLEAR') {
        Array.from(nodes).forEach((ele) => {
            ele.style.backgroundColor = "transparent";
        })
    }
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


btnSmall.addEventListener("click", () => {
    clearBoxes();
    createCanvas(size.small.numBoxes);
    changeCanvasSize(size.small.numBoxes, size.small.boxSide);
    addNodesEvent();
})

btnMedium.addEventListener("click", () => {
    clearBoxes();
    createCanvas(size.medium.numBoxes);
    changeCanvasSize(size.medium.numBoxes, size.medium.boxSide);
    addNodesEvent();
})

btnLarge.addEventListener("click", () => {
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
