function solveSudoku() {
    output = $("[data-row]")
    for (var i = 0; i < output.length; i++) {
        console.log($(output[i]).data("row"));
    };
};