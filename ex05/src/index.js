var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(list) {
    var monitorslist = [];

    for (var i = 0; i < list.length; i++) {

        monitorslist.push([list[i], i + 1]);
    }
    return monitorslist;
}
console.log(myMonitorsFunction(monitorsListArray));

module.exports = myMonitorsFunction;