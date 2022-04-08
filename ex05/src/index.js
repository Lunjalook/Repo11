var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(list) {
    var monitorsList = [];

    for (var i = 0; i < list.length; i++) {

        monitorsList.push([list[i], i + 1]);
    }
    return monitorsList;
}
console.log(myMonitorsFunction(monitorsListArray));

module.exports = myMonitorsFunction;