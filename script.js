const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('resetGrid');
const userCustomGrid = document.getElementById('user-choice-btn');
const smallGridButton = document.getElementById('small-grid');
const mediumGridButton = document.getElementById('medium-grid');
const largeGridButton = document.getElementById('large-grid');

function createGrid(userGridSize = 16) {
    for( i = 0; i < userGridSize; i++) {
        let rows = document.createElement('div');
        rows.classList.add('rows');
        gridContainer.appendChild(rows);
        
        for( j = 0; j < userGridSize; j++) {
        let columns = document.createElement('div');
        columns.classList.add('columns');
        rows.appendChild(columns);
        }
    }
    addHoverEffect();
}

function addHoverEffect() {
    const columns = document.querySelectorAll('.columns');
    columns.forEach(column => {
        column.addEventListener('mouseover', () => {
            column.classList.add('onHover');
        });
    });
}

function resetHoverEffect() {
    const columns = document.querySelectorAll('.columns');
    columns.forEach(column => {
        column.classList.remove('onHover');
    });
}

function resetGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function setGridSize(gridSize) {
    if (gridSize === 'custom') {
        const userGridValue = parseInt(prompt('Please enter a number for the grid size: '), 10);
        if (!isNaN(userGridValue) && userGridValue > 0) {
            gridSize = userGridValue;
        } else {
            alert('Please enter a valid number');
            return;
        }
    }
    resetGrid();
    createGrid(gridSize);
}

userCustomGrid.addEventListener('click', () => setGridSize('custom'));
smallGridButton.addEventListener('click', () => setGridSize(16));
mediumGridButton.addEventListener('click', () => setGridSize(32));
largeGridButton.addEventListener('click', () => setGridSize(64));


resetButton.addEventListener('click', () => {
    resetHoverEffect();
})

createGrid();