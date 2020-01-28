// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   const arr = str.split('');
   for (let i = 0, j = arr.length - 1, halfSize = arr.length / 2; i < halfSize; i++, j--) {
       if (arr[i] !== arr[j]) {
           return false;
       }
   } 
   return true;
}

module.exports = palindrome;
