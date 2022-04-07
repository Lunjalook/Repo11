var temps = [
    [31, 32, 19, 37],
    [29, 27, 55, 36],
    [17, 27, 42, 46],
    [29, 52, 21, 64],
    [91, 27, 31, 61]
];

function myArrayFunction(temps) {
    var averageDayTemp = [];
    for (var i = 0; i < 5; i++) {
        var suma = 0;
        for (var j = 0; j < 4; j++) {
            suma += temps[i][j];
        }
        var prosjek = suma / 4;
        averageDayTemp.push(prosjek);
    }
    return averageDayTemp;
}
console.log(myArrayFunction(temps));

