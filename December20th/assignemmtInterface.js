let ar = { id: 1, name: "ram" };
let a2 = { id: 2, name: "raghav" };
let a3 = { id: 3, name: "shyam" };
class Work {
    constructor() {
        this.map = new Map();
    }
    add(artist, arr) {
        if (this.map.has(artist)) {
            let array = this.map.get(artist);
            let result = [...array, ...arr];
            this.map.set(artist, result);
        }
        else {
            this.map.set(artist, arr);
        }
    }
    getMap() {
        return this.map;
    }
}
let arWork = ["abc", "def", "ghi"];
let ar2Work = ["nmh", "zxy", "klo"];
let ar3Work = ["gfg", "lum", "www"];
let work = new Work();
work.add(ar, arWork);
work.add(a2, ar2Work);
work.add(a3, ar3Work);
work.add(a3, ["abcd", "efgh"]);
console.log(work.getMap());
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Sunday"] = 0] = "Sunday";
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
})(Weekdays || (Weekdays = {}));
let daysOff = [Weekdays.Saturday, Weekdays.Sunday];
console.log(daysOff);
function convertTemperature(temp, fromTO) {
    fromTO = fromTO.toLowerCase();
    let a = fromTO.charAt(0);
    if (a == 'f') {
        return (temp - 32) / 1.8000;
    }
    else {
        return (temp * 1.80000) + 32;
    }
}
console.log(convertTemperature(100, "FToC"));
console.log(convertTemperature(37.777, "CToF"));
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
;
function move(where) {
    console.log(`Moving towards ${Direction[where]}`);
}
move(Direction.North);
