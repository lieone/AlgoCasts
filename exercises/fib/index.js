// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibHelper(a, b, counter) {
  if (counter === 0) {
    return a;
  }
  return fibHelper(b, a + b, counter - 1);
}

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fibHelper(0, 1, n);
}

// function fib(n) {
//   let pair = [0, 1];
//   if (n < 2) {
//     return pair[n];
//   }
//   for (let i = 2; i <= n; i++) {
//     pair[1] = pair[0] + pair[1];
//     pair[0] = pair[1] - pair[0];
//   }
//   return pair[1];
// }

module.exports = fib;
