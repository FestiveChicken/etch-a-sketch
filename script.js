// Container for grid
const gridContainer = document.querySelector('.container');
const clearBoard = document.querySelector('#clearBoard')

gridContainer.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "white"
})

clearBoard.onclick = () => reloadGrid()

// Creates 16 by 16 square
function setupGrid() {
    while (document.querySelectorAll('.container div').length < 256) {
        gridContainer.appendChild(document.createElement('div'))
    }
}
//Grid turns into empty space
function clearGrid() {
    while (document.querySelectorAll('.container div').length > 0) {
        gridContainer.innerHTML = ''
    }
}


function reloadGrid() {
    clearGrid()
    setupGrid()
}

setupGrid()