/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let row = 0;
    
    while (grid[row] !== undefined) {
        console.log('current array', grid[row])
        let inner = 0;
        let current = 0;
        for (let column = 0; grid[row].length > column;column++) {
            // row index from outside 'while' loop
            // column index from 'for' loop
            if(grid[row][column] === "1") {
                // current reassigned grid[row][i] ="2"
                grid[row][column] = "2";
                // recursive
                isLand(grid, row, column );
                count++;
            }
            
        }
        row++;
    }
    return count
    console.log('count: ', count)
    
};
function isLand(matrix, row, column) {
    // recursion, goes through all paths
    // row vertical, column horizontal
    // row++ down, row-- up, column++ right, column-- left
    checkXY(matrix, row, column+1); // right
    checkXY(matrix, row, column-1); // left
    checkXY(matrix, row-1, column); // top
    checkXY(matrix, row+1, column); // bottom
}

function checkXY(matrix, row, column) {
    // if matrix[row] is not undefined / defined
    // and matrix[row][column] === "1"
    // matrix[row][column] = "0", reassigned
    // call isLand(matrix, row, column) => recursion
 if(matrix[row] && matrix[row][column] == "1") {
  matrix[row][column] = "0";
  isLand(matrix, row, column);
 }
}
