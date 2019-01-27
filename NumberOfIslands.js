/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    let tracker = 0;
    
    while (grid[tracker] !== undefined) {
        console.log('current array', grid[tracker])
        let inner = 0;
        let current = 0;
        for (let i = 0; grid[tracker].length > i;i++) {
            if(grid[tracker][i] === "1") {
                // current reassigned grid[trakcer][i] ="2"
                grid[tracker][i] = "2";
                // recursive
                isLand(grid, tracker, i );
                count++;
            }
            
        }
        tracker++;
    }
    return count
    console.log('count: ', count)
    
};
function isLand(matrix, i, j) {
    // recursion, goes through all paths
    // i vertical, j horizontal
    // i++ down, i-- up, j++ right, j-- left
    checkXY(matrix, i, j+1); // right
    checkXY(matrix, i, j-1); // left
    checkXY(matrix, i-1, j); // top
    checkXY(matrix, i+1, j); // bottom
}

function checkXY(matrix, i, j) {
    // if matrix[i] is not undefined / defined
    // and matrix[i][j] === "1"
    // matrix[i][j] = "0", reassigned
    // call isLand(matrix, i, j) => recursion
 if(matrix[i] && matrix[i][j] == "1") {
  matrix[i][j] = "0";
  isLand(matrix, i, j);
 }
}
