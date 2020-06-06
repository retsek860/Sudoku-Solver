function createGrid() {
    for (var rows = 0; rows < 9; rows++) {
        for (var columns = 0; columns < 9; columns++) {
            cell = "<div class='grid' "
            if (rows%3==2) {
                cell += "style='box-shadow: 0 1px 0 #000, "
            } else {
                cell += "style='box-shadow: 0 1px 0 rgb(150, 150, 150), "
            }
            if (rows%3==0) {
                cell += "0 -1px 0 #000, "
            } else {
                cell += "0 -1px 0 rgb(150, 150, 150), "
            }
            if (columns%3==2) {
                cell += "1px 0 0 #000, "
            } else {
                cell += "1px 0 0 rgb(150, 150, 150), "
            }
            if (columns%3==0) {
                cell += "-1px 0 0 #000;'></div>"
            } else {
                cell += "-1px 0 0 rgb(150, 150, 150);'></div>"
            }
            $("#container").append(cell);
        }
    }
    $(".grid").width(90);
    $(".grid").height(90);
}

$( document ).ready(function() {
    createGrid()

    $(".grid").hover(
        function () {
            $(this).css("background", "lightgrey")
        },
        function () {
            $(this).css("background", "none")
        }
    );
});