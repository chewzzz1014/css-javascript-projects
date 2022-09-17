const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const save = document.querySelector("#save");
const clear = document.querySelector("#clear");
const displayNumber = document.querySelector("#display-num");


const result = document.querySelector("#result");


function addNumber() {
  const container = document.createElement("div");
  const text = document.createElement("p");

  text.innerHTML = "<b>" + displayNumber.value + "</b>";

  container.insertAdjacentElement("beforeend", text);
  container.classList.toogle("number-box");
  result.insertAdjacentElement("beforeend", container);
  displayNumber.textContent = "";
}

save.addEventListener("click", addNumber);
