const gridContainer = document.querySelector('.container');
const clearBoard = document.querySelector('#clearBoard');
let slider = document.getElementById('myRange')
let outputOne = document.getElementById("outputOne");
let outputTwo = document.getElementById("outputTwo");

//Reloads the grid when slider is changed
document.querySelector('input')
    .addEventListener('input', event => {
        slider = event.target.value
        reloadGrid()
});

//Shows slider value on page
slider.oninput = function() {
    outputOne.innerHTML = this.value;
    outputTwo.innerHTML = this.value
  }

//When hovereing over squares they turn black
gridContainer.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "black"
});

//When clicking clear the board reloads
clearBoard.onclick = () => reloadGrid();

//Creates 16 by 16 square
function setupGrid() {
    const cellCount = slider;
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div');
        gridContainer.appendChild(cell);
        let allColumns = document.querySelectorAll('.container div');
        let lastColumn = allColumns[allColumns.length - 1];
        for (let j = 0; j < cellCount; j++) {
            lastColumn.appendChild(document.createElement('div'));
        }
    }
};


//Grid turns into empty space
function clearGrid() {
        gridContainer.innerHTML = ''
};


//Reloads grid
function reloadGrid() {
    clearGrid()
    setupGrid()
};

//Initilizes grid
setupGrid(slider = 16);

//Displays default slider value
outputOne.innerHTML = 16;
outputTwo.innerHTML = 16;