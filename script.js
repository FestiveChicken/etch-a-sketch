const gridContainer = document.querySelector('.container');

while (document.querySelectorAll('.container div').length < 256) {
    gridContainer.appendChild(document.createElement('div'))
}