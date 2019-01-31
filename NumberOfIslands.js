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
                // current reassigned grid[row][column] ="2"
                grid[row][column] = "2";
                // recursive
                isLand(grid, row, column );
                // island counter up, island found
                count++;
            }
            
        }
        // go to next row down
        row++;
    }
    return count
    console.log('count: ', count)
    
};
function isLand(matrix, row, column) {
    // recursion, goes through all paths
    // row horizontal array with all values
    // column values at each index of the row, representing vertical columns at that index
    // row++ down a row vertically
    // row-- up a row vertically
    // column++ right, column-- left
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
     // after reassigning from '1' to '0'
     // call isLand() with the same row and column
  isLand(matrix, row, column);
 }
}
