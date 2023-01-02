function gen1(arg1) {
    console.log(arg1);
}
function gen2(args1, args2) {
    if ((typeof args1) === "number" && typeof args2 === "number")
        return args1 + args2;
    else if ((typeof args1) === "string" && typeof args2 === "string") {
        return args1.concat(args2);
    }
    else {
        return args1;
    }
}
gen1(100);
console.log(gen2(100, 200));
console.log(gen2("abc", "xyz"));
class Gen {
    constructor(map) {
        this.map = map;
    }
    setMap(map) {
        this.map = map;
    }
    getMap() {
        return this.map;
    }
}
let map = new Map();
map.set("id", 1);
map.set("num", 1234);
let m1 = new Gen(map);
console.log(m1.getMap());
let map1 = new Map();
map1.set("hasId", true);
map1.set("isPossible", false);
let m2 = new Gen(map1);
console.log(m2.getMap());
