const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const save = document.querySelector("#save");
const clear = document.querySelector("#clear");
const displayNumber = document.querySelector("#display-num");


const result = document.querySelector("#result");


function addNumber() {
  const container = document.createElement("div");
  const text = document.createElement("p");

  text.innerHTML = "<b>" + displayNumber.textContent + "</b>";

  container.insertAdjacentElement("beforeend", text);
  container.classList.add("number-box");
  result.insertAdjacentElement("beforeend", container);

}

function increase() {
  displayNumber.textContent = parseInt(displayNumber.textContent) + 1;
  displayNumber.style.color = randomColor();
}

function decrease() {
  displayNumber.textContent = parseInt(displayNumber.textContent) - 1;
  displayNumber.style.color = randomColor();
}

function clearNum() {
  displayNumber.textContent = 0;
  displayNumber.style.color = randomColor();

  result.textContent = "";
}

function randomColor() {
  const r = Math.floor(Math.random() * 255) + 1;
  const g = Math.floor(Math.random() * 255) + 1;
  const b = Math.floor(Math.random() * 255) + 1;

  const color = "rgb(" + r + "," + g + "," + b + ")";
  return color;
}

save.addEventListener("click", addNumber);
increment.addEventListener("click", increase); decrement.addEventListener("click", decrease); clear.addEventListener("click", clearNum);