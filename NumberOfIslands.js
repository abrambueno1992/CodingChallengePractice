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
            let value = parseInt(grid[tracker][i], 10);
            if (inner === 0 && value === 1) {
                inner = 1;
                current = i;
                count++;
            }
            if (inner !== 0 && i !== current) {
                if (value === 0) {
                    inner = 0;
                }
            }
            
        }
        tracker++;
    }
    return count
    console.log('count: ', count)
    
};
