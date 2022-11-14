const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const result = document.querySelector("#result");
const clear = document.querySelector("#clear");
let isDark = false;

button.addEventListener("click", function () {
    const color = getColor();
    addCard(color);
    changeH1BgColor(color);
    isDark = false;
});

clear.addEventListener("click", function () {
    document.body.style = "none";
    result.innerHTML = "";

    h1.classList.remove("text-white")
    h1.classList.add("text-dark")
    h1.textContent = "Random Color Generator";
});


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

function addCard(color) {
    // card container
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-12");
    card.classList.add("col-md-6");
    card.classList.add("col-xl-4");
    card.setAttribute("style", "width: 18rem;");

    // card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // card contents
    const cardContent = document.createElement("h5");
    cardContent.classList.add("card-title");

    // add content 
    cardContent.textContent = color;
    if (isDark) {
        cardContent.classList.add("text-white");
    } else {
        cardContent.classList.add("text-dark");
    }

    // add color
    cardBody.style.backgroundColor = color;

    cardBody.insertAdjacentElement("beforeend", cardContent);
    card.insertAdjacentElement("beforeend", cardBody);
    result.insertAdjacentElement("beforeend", card);
}

function changeH1BgColor(newColor) {
    document.body.style.backgroundColor = newColor;
    if (isDark) {
        h1.classList.add("text-white");
    }
    h1.innerText = "You got " + newColor + "!";
}

/* <div class="card" style="width: 18rem;">
    <div class="card-body bg-dark">

        <h5 class="card-title">Card title</h5>
        
    </div>
</div> */
