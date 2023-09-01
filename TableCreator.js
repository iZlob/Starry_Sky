let RowCount = Math.floor((window.screen.availHeight - 120)/22.8);
let ColumnCount = Math.floor((window.screen.availWidth)/22.8);

function CreateCells(row, name_row){
    for (let col = 0; col < ColumnCount; col++){
        let name_col = "col_" + row + "_" + col;
        $("#" + name_row).append("<td id=" + name_col + "></td>"); 
    } 
}
function CreateRow(){
    let arrRow = [];
    for (let row = 0; row < RowCount; row++){
        let name_row = `row_${row}`;
        $("#table").append("<tr id=" + name_row + "></tr>");
        arrRow.push(name_row);      
    }
    return arrRow;
}

let tableGenerator = {
CreateTable: function() {
    $("#TableRoot").append("<table id='table'> </table>");

    let arr = CreateRow();
    for (let i = 0; i < arr.length; ++i)
        CreateCells(i, arr[i]);
}
}