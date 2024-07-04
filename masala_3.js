function getUniqueValues(arr) {
    return [...new Set(arr)];
}

const testData1 = [1, 2, 2, 3, 4, 4, 5];
const testData2 = [1, 2, 3, 4, 5];
const testData3 = [1, -2, -2, 3, 4, -5, -6, -5];

console.log(getUniqueValues(testData1)); 
console.log(getUniqueValues(testData2)); 
console.log(getUniqueValues(testData3));
