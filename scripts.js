// Elements

("use strict");
const body = document.querySelector("body");
const etch = document.querySelector(".etch");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const input = document.querySelector("input");

const colorGreen = document.querySelector(".color-green");
const colorBlue = document.querySelector(".color-blue");
const colorOrange = document.querySelector(".color-orange");
const colorPink = document.querySelector(".color-pink");

const selected = document.querySelector(".selected");

const show = (x) => x.classList.add("show");
const hide = (x) => x.classList.add("hide");
const remove = (x) => x.classList.add("remove");

// Init

input.focus();

// Functions

start.addEventListener("click", createGrid);

input.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    createGrid();
  }
});

colorGreen.addEventListener("click", function () {
  selected.style.background = "#50fa7b";
});

colorBlue.addEventListener("click", function () {
  selected.style.background = "#8be9fd";
});

colorPink.addEventListener("click", function () {
  selected.style.background = "#ff79c6";
});

colorOrange.addEventListener("click", function () {
  selected.style.background = "#ffb86c";
});
// Colors

reset.addEventListener("click", resetGrid);

function createGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => grid.remove());
  let number = Number(input.value);
  if (number > 50 || number < 2 || !Number.isInteger(number)) {
    alert("error! please enter a number between 2-50.");
    input.focus();
    input.value = "";
  } else {
    for (let row = 0; row < number; row++) {
      for (let column = 0; column < number; column++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.boxSizing = "border-box";
        grid.style.border = "#44475a solid 1px";
        grid.style.width = `${954 / number}px`;
        grid.style.height = `${954 / number}px`;
        etch.appendChild(grid);
        grid.addEventListener("mouseover", function () {
          grid.style.background = selected.style.background;
        });
      }
    }
    input.focus();
    input.value = "";
  }
}

function resetGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => grid.remove());
  input.focus();
}
