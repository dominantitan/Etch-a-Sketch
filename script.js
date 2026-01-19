const container = document.querySelector("#container");
const sizebutton = document.querySelector("#sizebutton");
let size = 16;
const containerWidth = 500;
let gridboxWidth;
let Valid = true;
let input;

function formGrid(length) {
  for (let j = 0; j < length; j++) {
    for (let i = 0; i < length; i++) {
      const gridbox = document.createElement("div");
      gridbox.classList.add("gridbox");
      container.appendChild(gridbox);
      //console.log("1 grid box is added");
    }
  }
}

function removeGrid(nodeList) {
  nodeList.forEach((element) => {
    element.remove();
  });
}

formGrid(size);
let grid = document.querySelectorAll(".gridbox");

sizebutton.addEventListener("click", () => {
  do {
    input = +prompt("give a size below 100");
    if (input <= 100 && input != "") {
      Valid = false;
      removeGrid(grid);
      size = input;
      formGrid(size);
      grid = document.querySelectorAll(".gridbox");
      grid.forEach((element) => {
        gridboxWidth = containerWidth / size - 1;
        element.style.width = `${gridboxWidth}px`;
      });
    } else {
      Valid = true;
    }
  } while (Valid);
});

grid.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "grey";
  });
});

grid.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "black";
  });
});
