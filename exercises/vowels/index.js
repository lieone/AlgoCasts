// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowelsArr = ["a", "e", "i", "o", "u"];

function vowels(str) {
  return Array.from(str.toLowerCase()).reduce((total, letter) => {
    if (vowelsArr.includes(letter)) {
      total += 1;
    }
    return total;
  }, 0);
}

module.exports = vowels;
