// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {};
    str.split('').forEach(char => chars[char] = chars[char] + 1 || 1);
    return Object.entries(chars).reduce((max, entry) => {
        return max[1] > entry[1] ? max : entry;
    }, ['', 0])[0];
}

module.exports = maxChar;
