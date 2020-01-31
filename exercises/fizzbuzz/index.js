// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const config = [
    { test: (n) => n % 3 === 0, result: () => 'fizz' },
    { test: (n) => n % 5 === 0, result: () => 'buzz' }
];

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        console.log(
            config.filter(cfg => cfg.test(i)).map(cfg => cfg.result()).join('') || i
        );
    }
}

module.exports = fizzBuzz;
