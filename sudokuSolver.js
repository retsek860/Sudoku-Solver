function solveSudoku() {
    
    givensGrid = createGivensGrid();
    workingGrid = JSON.parse(JSON.stringify(givensGrid))

};

function createGivensGrid() {
    // grid[row][column]
    
    givensGrid = new Array(9).fill().map(function() {
        return new Array(9).fill(0)
    });

    cells = $('[data-row]');

    for (var i = 0; i < cells.length; i++) {
        var row = $(cells[i]).data("row");
        var column = $(cells[i]).data("column");

        if ($(cells[i]).html() != "") {
            givensGrid[row][column] = $(cells[i]).html();            
        };

    };

    return givensGrid
};

function isGiven(givensGrid, row, column) {
    if (givensGrid[row][column] == "") {
        return false;
    } else {
        return true;
    }
}