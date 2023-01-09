"use strict";

let currentYear = new Date().getFullYear();
console.log(currentYear);
const gameBoxSection = document.querySelector(".game-box-section");
document.querySelector(
  ".copyright-link"
).textContent = `MarcosVinAlves - ${currentYear}`;

//FUNCTION TO CREATE DIVS
function setGridBox(row, columns) {
  gameBoxSection.style.setProperty(
    "grid-template-columns",
    "repeat(" + columns + ", 1fr"
  );
  gameBoxSection.style.setProperty(
    "grid-template-rows",
    "repeat(" + row + ", 1fr"
  );
  for (let i = 1; i < row * columns + 1; i++) {
    document
      .querySelector(".game-box-section")
      .appendChild(document.createElement("div"))
      .classList.add("grid-item");
  }
  createColors();
}

//FUNCTION TO DELETE DIVS
function resetGrid() {
  while (gameBoxSection.firstChild) {
    gameBoxSection.removeChild(gameBoxSection.firstChild);
  }
}

//GAME SETTINGS BUTTONS CONFIGURATION

//DEFAULT GRID
setGridBox(16, 16);

document.querySelector(".small-grid").addEventListener("click", function () {
  resetGrid();
  setGridBox(16, 16);
});
document.querySelector(".medium-grid").addEventListener("click", function () {
  resetGrid();
  setGridBox(32, 32);
});
document.querySelector(".large-grid").addEventListener("click", function () {
  resetGrid();
  setGridBox(64, 64);
});
document.querySelector(".reset").addEventListener("click", function () {
  const gridItems = document.querySelectorAll(".game-box-section > div");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "#fff";
  });
});

//COLORS PICKERS BUTTONS CONFIGURATION
let selectedColor;

document
  .querySelector(".main-color-picker")
  .addEventListener("input", function () {
    selectedColor = document.querySelector(".main-color-picker").value;
  });

document.querySelector(".grey-color").addEventListener("click", function () {
  selectedColor = "#333";
});

document.querySelector(".black-color").addEventListener("click", function () {
  selectedColor = "#000";
});

document.querySelector(".white-color").addEventListener("click", function () {
  selectedColor = "#fff";
});

//GAME CONFIGURATION
function createColors() {
  const gridItems = document.querySelectorAll(".game-box-section > div");
  gridItems.forEach((item) => {
    item.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = selectedColor;
    });
  });
}

//TOGGLE GRID LINES BUTTON

document
  .querySelector(".toggle-section-title")
  .addEventListener("click", function () {
    const gridItems = document.querySelectorAll(".game-box-section > div");
    gridItems.forEach((item) => {
      item.classList.toggle("toggle-grid");
    });
  });
