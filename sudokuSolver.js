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

function isValid(grid, row, column, value) {
    
    // Check along row
    for (var i = 0; i < 9; i++) {
        if (i == column) { continue; }

        if (grid[row][i] == value) {
            return false;
        } 
    }

    // Check along column
    for (var i = 0; i < 9; i++) {
        if (i == row) { continue; }

        if (grid[i][column] == value) {
            return false;
        }
    }

    // Check in 3x3 box
    var x = Math.floor(column/3);
    var y = Math.floor(row/3);
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if ((i == row) && (j == column)) { continue; }
            if (grid[x + i][y + j] == value) {
                return false;
            }
        }
    }

    return true;

}