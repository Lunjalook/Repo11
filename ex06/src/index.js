
var myNestedArray = [["Toblerone, 5"]];
function myNestedFunction(arr) {
    arr.push(["Milka", 3]);
    return myNestedArray;
}

console.log(myNestedFunction(myNestedArray));
module.exports = myNestedFunction;