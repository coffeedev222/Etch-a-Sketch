// Create function to add divs to create a grid
// Loop through a given number to create number of elements for a grid
// Create event handler on hover to perform action on grid items 
let gridContainer = document.querySelector('.grid-container');
let userGridSize = 16;
let resetButton = document.getElementById('resetGrid');

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

let selectedColumns = document.querySelectorAll('.columns');

for( let i = 0; i < selectedColumns.length; i++) {
    selectedColumns[i].addEventListener('mouseover', function() {
        selectedColumns[i].classList.add('onHover');
    })
}

resetButton.addEventListener('click', function() {
    for( let j = 0; j < selectedColumns.length; j++) {
        selectedColumns[j].classList.remove('onHover');
    }
})
