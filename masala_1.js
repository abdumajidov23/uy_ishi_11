function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
}

function difference(arr1, arr2) {
    const flatArray1 = flattenArray(arr1);
    const flatArray2 = flattenArray(arr2);

    const unique = new Set([...flatArray1, ...flatArray2]);

    return Array.from(unique);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
