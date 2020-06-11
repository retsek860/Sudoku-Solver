function solveSudoku() {
    
    givensGrid = createGivensGrid();
    workingGrid = JSON.parse(JSON.stringify(givensGrid))

    var row = 0;
    var column = 0;
    var goingForward = true;
    var working = true;

    while (working) {

        console.log(row, column, goingForward)

        if ((row < 0) || (column < 0)) {
            alert("Cannot solve this sudoku!");
            working = false;

        }
        else if (row > 8) {
            fillInSudoku(workingGrid);
            alert("Solved!")
            working = false;
        }

        else if (isGiven(givensGrid, row, column)) {
            temp = updateCoords(row, column, goingForward);
            row = temp[0];
            column = temp[1];   
        }
        
        else if (workingGrid[row][column] == 9) {
            workingGrid[row][column] = 0;
            goingForward = false; // Don't think this line is necessary, once code is complete consider taking this line out.
            temp = updateCoords(row, column, goingForward);
            row = temp[0];
            column = temp[1];
        }

        else {

            var cont = true;
            var value = workingGrid[row][column] + 1;

            while ((cont == true) && (value < 10)) {

                if (isValid(workingGrid, row, column, value)) {

                    workingGrid[row][column] = value;

                    goingForward = true;
                    cont = false;

                    value -= 1;
                }

                value += 1;
            }
            if (value == 10) {

                workingGrid[row][column] = 0;
                goingForward = false;
            }

            temp = updateCoords(row, column, goingForward);
            row = temp[0];
            column = temp[1];
        }
    }
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
    var xminor = Math.floor(column/3);
    var yminor = Math.floor(row/3);
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (((3*xminor + i) != column) && ((3*yminor + j) != row)) {
                if (grid[3*yminor + j][3*xminor + i] == value) {
                    return false;
                }
            }
        }
    }

    return true;
}

function fillInSudoku(workingGrid) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            $('[data-row="' + i + '"][data-column="' + j + '"]').css("fontSize", 70);
            $('[data-row="' + i + '"][data-column="' + j + '"]').html(workingGrid[i][j]);
        }
    }
};

function updateCoords(row, column, goingForward) {

    if ((column == 8) && goingForward) {
        return [row += 1, 0];

    } else if ((column == 0) && (goingForward == false)) {
        return [row -= 1, 8];

    } else {
        if (goingForward) {
            return [row, column += 1];
        } else {
            return [row, column -= 1];
        }
    }
}