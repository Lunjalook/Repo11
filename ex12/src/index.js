function splitArrayInGroups(arr, n) {
    var result = [];
    var i = 0;

    while (i < arr.length) {
        result.push(arr.slice(i, i += n))
    }

    return result;
}

console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));


module.exports = splitArrayInGroups;