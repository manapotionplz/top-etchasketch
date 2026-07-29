`use strict`;

// elements

const etch = document.querySelector(".etch-a-sketch");
const start = document.querySelector(".start");
const restart = document.querySelector(".restart");
const userInput = document.querySelector(".userInput");

const selectedColor = document.querySelector(".selectedColor");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");

// init

start.addEventListener("click", createGrid);
restart.addEventListener("click", restartGrid);

blue.addEventListener("click", (e) => {
  selectedColor.style.backgroundColor = getComputedStyle(
    e.target,
  ).backgroundColor;
});

green.addEventListener("click", (e) => {
  selectedColor.style.backgroundColor = getComputedStyle(
    e.target,
  ).backgroundColor;
});

// functions

function createGrid() {
  restartGrid();
  let userSize = Number(userInput.value);
  if (Number.isInteger(userSize) === false || userSize < 2 || userSize > 50) {
    return alert("please enter a valid number between 2-50");
  } else {
    for (let row = 0; row < userSize; row++) {
      for (let column = 0; column < userSize; column++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${954 / userSize}px`;
        grid.style.height = `${954 / userSize}px`;
        etch.appendChild(grid);
        grid.addEventListener("mouseover", () => {
          grid.style.backgroundColor = selectedColor.style.backgroundColor;
        });
      }
    }
  }
}

function restartGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((x) => {
    x.remove();
  });
}
