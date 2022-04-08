var str = "Paragon!";

function myReverse(str) {
    var obrnutiString = "";

    for (var i = str.length - 1; i >= 0; i--) {
        obrnutiString += str[i];

    }
    return obrnutiString;
}
console.log(myReverse(str));

module.exports = myReverse;