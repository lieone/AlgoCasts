// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1, 2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const direction = [[1, 0], [0, 1], [-1, 0], [0, -1]];
const DIR_ROW = 1;
const DIR_COL = 0;

function matrix(n) {
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = new Array(n);
    }
    let counter = 1;
    let row = 0;
    let col = 0;
    let side = n - 1;
    let sideCounter = 0;
    let directionIdx = 0;
    const limitByDirection = [0, 0, 0, 0];
    while (counter <= n ** 2) {
        result[row][col] = counter++;
        if (sideCounter == side - limitByDirection[(directionIdx + 1) % 4]) {
            sideCounter = limitByDirection[directionIdx % 4];
            limitByDirection[directionIdx % 4] += 1;
            directionIdx += 1;
        }
        sideCounter++;
        col += direction[directionIdx % 4][DIR_COL];
        row += direction[directionIdx % 4][DIR_ROW];
    }
    return result;
}

module.exports = matrix;
