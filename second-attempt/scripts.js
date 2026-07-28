// init
"use strict";

// elements
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const etch = document.querySelector(".etch-a-sketch");
const input = document.querySelector(".input");

const selected = document.querySelector(".selected");
const pink = document.querySelector(".pink");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");
const blue = document.querySelector(".blue");

// functions

start.addEventListener("click", makeGrid);
reset.addEventListener("click", resetFunct);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    makeGrid();
  }
});

pink.addEventListener("click", (e) => {
  selected.style.backgroundColor = "#ff82e2";
});

green.addEventListener("click", (e) => {
  selected.style.backgroundColor = "#50fa7b";
});

orange.addEventListener("click", (e) => {
  selected.style.backgroundColor = "#faa850";
});

blue.addEventListener("click", (e) => {
  selected.style.backgroundColor = "#50cffa";
});

function makeGrid() {
  resetFunct();
  let value = Number(input.value);

  if (Number.isInteger(value)) {
    for (let row = 0; row < value; row++) {
      for (let column = 0; column < value; column++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${954 / value}px`;
        grid.style.height = `${954 / value}px`;
        grid.addEventListener("mouseover", (e) => {
          grid.style.backgroundColor = selected.style.backgroundColor;
        });
        etch.appendChild(grid);
      }
    }
  } else if (!Number.isInteger(value)) {
    return alert("please enter a number between 2-50");
  }
}

function resetFunct() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((x) => {
    x.remove();
  });
}
