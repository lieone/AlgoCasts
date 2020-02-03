// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const result = [];
    let chunkPointer = 0;
    while (chunkPointer < array.length) {
        result.push(array.slice(chunkPointer, chunkPointer + size));
        chunkPointer += size;
    }
    return result;
}

// function chunk(array, size) {
//     let result = [];
//     let subArray;
//     let step = 0;
//     for (let item of array) {
//         if (step === 0) {
//             subArray = [];
//             result.push(subArray);
//         }
//         subArray.push(item);
//         step = step === size - 1 ? 0 : step + 1;
//     }
//     return result;
// }

module.exports = chunk;
