const gridContainer = document.querySelector('.container');
const clearBoard = document.querySelector('#clearBoard');
const column = document.querySelectorAll('.container > div')
let userSlider = 16;

//Reloads the grid when slider is changed
document.querySelector('input')
    .addEventListener('input', event => {
        userSlider = event.target.value
        reloadGrid()
});

//When hovereing over squares they turn white
gridContainer.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "white"
});

//When clicking clear the board reloads
clearBoard.onclick = () => reloadGrid();

//Creates 16 by 16 square
function setupGrid() {
    const cellCount = userSlider * userSlider;
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div');
        gridContainer.appendChild(cell);
}};


//Grid turns into empty space
function clearGrid() {
        gridContainer.innerHTML = ''
};


//Reloads grid
function reloadGrid() {
    clearGrid()
    setupGrid()
};

setupGrid();