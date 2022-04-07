var myArr = [2, 5, 9, 8, 1];

function bubbleSort(arr) {
    var elem = [];

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                elem = arr[i];
                arr[i] = arr[j];
                arr[j] = elem;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(myArr));
module.exports = bubbleSort;