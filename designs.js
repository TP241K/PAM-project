//alert("I did it!");
// declare variables below
var cellTable = document.getElementById("pixelCanvas");
var width = document.getElementById("inputWidth");
var height = document.getElementById("inputHeight");
var numberOfCells = document.getElementById("sizePicker");
var pixelColor = document.getElementById("colorPicker");

// create event Listener when user selects pixel to change
pixelColor.addEventListener("click", function(){});

// on form submitted event, call resetGrid() and call makeGrid()
numberOfCells.onsubmit = function(event) {
    event.preventDefault();
    resetGrid();
    makeGrid();
};

// funtion to reset grid
function resetGrid() {
    while (cellTable.firstChild) {
         cellTable.removeChild(cellTable.firstChild);
    }
}

// funtion to create a grid with user selected rows and columns
function makeGrid() {
    for (var r=0; r < height.value; r++) {
        var row = cellTable.insertRow(r);
        for (var c = 0; c < width.value; c++) {
            var cell = row.insertCell(c);
            // color square when user clicks on a square
            cell.addEventListener("click", fillSquare);
        }
    }
}

// funtion to fill selected grid square with user selected color
function fillSquare () {
    this.setAttribute("style", `background-color: ${pixelColor.value}`);
}
