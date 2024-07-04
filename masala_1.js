function flattenarray(array1) {
  const result = [];
  for (const i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      result = result.concat(flattenarray(array1[i]));
    } else {
      result.push(array1[i]);
    }
  }
  return result;
}

function difference(arr1, arr2) {
  const flatArr1 = flattenarray(arr1);
  const flatArr2 = flattenarray(arr2);

  const combinedArr = flatArr1.concat(flatArr2);
  const uniqueElements = [];

  for (const i = 0; i < combinedArr.length; i++) {
    if (uniqueElements.indexOf(combinedArr[i]) === -1) {
      uniqueElements.push(combinedArr[i]);
    }
  }

  return uniqueElements.sort((a, b) => a - b);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
