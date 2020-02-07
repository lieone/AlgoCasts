// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const cols = 2 * n - 1;
    const median = n - 1;
    let res = [];
    for (let row = 0; row < n; row++) {
        let rowStr = [];
        for (let col = 0; col < cols; col++) {
            if (col < median - row || col > median + row) {
                rowStr.push(' ');
            } else {
                rowStr.push('#');
            }
        }
        console.log(rowStr.join(''));
    }
}

module.exports = pyramid;
