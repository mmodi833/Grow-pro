var color1 = {
    color: function () {
        console.log("coloring ".concat(this.name));
    },
    name: "blue"
};
var color2 = {
    color: function () {
        console.log("coloring ".concat(this.name));
    },
    name: "red"
};
color1.color();
color2.color();
var digit1 = {
    color: function () {
        console.log("Coloring ".concat(this.name));
    },
    name: "green",
    print: function (name) {
        console.log("Printing function is called " + name);
    }
};
var digit2 = {
    color: function () {
        console.log("Coloring ".concat(this.name));
    },
    name: "grey",
    print: function (name) {
        console.log("Printing function is called " + name);
    }
};
digit1.color();
digit1.print(digit1.name);
digit2.color();
digit2.print(digit2.name);
