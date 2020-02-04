// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    if (stringA.length === stringB.length) {
        if (stringA === stringB) {
            return true;
        }
        charsA = stringA.split('').reduce((acc, char) => ({
            ...acc,
            [char]: acc[char] + 1 || 1
        }), {});
        charsB = stringB.split('').reduce((acc, char) => ({
            ...acc,
            [char]: acc[char] + 1 || 1
        }), {});
        return Object.keys(charsA).filter(char => charsA[char] !== charsB[char]).length === 0;
    }
    return false;
}

module.exports = anagrams;
