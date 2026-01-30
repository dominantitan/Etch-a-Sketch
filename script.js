const container = document.querySelector("#container");
const sizebutton = document.querySelector("#sizebutton");
const blackbutton = document.querySelector(".black");
const randombutton = document.querySelector(".random");

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

makeBlack(grid);

function makeBlack(grid) {
  grid.forEach((item) => {
    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "black";
    });
  });
}

function makeRandom(grid){
  grid.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = randomColor();
  });
});
}

blackbutton.addEventListener("click",() => {
  makeBlack(grid);
})

randombutton.addEventListener("click",() =>{
  makeRandom(grid);
})

// grid.forEach((item) => {
//   item.addEventListener("mouseleave", () => {
//     item.style.backgroundColor = randomColor();
//   });
// });

// grid.forEach((item) => {
//   item.addEventListener("mouseleave", () => {
//     item.style.backgroundColor = "black";
//   });
// });

function randomColorNumber() {
  let randomNumber = Math.floor(Math.random() * 256);
  return randomNumber;
}
function randomColor() {
  let r = randomColorNumber();
  let g = randomColorNumber();
  let b = randomColorNumber();

  return `rgb(${r}, ${g}, ${b})`;
}
