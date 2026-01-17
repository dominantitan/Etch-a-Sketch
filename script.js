const container = document.querySelector("#container");
const GRID_HEIGHT = 16;
const GRID_WIDTH = 16;

for (let j = 0; j < GRID_HEIGHT; j++) {
  for (let i = 0; i < GRID_WIDTH; i++) {
    const gridbox = document.createElement("div");
    gridbox.classList.add("gridbox");
    container.appendChild(gridbox);
    console.log("1 grid box is added");
  }
  const divider = document.createElement("div");
  divider.classList.add("divider");
  container.appendChild(divider);
}
