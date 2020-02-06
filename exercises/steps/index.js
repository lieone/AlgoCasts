// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    const spaces = ''.padStart(n, ' ');
    const pounds = ''.padStart(n, '#');
    let i = 0;
    while(i++ < n) {
        console.log([pounds.slice(0, i), spaces.slice(i)].join(''));
    }
}

module.exports = steps;
